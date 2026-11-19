# Reunion

An Observable Notebook Kit project (converted from Observable Framework).
Playback uses the shared engine
[observable2/scoringthespeltair](https://github.com/observable2/scoringthespeltair),
pinned here by release tag (see below).

## Commands

- `npm run preview` — local preview at http://localhost:5173
- `npm run build` — build to `./dist`

## Layout

- `nbks/index.html` — the notebook: loads the data and plays it with the engine
- `nbks/custom.tmpl` — page template (colours, font, spel styles)
- `nbks/data/config.js` — playback settings (times in milliseconds)
- `nbks/data/` — `spels.json`, `paras.json` and `scores.json`;
  `reunion_tstamps.json` (word timings from the recording, in
  seconds) is the source of `scores.json`
- `tools/build-scores.mjs` — regenerates `nbks/data/scores.json` (one
  score per paragraph, durations in milliseconds) from the
  timestamps and checks every id against `spels.json` and
  `paras.json`

## Working with the engine

`package.json` depends on `github:observable2/scoringthespeltair#vX.Y.Z`,
a tagged release; `package-lock.json` pins the commit, so nothing
updates until you bump the tag. To bump, push the engine tag, then run
`node node_modules/scoringthespeltair/scripts/bump.js vX.Y.Z` in this
folder (`--dry` previews). Do not use plain `npm install` or
`npm update` for this: inside the `scored-air` workspace they update
the shared root lockfile, not this project's own, which is the one the
deploy builds from. Commit `package.json` and `package-lock.json`.
