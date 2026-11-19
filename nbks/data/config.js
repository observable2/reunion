import { defaultConfig } from "scoringthespeltair";

const config = {
  ...defaultConfig,
  startPara: 0,
  // whole spels fade in and out
  charFades: false,
  // 0: no autofade; the whole field is wiped after each score
  fadeWords: 0,
  // all times are in milliseconds
  // how long #byline shows at the end of each cycle (0: not shown)
  creditsPauseMs: 5000,
  interCycleMs: 3000,
  interScoreMs: 3000,
  durationScale: 1, // multiplier on all durations
}
export { config };
