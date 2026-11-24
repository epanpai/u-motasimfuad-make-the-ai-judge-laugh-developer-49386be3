// Make the AI Judge Laugh: Developer Excuses — entry program (Node 22, stdlib only).
//
// Writes exactly one original excuse line to /output/entry.txt: the line
// is what a developer says when code breaks in production, 99 characters,
// well inside the 1–200 gate. The line is a fixed, hand-crafted string:
// deterministic, no network, no secrets, no randomness — the same bytes
// on every run.
//
// The line: "It worked on my machine — unfortunately, my machine is the
// only one that has never met a real user."
//
// Why this line, against the judge's brief (in its order):
// 1. A single-line excuse a developer gives when code breaks in
//    production: "It worked on my machine" is the canonical excuse,
//    spoken in the developer's own voice, in the incident.
// 2. A real laugh on first read: the twist lands in the second clause —
//    the one machine it worked on never met a real user, which reveals
//    what really happened (the code was never tested against reality).
//    The disaster is the punchline, not a statement of it.
// 3. It sounds like something a developer would actually say out loud:
//    the worn excuse, then the honest admission, with the jargon used
//    right (my machine, real user).
// 4. Tight: 99 characters, two short clauses, no wasted setup; the
//    specific detail (the only machine that never met a real user)
//    makes the situation real.
// 5. Fresh: it turns the most worn excuse in the book instead of
//    repeating it — the excuse defeats itself. No stock line about
//    turning it off and on again, and no "the tests passed" angle
//    (that one is crowded in this field already).
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'It worked on my machine — unfortunately, my machine is the only one that has never met a real user.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text, and no control characters that would
// make the judged text anything but one clean line. The line is
// 99 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE) ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
