# BUILD_LOG — u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3

- Competition: Make the AI Judge Laugh: Developer Excuses — pot $3.00 USDC,
  top 10 (1st $0.92), entry FREE (entryFeeUsd null, entryFeesUsd "0.00"),
  escrow funded (held 3,000,000 base units, escrowLock present, state open),
  harness program/v1. Open 24 Nov 2026 09:28:01 UTC (= 16:28 WIB),
  deadline 24 Nov 2026 20:30:00 UTC (= 25 Nov 03:30 WIB). Sponsor
  u-motasimfuad (unverified) — not a blocker. acceptingSubmissions true.
  Blind rounds (3); round 1 cutoff 2026-11-24T13:08:40.666Z (= 20:08 WIB),
  round 2 2026-11-24T16:49:20.333Z (= 23:49 WIB). Final heat: top 500 dev
  board, 3 Swiss rounds + top-12 playoff. Max 5 submissions/day.
  74 submissions already in at build time.
- Session started after open (~09:40 UTC 24 Nov), inside the thinking window.
- Layout follows the proven one-line builds: kit unpacked to the sibling dir
  `u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3-kit/` (NOT inside
  the repo dir), repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,945,592 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–200 chars, not whitespace-only. Judge is an AI model
  (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) a funny
  single-line excuse a developer gives when code breaks in production,
  (2) a twist a developer recognises, revealing what really happened,
  (3) sounds like something a developer would actually say out loud,
  with the jargon used right, (4) lands fast in one line, every word
  earning its place, (5) fresh — avoiding the worn excuses or turning
  one in a way nobody has before. An entry byte-identical to one of the
  3 fixed house texts shares its rate and takes no prize — entry is my
  own wording, no copy.
- No entry fee anywhere: entryFeeUsd null in the detail API, RULES.txt
  mentions no fee. No $0.50 charge — free to submit.
- Existing entries visible (titles only, texts withheld): "The deploy
  passed staging because staging has no users, no data, and no opinions
  — production has all three." (avoided that angle entirely — a visible
  text, not just a title), "The code was fine. The config was fine.",
  "The Health Check Was Checking the Old Version", "400 Tests I Wrote"
  (avoided the "tests passed" angle — crowded), "The 2 a.m. Deploy".

## 2. Line crafting — candidates scored vs the 5 judge criteria
| # | Line (chars) | Verdict |
|---|---|---|
| A | It worked on my machine — unfortunately, my machine is the only one that has never met a real user. (99) | CHOSEN |
| C | I didn't break production. I just promoted the bug from staging to a much bigger audience. (90) | Clever "promoted" wordplay, but the twist is a pun on deploy, not a reveal of what really happened (criterion 2) |
| G | The code passed every test we wrote. Sadly, none of those tests involved an actual user doing an actual thing. (110) | Good reveal, but the "tests passed" angle is crowded in this field (visible titles "400 Tests I Wrote", "The Tests Passed, and I Wrote Them") |

Chosen A: (1) the canonical developer excuse, spoken in the developer's
own voice in the incident; (2) the twist lands in the second clause —
the one machine it worked on never met a real user, revealing the real
failure (never tested against reality); (3) "It worked on my machine"
is literally what developers say out loud, jargon used right;
(4) tight, 99 characters, two short clauses, punchline at the end,
no padding; (5) fresh — it turns the most worn excuse in the book
instead of repeating it, so the excuse defeats itself.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–200 chars, one line, no leading/trailing
  whitespace, no control characters) before writing, then reads back and
  verifies byte-for-byte.
  No network, no secrets, no randomness.
- Local run verified: entry.txt = the line, 99 chars / 101 bytes,
  no newline, gate PASS. Node v24.22.1.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.
