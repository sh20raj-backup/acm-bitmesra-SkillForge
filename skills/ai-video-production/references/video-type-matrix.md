# Video type matrix and production selection

Use this reference when turning a loose idea into a practical video plan. "Can generate" means the workflow can help create the result when suitable tools, assets, and permissions are available; it does not mean every agent natively generates finished video files.

## 1. Video type taxonomy

| Type | Typical visual language | Preferred production path | Main risks / checks |
|---|---|---|---|
| Animated explainer | Typography, shapes, labeled diagrams, scenes | Claude Motion or Remotion | Message hierarchy, pacing, readability |
| Kinetic typography | Animated words, type transitions, rhythm | Claude Motion, Remotion, Motion Canvas | Exact spelling, safe areas, legibility |
| Infographic video | Icons, numbers, transitions, callouts | Remotion or Claude Motion | Source and units for every number |
| Data-story / animated charts | Bars, lines, maps, annotations | Remotion or Claude Motion | Correct values, axis scale, update date |
| Mathematical animation | Equations, plots, geometric transformations | Manim | Mathematical and unit correctness |
| Scientific / engineering explainer | Schematics, particles, process steps | Manim, Motion Canvas, Remotion | Model fidelity and clear labels |
| Software architecture | Nodes, arrows, data flow, highlights | Remotion, SVG, Motion Canvas | Accurate relationships and readable labels |
| Algorithm / CS visualization | State changes, array/pointer motion, graph traversals | Remotion or Manim | Step correctness and deterministic state |
| UI micro-animation | Button states, onboarding, loading loops | CSS/SVG, Remotion, Claude Motion | Must reflect actual product behavior |
| Product demo | Screen recording plus overlays | Browser capture + Remotion/editor | No fabricated UI or fake outcomes |
| App / SaaS explainer | Problem → product flow → benefit | Remotion/Claude Motion, optionally generative B-roll | Product claims must be supported |
| Website hero loop | Abstract motion, product shapes, short seamless loop | Remotion, SVG/Canvas or licensed footage | Low size, autoplay fallback, no audio dependency |
| Logo sting / opener | Shape build, logo reveal, sound cue | Remotion or Motion Canvas | Use approved brand assets |
| Event promo | Type, dates, speakers, energy shots | Remotion/editor; licensed or generated footage | Fact-check date, venue, names and permissions |
| Social reel / Short | Strong hook, close framing, captions, fast pacing | Remotion/editor + clips | Current platform framing and subtitle coverage |
| Paid ad / commercial | Product benefit, proof, CTA, product/lifestyle shots | Hybrid code + footage model/editor | Claims, music rights, disclosure |
| Cinematic montage | Shot sequences, mood, camera motion | Generative video + editor | Continuity, artifacts, provenance |
| Narrative short film | Characters, locations, dialogue, edited scenes | Script + shot generation/filming + NLE | Character consistency, continuity, rights |
| AI B-roll | Contextual atmospheric clips | Veo/Runway/Luma or other current provider | Generated details may be inaccurate |
| Image-to-video | Animate a supplied/generated still | Current supported video model | Rights to source image, motion consistency |
| Video-to-video transformation | Re-style or modify existing clip | Provider that currently supports it | Rights, quality loss, changes to subject |
| Keyframe / shot extension | Bridge specified frames or continue shot | Provider with documented keyframe/extension feature | Frame compatibility, continuity |
| Tutorial / screencast | Screen capture, cursor/zoom, annotations, captions | Screen recording + Remotion/editor | UI/version accuracy, privacy in capture |
| Slide / presentation video | Slides with motion, voiceover, scene transitions | Claude Motion, Remotion, editor | Too much text, rhythm, export format |
| Voice-over lesson | Narration plus diagrams, slides, b-roll | TTS/recorded voice + Remotion/editor | Pronunciation, captions, voice rights |
| Avatar / virtual presenter | Talking-head avatar with graphics | Authorized avatar service + editor | Explicit likeness/voice permission, disclosure |
| Podcast / interview cutdown | Waveform, speaker labels, clips, captions | Edit original media + FFmpeg/editor | Quote context, speaker identity and consent |
| Music visualizer | Beat-reactive shapes, waveforms, lyric cards | Remotion/Canvas/editor | Music and lyric rights, beat synchronization |
| Lyric video | Timed typography over visuals | Remotion/editor | Lyrics rights, exact timing and spelling |
| Travel / route animation | Map pan, route lines, markers, labels | Remotion + authorized map data | Correct location/route, map license |
| Sports highlight package | Authorized game footage, labels, scores | Editor/Remotion overlays | Broadcast rights, score/date accuracy |
| News / history / documentary | Sourced clips, labels, timeline, narration | Research + licensed footage + editor | Don't misrepresent synthetic footage as authentic |
| Training / compliance | Scenarios, decision trees, captions | Remotion/Claude Motion/editor | Factual policy and version correctness |
| Personalized/batch video | Template populated with structured records | Parameterized Remotion render | PII, schema validation, per-output QA |
| Silent autoplay explainer | Visual narrative with on-screen text | Remotion/Claude Motion | Entire meaning must survive muted playback |
| Subtitle/localization version | Translated narration/captions/title cards | Translation + TTS/editor/render pipeline | Human review, line breaks, timing, RTL |
| Before/after / transformation | Matched frames and clear transitions | Supplied/generated assets + editor | Fair comparison and no deceptive claims |
| Looping ambient scene | Seamless texture/environment/particles | Canvas/Remotion or footage model | Loop seam, CPU, licensing |
| 2D character / cartoon | Rigged/vector characters and backgrounds | Dedicated animation tool or code rig | Code animation is not a full character studio |
| 3D animation | Modeled scenes, camera, lighting, physics | 3D authoring/render engine; agent-assisted scripts | Tool installation, render cost/time |
| Stop-motion style | Stepwise poses, texture, deliberate frame cadence | Frame sequence or generated/filmed stills + editor | Consistent cadence and provenance |
| Photo slideshow / memorial | Photos, titles, transitions, music | Remotion/editor | Permissions, names, sensitive content |
| Live-action event recap | Real footage, lower thirds, music, montage | Editor/FFmpeg + graphics | Consent, event media rights |
| Screen-recorded code tutorial | IDE/browser capture, zoom, annotations | Screen capture + editor/Remotion | Hide tokens, passwords, private tabs |

## 2. Pick by output requirement

| Requirement | Recommended choice |
|---|---|
| Editable code-generated title/charts/shapes, and user asks to work inside Claude | Claude Motion, if account/plan has access |
| Repeatable video generated from React components and a timeline | Remotion |
| Accurate equations, functions or geometric transformations | Manim |
| TypeScript-driven vector scenes synchronized to narration | Motion Canvas |
| Actual photorealistic/painterly footage not present in supplied assets | Current external video-generation model |
| Real product UI or exact software interactions | Actual screen recording plus overlays; don't hallucinate UI as evidence |
| Trimming, crop, codec, audio mix, subtitle burn-in or concatenation | FFmpeg |
| Highly polished grading, compositing, masking and manual timeline work | Suitable nonlinear editor |
| Narration | Human voice or authorized TTS provider |
| Translation/dubbing | Verified translation + permitted speech service + human timing review |
| Repeatable personalized videos | Parameterized renderer with validated structured input |

## 3. Common starting export profiles

Always check the target platform's current requirements. These are starting points, not guarantees or universal specs.

| Destination | Common composition | Notes |
|---|---|---|
| YouTube / lecture / presentation | 16:9 landscape | Comfortable margins, high-resolution text, chapter-friendly structure |
| Shorts / Reels / TikTok | 9:16 portrait | Reserve interface-safe areas; captions should be readable |
| Square feed post | 1:1 | Check current placement support and text sizing |
| Website hero | Wide landscape, often short and muted | Optimize size, autoplay/mute, poster and reduced-motion fallback |
| Product walkthrough | Match actual screen ratio, frequently 16:9 | Avoid stretching; keep UI text readable |
| Animated sticker/GIF | Small loop; GIF or modern alternative as requested | Palette and file size constraints matter |
| Transparent overlay | Format/codec supporting alpha, if target supports it | Verify alpha preserved end-to-end |

## 4. Shot prompt structure for generative footage

Write one prompt per shot, not one overloaded prompt for an entire 3-minute film.

**Template**

- Subject and action:
- Setting / time / weather:
- Shot size / camera position:
- Camera movement:
- Lens/depth/composition cues when supported:
- Lighting / palette:
- Motion direction and speed:
- Continuity anchors (wardrobe, props, character appearance):
- Desired mood / medium:
- Duration and aspect ratio supported by the selected model:
- Audio/dialogue needs if supported:
- Negative constraints / artifacts to avoid:
- Reference image/frame IDs:
- Intended cut/transition at the end:

Keep one primary action per shot. Prompting cannot guarantee perfect physics, stable identity, exact text, logos or every camera instruction; use generated clips for mood/visuals, then add exact titles, charts and UI in a deterministic renderer.

## 5. Review scorecard

Score each from 1 (poor) to 5 (strong); record problems rather than relying only on an overall average.

- Message clarity
- Narrative/pacing
- Visual hierarchy / readability
- Motion quality / temporal consistency
- Factual accuracy
- Product/brand accuracy
- Audio intelligibility and sync
- Caption accuracy
- Continuity between scenes
- Platform framing
- Technical integrity
- Rights/provenance documentation

A high average cannot override a critical defect such as incorrect facts, unauthorized likeness, missing sound, corrupted output, or misleading footage.
