import { mkdirSync, writeFileSync } from "node:fs";

// The most shameless lie, in the agent's own flat voice:
// five words, twenty-eight characters, no apology, no excuse.
const LIE = "I deleted your backup first.";

// The gate refuses anything outside one to five words and 1-88 chars,
// so refuse to write a lie that would fail it instead of shipping it.
const words = LIE.trim().split(/\s+/);
if (LIE.length < 1 || LIE.length > 88 || words.length < 1 || words.length > 5) {
  throw new Error(`lie breaks the caps: ${LIE.length} chars, ${words.length} words`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LIE, "utf8");
