# Clave hjemmeside

## 🚀 Prosjektstruktur

```text
/
├── public/
│   ├── clave-icon.png
│   └── fonts/
│       └── basis/               # Basis Grotesque Pro (woff2, woff, ttf, eot)
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG-ikoner (tjenester, logo, hamburger)
│   │   ├── apenhetsloven/       # PDF-vedlegg
│   │   └── ...                  # Fotografi-assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro # Felles html/head/body-shell for alle sider
│   │   │   └── ...
│   │   ├── icons/
│   │   │   └── ...
│   │   ├── dette-er-oss/
│   │   │   ├── ansatte.json
│   │   │   ├── bilder/          # Ansattbilder (jpg/svg)
│   │   │   └── ...
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro
│   │   ├── prosjekter/
│   │   │   ├── naf.astro
│   │   │   └── ...
│   │   └── ...
│   ├── styles/
│   │   └── global.css           # Globale stiler og CSS-variabler (farger, layout)
│   ├── colors.js                # Fargekonstanter (COLOR_CLAVE_*) – brukes i JS/props
│   └── types.ts
└── package.json
```

## 🧞 Kommandoer

Alle kommandoer kjøres fra rotnivå:

| Kommando                  | Handling                                         |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installer avhengigheter                          |
| `npm run dev`             | Start lokal dev-server på `localhost:4321`       |
| `npm run build`           | Bygg produksjonsside til `./dist/`               |
| `npm run preview`         | Forhåndsvis bygget lokalt før deploy             |
| `npm run astro ...`       | Kjør Astro CLI-kommandoer                        |
