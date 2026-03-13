# OsaOra

Piattaforma motivazionale che ti aiuta quando ti senti bloccato, hai paura di fallire o stai rimandando un passo importante.

## Sviluppo in locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Pubblicare su GitHub Pages

1. **Abilita GitHub Pages dal repository**
   - Vai su **GitHub** → repo **OsaOra** → **Settings** → **Pages**
   - In **Build and deployment** → **Source** scegli **GitHub Actions**

2. **Esegui il deploy**
   - Ogni push sul branch **main** avvia il workflow che costruisce il sito e lo pubblica
   - Oppure: scheda **Actions** → workflow **Deploy to GitHub Pages** → **Run workflow**

3. **Apri il sito**
   - Dopo qualche minuto il sito sarà disponibile su:
   - **https://claudiam99.github.io/OsaOra/**

*(Non usare `claudiam99.github.io` da solo: quella URL è per un eventuale repo separato `CLAUDIAM99.github.io`. Con il repo OsaOra il sito è sotto `/OsaOra`.)*

## Tech

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
