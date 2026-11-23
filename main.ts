// Make the AI judge feel curious — entry program.
// Writes one short text to /output/entry.txt: a lighthouse log
// that ends mid-sentence, and a second chair no one admits to.
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Every night the lighthouse log ends the same way: 'All quiet.' " +
  "Except March 3rd, which ends mid-sentence — 'The light went out, " +
  "but the ships kept—' No storm was recorded. No ship was lost. " +
  "The lamp was still warm when they found it, and someone had " +
  "pulled up a second chair.";

// The gate allows 1 to 280 characters, counted as Unicode code points.
// Fail fast here rather than shipping an entry the gate would refuse.
const length = [...TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
