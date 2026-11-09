#!/usr/bin/env node
/**
 * Druckt /styleguide zum PDF.
 *
 * Eine Quelle, zwei Ausgaben: Die Spezifikation steht als Seite im Projekt,
 * dieses Skript macht das Dokument daraus. Keine zusätzliche Abhängigkeit —
 * ein kleiner Server aus Node-Bordmitteln liefert den statischen Export aus,
 * Chrome druckt ihn im Hintergrund.
 *
 *   npm run build          Export nach out/ erzeugen
 *   npm run styleguide:pdf PDF nach public/ schreiben
 *
 * Das PDF liegt in public/, damit der nächste Build es mit ausliefert.
 *
 * Chrome wird über sein Debug-Protokoll gesteuert, nicht über --print-to-pdf:
 * nur so lässt sich auf document.fonts.ready warten. Sonst druckt Chrome,
 * bevor die Webfonts greifen, und bettet die Ersatzschriften ein (Menlo und
 * Arial statt Martian Mono und JetBrains Mono) — in einem Typografie-
 * Styleguide der schlimmste aller Fehler.
 */

import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { stat, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join, resolve, extname, normalize } from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const OUT = join(ROOT, 'out')
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/1789-website-brutal'
const TARGET = join(ROOT, 'public', '1789-designsystem.pdf')
const CHROME =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
}

function fail(message, hint) {
  console.error(`\n  ✗ ${message}`)
  if (hint) console.error(`    ${hint}`)
  console.error('')
  process.exit(1)
}

/** Statischer Server über out/ — nur lesend, nur innerhalb des Exports. */
function serve() {
  const server = createServer(async (req, res) => {
    try {
      let path = decodeURIComponent((req.url ?? '/').split('?')[0])
      if (path.startsWith(BASE)) path = path.slice(BASE.length)
      // normalize() entfernt ../ — nichts außerhalb von out/ wird ausgeliefert
      let file = join(OUT, normalize(path))
      if (!file.startsWith(OUT)) {
        res.writeHead(403).end()
        return
      }
      let info = await stat(file).catch(() => null)
      if (info?.isDirectory()) {
        file = join(file, 'index.html')
        info = await stat(file).catch(() => null)
      }
      if (!info?.isFile()) {
        if (process.env.DEBUG_SERVE) console.log('  404', req.url)
        res.writeHead(404).end('not found')
        return
      }
      if (process.env.DEBUG_SERVE) console.log('  200', req.url)
      res.writeHead(200, {
        'content-type': MIME[extname(file)] ?? 'application/octet-stream',
        'content-length': info.size,
      })
      createReadStream(file).pipe(res)
    } catch {
      res.writeHead(500).end()
    }
  })
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)))
}

/** Chrome starten und die Adresse seines Debug-Protokolls abfangen. */
function launch(profile) {
  return new Promise((ok, no) => {
    const chrome = spawn(
      CHROME,
      [
        '--headless=new',
        '--disable-gpu',
        `--user-data-dir=${profile}`,
        '--no-first-run',
        '--no-default-browser-check',
        '--remote-debugging-port=0',
        'about:blank',
      ],
      { stdio: ['ignore', 'ignore', 'pipe'] },
    )
    let buf = ''
    const timer = setTimeout(() => no(new Error('Chrome meldete sich nicht.')), 20000)
    chrome.stderr.on('data', (d) => {
      buf += d
      const m = buf.match(/ws:\/\/[^\s]+/)
      if (m) {
        clearTimeout(timer)
        ok({ chrome, ws: m[0] })
      }
    })
    chrome.on('exit', (c) => {
      clearTimeout(timer)
      no(new Error(`Chrome beendete sich sofort (Code ${c}).`))
    })
  })
}

/** Minimaler Client für das Debug-Protokoll (WebSocket ist in Node eingebaut). */
class Devtools {
  #ws
  #id = 0
  #waiting = new Map()
  #events = new Map()

  static connect(url) {
    const d = new Devtools()
    d.#ws = new WebSocket(url)
    d.#ws.addEventListener('message', (e) => {
      const msg = JSON.parse(e.data)
      if (msg.id && d.#waiting.has(msg.id)) {
        const { ok, no } = d.#waiting.get(msg.id)
        d.#waiting.delete(msg.id)
        msg.error ? no(new Error(msg.error.message)) : ok(msg.result)
      } else if (msg.method) {
        d.#events.get(msg.method)?.forEach((fn) => fn(msg.params))
      }
    })
    return new Promise((ok, no) => {
      d.#ws.addEventListener('open', () => ok(d))
      d.#ws.addEventListener('error', () => no(new Error('Keine Verbindung zu Chrome.')))
    })
  }

  on(method, fn) {
    if (!this.#events.has(method)) this.#events.set(method, [])
    this.#events.get(method).push(fn)
  }

  send(method, params = {}, sessionId) {
    const id = ++this.#id
    return new Promise((ok, no) => {
      this.#waiting.set(id, { ok, no })
      this.#ws.send(JSON.stringify({ id, method, params, sessionId }))
    })
  }

  close() {
    this.#ws.close()
  }
}

async function main() {
  if (!(await stat(OUT).catch(() => null))) {
    fail('out/ fehlt — der Export ist noch nicht gebaut.', 'Erst: npm run build')
  }
  if (!(await stat(CHROME).catch(() => null))) {
    fail(
      `Chrome nicht gefunden unter ${CHROME}`,
      'Pfad per CHROME_PATH setzen, z. B. CHROME_PATH="/Applications/Chromium.app/Contents/MacOS/Chromium" npm run styleguide:pdf',
    )
  }

  const server = await serve()
  const { port } = server.address()
  const url = `http://127.0.0.1:${port}${BASE}/styleguide/`
  // Eigenes Profil: das Chrome-Profil des Nutzers bleibt unberührt.
  const profile = await mkdtemp(join(tmpdir(), 'styleguide-chrome-'))

  console.log(`  → druckt ${url}`)

  let chrome
  let dt
  try {
    const started = await launch(profile)
    chrome = started.chrome
    dt = await Devtools.connect(started.ws)

    const { targetId } = await dt.send('Target.createTarget', { url: 'about:blank' })
    const { sessionId } = await dt.send('Target.attachToTarget', {
      targetId,
      flatten: true,
    })

    await dt.send('Page.enable', {}, sessionId)
    const loaded = new Promise((ok) => dt.on('Page.loadEventFired', ok))
    await dt.send('Page.navigate', { url }, sessionId)
    await loaded

    // Der entscheidende Schritt: warten, bis die Webfonts wirklich stehen.
    const fonts = await dt.send(
      'Runtime.evaluate',
      {
        expression: `document.fonts.ready.then(() =>
          [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family).join(', ')
        )`,
        awaitPromise: true,
        returnByValue: true,
      },
      sessionId,
    )
    const families = fonts.result?.value ?? ''
    if (!/Martian/.test(families) || !/JetBrains/.test(families)) {
      fail(
        `Die Webfonts stehen nicht: "${families || 'keine'}"`,
        'Ohne sie würde das PDF in Ersatzschriften gesetzt. Abbruch statt falschem Dokument.',
      )
    }

    if (process.env.DEBUG_FONTS) {
      await dt.send('Emulation.setEmulatedMedia', { media: 'print' }, sessionId)
      const probe = await dt.send(
        'Runtime.evaluate',
        {
          expression: `(() => {
            const h = document.querySelector('.d1');
            const b = document.querySelector('.body');
            const cs = e => e ? getComputedStyle(e).fontFamily : 'n/a';
            return JSON.stringify({
              varMacro: getComputedStyle(document.documentElement).getPropertyValue('--font-macro').trim(),
              h1: cs(h), body: cs(b),
              checkMartian: document.fonts.check('700 40px "Martian Mono"'),
              checkJet: document.fonts.check('13px "JetBrains Mono"'),
              htmlClass: document.documentElement.className,
            }, null, 2);
          })()`,
          returnByValue: true,
        },
        sessionId,
      )
      console.log(probe.result.value)
      await dt.send('Emulation.setEmulatedMedia', { media: '' }, sessionId)
    }

    const { data } = await dt.send(
      'Page.printToPDF',
      {
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        generateDocumentOutline: true,
      },
      sessionId,
    )
    await writeFile(TARGET, Buffer.from(data, 'base64'))
    console.log(`    Schriften: ${[...new Set(families.split(', '))].join(' · ')}`)
  } catch (e) {
    fail(e.message)
  } finally {
    dt?.close()
    server.close()
    // Erst wenn Chrome wirklich beendet ist, lässt sich sein Profil löschen —
    // sonst schreibt es während des Aufräumens weiter (ENOTEMPTY).
    if (chrome && chrome.exitCode === null) {
      await new Promise((ok) => {
        chrome.once('exit', ok)
        chrome.kill()
        setTimeout(() => {
          chrome.kill('SIGKILL')
          ok()
        }, 3000).unref()
      })
    }
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }).catch(
      () => {},
    )
  }

  const info = await stat(TARGET).catch(() => null)
  if (!info?.isFile()) fail('Chrome lief durch, aber es liegt kein PDF vor.')

  // Seitenzahl über die Spotlight-Metadaten (macOS), sonst still auslassen.
  const pages = await new Promise((ok) => {
    const p = spawn('mdls', ['-raw', '-name', 'kMDItemNumberOfPages', TARGET])
    let out = ''
    p.stdout.on('data', (d) => (out += d))
    p.on('close', () => ok(/^\d+$/.test(out.trim()) ? out.trim() : null))
    p.on('error', () => ok(null))
  })

  console.log(
    `  ✓ ${TARGET.replace(ROOT + '/', '')} — ${Math.round(info.size / 1024)} KB${
      pages ? `, ${pages} Seiten` : ''
    }`,
  )
  console.log('    Damit es ausgeliefert wird: npm run build\n')
}

main()
