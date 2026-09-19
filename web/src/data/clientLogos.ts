/* ═══ KUNDEN — Marken für das Logo-Band im Hero ════════════════════════════
   Übernommen aus der Kundenversion (ClientLogoCarousel): typografische
   Nachbauten der Wortmarken, keine Original-Logodateien — nur Deutsche Bank
   und Commerzbank hatten echte Pfade, und beide stehen nicht mehr auf der
   Liste. Farbe ist currentColor, das Band setzt sie weiß. Echte SVGs
   ersetzen einen Eintrag 1:1 (fill/stroke auf currentColor stellen).       */

export const CLIENT_LOGOS: readonly { name: string; svg: string }[] = [
  {
    name: "Procter & Gamble",
    svg: "<svg viewBox=\"0 0 96 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"23\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"28\" y=\"35\" font-family=\"Georgia,serif\" font-size=\"18\" font-weight=\"400\" text-anchor=\"middle\" fill=\"currentColor\">P&amp;G</text><text x=\"60\" y=\"23\" font-family=\"Arial,sans-serif\" font-size=\"7.5\" font-weight=\"600\" letter-spacing=\"0.5\" fill=\"currentColor\">PROCTER</text><text x=\"60\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"7.5\" font-weight=\"600\" letter-spacing=\"0.5\" fill=\"currentColor\">&amp;</text><text x=\"60\" y=\"45\" font-family=\"Arial,sans-serif\" font-size=\"7.5\" font-weight=\"600\" letter-spacing=\"0.5\" fill=\"currentColor\">GAMBLE</text></svg>",
  },
  {
    name: "Schwäbisch Hall",
    svg: "<svg viewBox=\"0 0 260 48\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"35\" font-family=\"Georgia,serif\" font-size=\"26\" font-weight=\"400\" fill=\"currentColor\">Schwäbisch Hall</text></svg>",
  },
  {
    name: "Stadt Freiburg",
    svg: "<svg viewBox=\"0 0 170 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"18\" font-family=\"Arial,sans-serif\" font-size=\"9\" font-weight=\"600\" letter-spacing=\"1.5\" fill=\"currentColor\">STADT</text><text x=\"2\" y=\"46\" font-family=\"Georgia,serif\" font-size=\"28\" font-weight=\"400\" fill=\"currentColor\">Freiburg</text></svg>",
  },
  {
    name: "WTS",
    svg: "<svg viewBox=\"0 0 80 52\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"40\" y=\"40\" font-family=\"Arial,sans-serif\" font-size=\"36\" font-weight=\"700\" letter-spacing=\"-1\" text-anchor=\"middle\" fill=\"currentColor\">WTS</text></svg>",
  },
  {
    name: "Metro Digital",
    svg: "<svg viewBox=\"0 0 240 48\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"36\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"800\" letter-spacing=\"-0.5\" fill=\"currentColor\">METRO</text><text x=\"114\" y=\"36\" font-family=\"Arial,sans-serif\" font-size=\"30\" font-weight=\"300\" fill=\"currentColor\">digital</text></svg>",
  },
  {
    name: "Gelsenwasser",
    svg: "<svg viewBox=\"0 0 260 48\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"36\" font-family=\"Arial,sans-serif\" font-size=\"26\" font-weight=\"400\" fill=\"currentColor\">Gelsenwasser</text></svg>",
  },
  {
    name: "PwC",
    svg: "<svg viewBox=\"0 0 76 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"46\" font-family=\"Arial,sans-serif\" font-size=\"38\" font-weight=\"700\" fill=\"currentColor\">PwC</text><rect x=\"70\" y=\"5\" width=\"5\" height=\"5\" fill=\"currentColor\"/></svg>",
  },
  {
    name: "Mercedes-Benz Group",
    svg: "<svg viewBox=\"0 0 186 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"28\" cy=\"28\" r=\"23\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M28 7 L31.5 24 L46 33 L28 27 L10 33 L24.5 24 Z\" fill=\"currentColor\"/><text x=\"60\" y=\"23\" font-family=\"Arial,sans-serif\" font-size=\"9\" font-weight=\"600\" letter-spacing=\"1\" fill=\"currentColor\">MERCEDES-BENZ</text><text x=\"60\" y=\"38\" font-family=\"Arial,sans-serif\" font-size=\"9\" font-weight=\"400\" letter-spacing=\"1\" fill=\"currentColor\">GROUP</text></svg>",
  },
  {
    name: "WD-40",
    svg: "<svg viewBox=\"0 0 92 54\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"86\" height=\"48\" rx=\"24\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"46\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"22\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"-0.5\" fill=\"currentColor\">WD-40</text></svg>",
  },
  {
    name: "greyt",
    svg: "<svg viewBox=\"0 0 88 64\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"44\" y=\"40\" font-family=\"Georgia,serif\" font-size=\"32\" font-weight=\"400\" font-style=\"italic\" text-anchor=\"middle\" fill=\"currentColor\">greyt</text></svg>",
  },
  {
    name: "teccle group",
    svg: "<svg viewBox=\"0 0 210 48\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"2\" y=\"34\" font-family=\"Arial,sans-serif\" font-size=\"24\" font-weight=\"300\" letter-spacing=\"0.5\" fill=\"currentColor\">teccle group</text></svg>",
  },
]
