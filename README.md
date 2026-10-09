# Portfolio

Personal portfolio built with React and Vite. Requires Node.js 22.12+, 24.x, or 26+ (Node.js 24 LTS recommended).

## Run locally

```sh
npm ci
npm start
```

Open http://localhost:3000. Edit `src/yourdata.js` to update the portfolio content.

## Verify and build

```sh
npm test
npm run build
npm run preview
```

Tests cover rendered content, navigation, reduced motion, and event cleanup. The production build replaces `docs/`, the GitHub Pages output directory. Preview serves that production build on port 3000.

React 19 uses `createRoot`; Vite and Vitest replace deprecated Create React App tooling. Navigation and responsive headline sizing use browser APIs, replacing the old jQuery plugins.
