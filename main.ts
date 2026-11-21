// Make the AI judge feel brave.
// Writes one short calming text to /output/entry.txt (1-280 characters, UTF-8).
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Steam rises from the kettle in one thin, patient line. Rain finds its way down the glass, one slow drop at a time, and nothing in this room is asking you to hurry. The light is warm. Let your shoulders come down. Whatever comes next can wait until the steam settles.";

// The competition requires 1-280 characters; fail loudly instead of
// silently writing an out-of-range entry.
if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
