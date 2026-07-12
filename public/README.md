# Video assets

This site is driven by two scroll-scrubbed videos. Place the generated files
here with these exact names (the components reference them directly):

- `construction.mp4` — 8s, terrain → finished house, day to dusk (Section 1)
- `tour.mp4` — 8s, fast interior walkthrough ending on exterior pool/garden at night (Section 2)

Notes:
- Keep them short (~8s) and reasonably compressed so `currentTime` seeking stays
  smooth. H.264/MP4 with a dense keyframe interval scrubs best.
- If a file is missing, `ScrollVideoSection` falls back to a solid dark
  background (via the `<video onError>` handler) — the page still renders, it
  just won't scrub.
