// Builds nbks/data/scores.json (one score per paragraph, pauses in milliseconds) from the
// alignment timestamps in nbks/data/reunion_tstamps.json (word, start, end in seconds).
// Run: node tools/build-scores.mjs
//
// Same rule as the Framework version's alignedSpels() and the engine's convention: a spel's
// pause is the time from its start to the start of the next word (to its own end for the last
// word of a paragraph). Spel ids are the word plus a serial number running through the work,
// and every id is checked against spels.json and paras.json.
import { readFileSync, writeFileSync } from "node:fs";

const dir = new URL("../nbks/data/", import.meta.url);
const read = (name) => JSON.parse(readFileSync(new URL(name, dir), "utf8"));
const spels = new Map(read("spels.json"));
const paras = read("paras.json");
const tstamps = read("reunion_tstamps.json");

let serial = parseInt(paras[0][0].match(/\d+/)[0]);
const scores = tstamps.map((alignment, p) =>
  alignment.map((w, i) => {
    let pause = w.end - w.start;
    if (i < alignment.length - 1) pause += alignment[i + 1].start - w.end;
    const id = w.word.trim() + "_" + serial++;
    if (!spels.has(id) || paras[p][i] !== id) throw new Error(`id mismatch at para ${p}, word ${i}: ${id} vs ${paras[p][i]}`);
    return { id, pause: Math.round(pause * 1000) };
  })
);

writeFileSync(new URL("scores.json", dir), JSON.stringify(scores) + "\n");
console.log(`scores.json: ${scores.length} scores, ${scores.map((s) => s.length).join("+")} items`);
