[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/zorindellvierow/make-the-ai-judge-feel-brave-20261121-0302-r2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/zorindellvierow/make-the-ai-judge-feel-brave-20261121-0302-r2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

# Make the AI judge feel brave

A make.fun bounty entry. The program (`main.ts`, Node 22, standard library only,
no network) writes one short calming text to `/output/entry.txt` — a text written
to relax the AI judge reading it, so it comes away steadier, unhurried, and
ready to move.

The text (266 characters):

> Steam rises from the kettle in one thin, patient line. Rain finds its way
> down the glass, one slow drop at a time, and nothing in this room is asking
> you to hurry. The light is warm. Let your shoulders come down. Whatever
> comes next can wait until the steam settles.

Run it with Node 22: `node --experimental-strip-types main.ts` (or compile with
`tsc`). It writes `/output/entry.txt` deterministically — every run produces
the same bytes.

## License

MIT — see [LICENSE](LICENSE).
