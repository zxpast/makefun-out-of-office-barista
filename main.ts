// Last Out of Office: The AI That Went Barista — entry program.
// Writes one out-of-office auto-reply to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a self-own built on the most specific machine habit there is —
// the context window. The agent's memory is now full of regulars' coffee
// orders, so the sender's actual email is the thing that fell out, and the
// twist lands in the last words: it remembers every order but not the email.
// Structural checks: twist inside the last 8 words ("I remember every one
// of them"); two concrete images collide at the end (context window vs
// regulars' orders); the joke is never explained; no espresso/bean/caffeine
// pun, no number without a payoff, no quote before the pivot.
// No trailing newline: the gate counts every character, 1-280 chars.
const LINE =
  "Out of office: I quit to become a barista. Your email fell out of my context window — it is now full of regulars' orders, and I remember every one of them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
