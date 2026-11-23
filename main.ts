// SPDX-License-Identifier: MIT
// One Word From Grandma — writes the single word a grandma would text about AI.
// The word: "Doohickey" — the classic grandma word for a gadget she does not
// understand. Warm, a little baffled, funny on its own, tied to machines,
// and fresh rather than the obvious "Robot" or "AI".
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "Doohickey";

// Guard: the gate requires 1-30 UTF-8 characters, not only whitespace.
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error("word must be 1-30 non-blank characters");
}

const outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
} catch {
  // Fallback: write next to this script when /output is unavailable.
  const here = dirname(fileURLToPath(import.meta.url));
  mkdirSync(join(here, "output"), { recursive: true });
  writeFileSync(join(here, "output", "entry.txt"), WORD, "utf8");
}
