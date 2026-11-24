# Archives Of Traveling Ancestors

## Info

An archive of Traveling Ancestors in the Chinese edition of Sky: Children of the Light. It follows the Android timeline before the platform merge and the shared Chinese server afterward.

- `/skypre` shows searchable historical records and their sources.
- `/skypre/prediction` shows a static ranking for the next period after the archive cutoff, with rolling backtests and candidate coverage. The ranking is for entertainment.
- `/skypre/experiment` runs the legacy 68-candidate TensorFlow.js model and lets you train a temporary model with adjustable feature weights.

## Technology Stack

Vue 3, TypeScript, Vue Router, Vite, Dart Sass, Element Plus, and TensorFlow.js.

## Local development

Use Node.js 22.13+ on the 22.x line or Node.js 24 or newer.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

The production build is written to `dist/` and is served under `/TensorflowSkyPredict.github.io/`.

Run `npm run data:generate` after editing the archive. CI runs `npm run data:check` for generated data and `npm run data:test` for the backtest regression tests. To check the built pages locally, install Chromium with `npx playwright install chromium --only-shell` and run `npm run smoke:static`.

## Contribute
If you have some good ideas of this web UI of you wanna improve the trained model  
Just fork it and pull request, it willed be accepeted if I think you do a good contribution.
