import { defaultConfig } from "scoringthespeltair";

const config = {
  ...defaultConfig,
  startingPoint: 0,
  charFades: false, // whole spels fade in and out
  fadeWords: 0, // zero for no autoFade: each paragraph is shown, then removed
  // all times are in milliseconds
  creditsPauseMs: 5000, // zero for no credits
  interCycleMs: 3000,
  interScoreMs: 3000,
  slower: 1, // multiplier on all times
}
export { config };
