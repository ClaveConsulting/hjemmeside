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

## 🔑 Miljøvariabler

Lag en `.env` på rotnivå (filen er gitignorert):

| Variabel                     | Brukes av                  | Beskrivelse                                  |
| :--------------------------- | :------------------------- | :------------------------------------------- |
| `PUBLIC_GOOGLE_MAPS_API_KEY` | `src/components/Map.astro` | Google Maps-nøkkel for kartet på `/kontakt-oss` |

Verdien ligger i Netlify under Site configuration → Environment variables.

Mangler `.env`, bygger Astro inn `key=undefined` uten at bygget feiler. Kartet
viser da «The provided API key is invalid», som peker på nøkkelen framfor på
den manglende filen.

## 🗺️ Google Maps

`Map.astro` er en server-rendret iframe mot **Maps Embed API**. Merk at dette er
et annet API enn Maps JavaScript API, som den tidligere React-komponenten brukte.
Embed API må være aktivert på Cloud-prosjektet, ellers svarer Google med «This API
is not activated on your API project».

Nøkkelen har `PUBLIC_`-prefiks og er dermed synlig i sidekilden. Den er derfor
begrenset med website restrictions, noe som har to konsekvenser:

- **Lokal utvikling** krever at `http://localhost:4321/*` og `http://localhost/*`
  ligger i restriksjonslista. Legg til begge — Googles matching av portnummer er
  ikke konsistent.
- **Deploy previews kan ikke vise kartet.** De kjører på
  `deploy-preview-<PR>--<site>.netlify.app`, og `*.netlify.app/*` avvises av Google
  fordi `netlify.app` står på Public Suffix List. Et ødelagt kart i en preview sier
  altså ingenting om prod.

Verifiser prod-stien etter et bygg ved å hente ut den genererte URL-en og kalle
den slik en besøkende på clave.no ville gjort:

```bash
URL=$(grep -o 'src="https://www.google.com/maps/embed/v1/place?[^"]*"' \
      dist/kontakt-oss/index.html | sed 's/src="//;s/"$//;s/&amp;/\&/g')
curl -s -o /dev/null -w "%{http_code}\n" -H "Referer: https://clave.no/" "$URL"
```

`200` betyr at hele kjeden virker: env-variabelen nådde `Map.astro`, URL-en er
riktig bygget, nøkkelen er gyldig, Embed API er aktivert og referrer-restriksjonen
slipper gjennom clave.no.

### Feilmeldinger

Alle kommer som 401/403 fra samme endepunkt — det er kun teksten som skiller dem:

| Melding fra Google                                     | Årsak                                    |
| :----------------------------------------------------- | :--------------------------------------- |
| You must use an API key                                | `key=` – variabelen er tom i shellet     |
| The provided API key is invalid                        | `key=undefined` – `.env` mangler         |
| The provided API key is expired                        | Gammel eller slettet nøkkel              |
| This IP, site or mobile application is not authorized  | Referrer ikke i restriksjonslista        |
| This API is not activated on your API project          | Maps Embed API ikke aktivert i prosjektet |
