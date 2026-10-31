# Reunion

An Observable Notebook Kit project (converted from Observable Framework).
Playback uses the shared engine
[observable2/scoringthespeltair](https://github.com/observable2/scoringthespeltair),
which this project tracks at the tip of its default branch.

## Commands

- `npm run preview` — local preview at http://localhost:5173
- `npm run build` — build to `./dist`

## Layout

- `nbks/index.html` — the notebook: loads the data and plays it with the engine
- `nbks/custom.tmpl` — page template (colours, font, spel styles)
- `nbks/data/config.js` — playback settings (times in milliseconds)
- `nbks/data/` — `spels.json`, `paras.json` and `scores.json`; `reunion_tstamps.json` (word timings from the
  recording, in seconds) is the source of `scores.json`
- `tools/build-scores.mjs` — regenerates `nbks/data/scores.json` (one score per paragraph, pauses in
  milliseconds) from the timestamps and checks every id against `spels.json` and `paras.json`

## Working with the engine

`package.json` depends on `github:observable2/scoringthespeltair` (no tag).
`package-lock.json` pins the exact commit, so **nothing updates until you ask it to**:
commit and push the engine, then run `npm update scoringthespeltair` here and commit the lockfile.
