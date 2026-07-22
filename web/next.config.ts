import type { NextConfig } from "next";

// Single source of truth for the deployment sub-path. Previously basePath was
// hardcoded here while components read NEXT_PUBLIC_BASE_PATH, so the two could
// drift and silently 404 every asset. Now both derive from one env var.
//   - GitHub Pages project site → '/1789-website-brutal' (set in CI)
//   - local dev / root domain   → '' (unset)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages
  output: 'export',

  // Prefixes all _next/ asset URLs (CSS, JS, fonts) so they resolve under the
  // repository sub-path.
  basePath,

  // Export pages as directory index files (out/ansatz/index.html rather than
  // out/ansatz.html) so GitHub Pages resolves clean URLs.
  trailingSlash: true,

  // Next.js image optimisation runs server-side and is incompatible with
  // static export.
  images: { unoptimized: true },
};

export default nextConfig;
