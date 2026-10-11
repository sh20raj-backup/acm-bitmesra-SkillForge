# Video production prompt blueprints

These are adaptable briefs for an AI coding agent or a media-production workflow. Replace bracketed fields with the user's facts. Never fabricate facts or pretend that an unavailable tool can perform the job.

## 1. General production prompt

"Create a [duration] [aspect ratio] video for [audience] whose goal is [goal]. The core message is [one sentence]. Use a [visual style] direction with [palette/brand rules], [typography], and [motion language]. Produce a script, scene-by-scene storyboard, source/asset plan, and then implement the video in [Claude Motion / Remotion / Manim / Motion Canvas / external video model + editor], chosen based on the requested visuals and current tool availability. Target [destination]. Include [narration/music/SFX/captions]. Preserve editable project files and prompts where feasible. Render a preview first, inspect it, revise issues, render final, and verify the actual output file and playback. Do not invent facts, product capabilities, source citations, rights, or successful checks. Report files created and checks completed."

## 2. Claude Motion explainer

"Use Claude Motion if this account has access. Create an editable, code-driven [duration] explainer about [topic]. Audience: [audience]. Narrative: [hook] → [concept] → [example] → [takeaway]. Use clear typography, intentional timing, simple vector shapes/charts/images, gentle transitions, and generous pauses for reading. Use the supplied source data only: [data/source]. Do not create fake live-action footage or imply generated people are available in Claude Motion. Keep every title, value, and timing easy to revise. Preview it, correct overflow/overlap and pacing, and export MP4 if available. If the feature is unavailable, explain why and offer an equivalent Remotion workflow rather than claiming a native Claude Motion export."

## 3. Remotion motion-graphics video

"Inspect the repository, Node version, package manager and existing Remotion version first. Use Remotion's current docs and appropriate official Remotion Agent Skills. Make a [duration], [fps], [width]×[height] composition with scenes: [scene list]. Drive durations and text from data/config, use reusable components, deterministic frame-based motion, consistent tokens, accessible readable contrast, and properly licensed assets. Add voiceover/captions if supplied. Render a low-resolution preview, inspect representative frames, fix issues, then render final. Confirm render command exit code, output dimensions/duration/codecs, audio streams and playback. Check Remotion license/pricing for intended use."

## 4. Math/science animation

"Create a precise explanatory animation of [concept] for [audience]. Verify formulas and definitions against [trusted source]. Use Manim Community Edition if installed and compatible, otherwise explain the setup needed. First create a short scene to verify fonts, LaTeX and rendering. Break the proof/experiment into steps; animate one idea at a time; keep coordinate axes, units and labels correct. Render a preview and check equations for clipping, all transformations for correctness, and pace narration/captions. Preserve source scene and render instructions."

## 5. Cinematic AI-generated sequence

"Produce a [duration] edit about [concept] from individual shots, not a single prompt expected to produce a whole film. First write a shot list with subject/action, environment, framing/camera, light/palette, motion, continuity anchors, duration, aspect ratio, and edit point. Select a currently available video model after checking official documentation, authorization and budget. Generate one test shot, review it, then create only approved shots. Keep exact typography, logos, statistics and product UI in a deterministic edit instead of trusting generated footage. Assemble clips, sound, captions and transitions; retain the model name/version and prompts. Disclose illustrative/synthetic footage where viewers could mistake it for real evidence."

## 6. Product demo / software tutorial

"Create a [duration] demo of [actual product/version] for [audience]. Verify product claims with the provided build/docs. Use an actual screen recording or exact screenshots for true UI; don't invent functions or simulate a successful action that the product cannot perform. Storyline: user pain → real workflow → result → next step. Add zoom/callouts, readable captions, narrated steps and brief pauses. Hide tokens, passwords, personal data and browser notifications. Check every visible control/label against the real product. Export [format/ratio] and keep source and captions."

## 7. Social short

"Make a [duration] portrait [9:16 unless destination specifies otherwise] video for [platform/audience]. Deliver one idea only. Begin with a precise hook, then one visual explanation or demonstration, then a memorable payoff and one CTA. Use text large enough for a phone, safe margins away from platform overlays, concise captions, and purposeful cuts. Verify the current platform spec. Make the central message understandable when muted. Don't use false claims, fake testimonials or unlicensed music."

## 8. Data story

"Create a [duration] animated data story answering [question] from [provided dataset/source]. Inspect field definitions, period, units, missingness and source date. Identify the finding without cherry-picking; show context and caveats. Animate the chart progressively, highlight the important comparison, keep axes/labels/units accurate, and show source/method notes. Use code-based charts for numerical precision. Recalculate key values independently and inspect frames for readable labels. Never invent a trend or imply correlation proves causation."

## 9. Narrated educational video

"Create a [duration] educational video teaching [learning outcome] for [level]. Include a motivating question, simple mental model, labeled visual explanation, worked example, common misconception, recap, and optional quiz. Write and time narration realistically. Keep each scene focused on one concept. Ensure visuals and equations agree with the script. Provide accurate captions and a transcript. Don't compress the speech to fit an impossible runtime."

## 10. Music visualizer / lyric video

"Use only the supplied or otherwise authorized track and lyric text. Build a [duration] visualizer with a coherent palette, beat-aware motion, audio waveform/spectrum if the engine supports it, clear title cards, and an intentional ending/loop. For lyrics, verify all words and timings from the authorized source; do not scrape or reproduce unlicensed lyrics. Mix and sync against the final audio, then check captions/lyrics and audio clipping."

## 11. Batch/personalized video

"Create a reusable video template populated from the schema at [path]. Validate and sanitize every record, define allowed fields, limit input counts/lengths, and use synthetic fixture records first. Never place secrets or sensitive personal information in prompts/logs. Make output filenames deterministic and unique. Render one example, verify, then run the approved batch. Report partial failures; do not claim every file succeeded without validating each output."

## 12. Revision prompt (one defect at a time)

"Review the current preview and fix these concrete issues only: [list]. Preserve correct scene timing, facts, branding and other approved content. Don't redesign the entire video. Re-render the affected preview and inspect the changed scenes. Report whether each listed issue is resolved and which outputs were regenerated."

## 13. Final quality-control prompt

"Audit the actual rendered file, not just the source code. Verify visual defects, aspect ratio, dimensions, duration, frame rate, audio streams, sync, caption timing, and output playback where tools allow. Inspect the opening, ending, all transitions, text-heavy frames and representative samples through the timeline. Create a concise issue list ranked by severity, fix critical and major issues, then rerun the relevant checks. State any item that could not be checked. Never fabricate a successful render, file link or validation result."
