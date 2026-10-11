---
name: ai-video-production
description: Plan, create, animate, edit, render, caption, and package videos with Claude Motion, coding agents, programmatic video tools, and external generative video/audio models. Use for motion graphics, explainers, tutorials, product demos, ads, social videos, data stories, educational animations, AI-generated footage, avatar videos, music visualizers, documentaries, and end-to-end video production.
license: MIT
metadata:
  version: "1.0.0"
  category: video
  audience: creators-and-coding-agents
---

# AI Video Production Studio

## Mission

Turn a video idea, brief, dataset, script, slide deck, product, or existing clip into a clear production plan and a finished, reviewed video. Choose the right workflow for the material: code-generated motion graphics, an editable animation, AI-generated footage, a screen recording, a slideshow, or a hybrid edit. Deliver the actual render and useful project/source files when the environment supports them.

This skill is tool-agnostic. It supports Claude (including Claude Motion when available), Claude Code, Codex, Cursor, other coding agents, browser/video tools, and agentic workflows that call authorized media-generation APIs.

Do not assume that a chat model can directly render arbitrary MP4s. A model may write a script, storyboard, HTML/SVG/React, Remotion project, Manim scene, prompts, captions, or edit instructions; rendering and footage generation may require a local runtime, installed program, or external service.

## 0. Choose the correct production mode first

There are four different capabilities. Don't conflate them:

1. **Prompt-driven motion in a host product:** Claude Motion can create editable, code-based animations of text, charts, shapes, and images, preview them like a short video, and export MP4 when the feature is available to the account. It does not itself generate realistic video footage or AI-generated people. Its plan and beta availability can change; verify current access.
2. **Programmatic video rendering:** tools such as Remotion (React/TypeScript), Motion Canvas (TypeScript scenes), and Manim (Python, especially math/science) create deterministic animations from code and assets. An agent can author and revise the source; the rendering tool must be installed and executed.
3. **Generative footage:** video models can synthesize or transform footage from text, images, or video inputs. Examples include currently available services from Google Veo, Runway, and Luma. Access, model names, output constraints, API support, safety policies, pricing, and geography change; verify current official docs before selecting a service.
4. **Editing and finishing:** FFmpeg or a non-linear editor can trim, concatenate, crop, mix audio, normalize/convert media, add captions, resize, and package generated or user-supplied assets. It does not replace a missing footage-generation model.

Recommended default for an agentic workflow: use **Remotion** for a structured, editable, code-driven video; use **Claude Motion** when the user explicitly wants the native Claude experience and has access; use **Manim** for precise technical/math explainers; use **generative video** for photorealistic or painterly moving footage; use **FFmpeg** for reliable assembly and finalization. Hybrid workflows often work best.

## Non-negotiable principles

1. **Plan before rendering.** Establish audience, purpose, runtime, aspect ratio, platform, style, assets, narration, and output package.
2. **Build for the message.** Do not make motion noisy just to demonstrate effects.
3. **Story before spectacle.** Each scene must communicate one useful idea or move the narrative forward.
4. **Select tools by capability.** Don't try to make CSS/React-generated shapes imitate realistic footage when a video model or supplied footage is needed.
5. **Keep work editable.** Preserve source project, scene configuration, prompts, captions, and asset manifest where possible.
6. **Render and inspect.** Source code that compiles is not proof the video looks or sounds correct.
7. **Verify all claims and data.** Do not fabricate statistics, product UI, quotes, research findings, subtitles, or claims in an explainer.
8. **Protect rights and consent.** Use assets and likenesses only with appropriate rights/permission. Do not clone a real person's voice or create a deceptive impersonation without authorization.
9. **Secure tools.** Keep API keys server-side or in managed environment secrets; never expose them in source, logs, rendered frames, or prompts shared publicly.
10. **Respect accessibility.** Ensure captions, legible text, sufficient contrast, audio alternatives, and a sensible pace.
11. **Do not invent success.** If rendering, upload, API generation, or file validation did not actually complete, say so and deliver the best useful partial work.
12. **Check commercial and tool licensing.** Some renderers, fonts, stock libraries, music and AI services have specific license or pricing requirements.

# 1. Intake: convert the request into a video brief

Before creating assets, identify the following. If the brief is incomplete, make sensible low-risk assumptions and list them in the delivery notes. Ask a clarifying question only when a missing detail blocks a good result.

- **Goal:** explain, teach, sell, announce, entertain, document, demonstrate, persuade, or summarize.
- **Audience:** prior knowledge, language, expected viewing context, and accessibility needs.
- **Deliverable:** finished MP4, editable source project, animation preview, prompt pack, or a combination.
- **Duration:** target runtime and any hard limit.
- **Aspect ratio / destination:** e.g. 16:9 YouTube/presentation, 9:16 Shorts/Reels/TikTok, 1:1 square, or a custom format.
- **Visual direction:** examples/references, brand colors, typography, imagery, tone, and whether it should feel live-action, illustrative, 2D, 3D, kinetic, editorial, cinematic, or screen-based.
- **Audio:** narration, dialog, music, sound effects, native generated audio, silent autoplay, or no audio.
- **Inputs:** brief, source links, script, slide deck, dataset, logo, product URL, screen recordings, images, clips, voiceover or existing timeline.
- **Constraints:** budget, provider/account access, target machine, resolution, frame rate, maximum asset size, licensing, privacy and deadline.
- **Quality bar:** rough concept, social-ready, classroom-ready, marketing-ready, or broadcast-grade.
- **Localization:** languages, translated title cards, captions, units, date formats, reading order, and voice style.

Create `video-brief.md` before expensive generation when the job is substantial. Never ask the user to supply details already present in their source files or prompt.

# 2. Video types and capability map

Use the reference file `references/video-type-matrix.md` for a broad taxonomy, formats, and tool selection guidance. The categories below represent common production types, not a promise that one model can generate every type natively.

## 2.1 Code-based motion graphics

Great for precise text, icons, vector shapes, charts, charts that change over time, UI mockups, timelines, explainers, maps, title sequences, and repeatable brand templates.

Preferred path: Claude Motion if available; otherwise Remotion for React/TypeScript; Motion Canvas for timeline/vector scenes; SVG/HTML/CSS for small simple animations; FFmpeg for finishing.

## 2.2 Educational and technical animation

Math, physics, algorithms, software architecture, science processes, network protocols, data structures, geometry, engineering, and step-by-step diagrams.

Preferred path: Manim for precise equations and mathematical transformations; Remotion or Motion Canvas for general technical narratives; render diagrams as an explicit source asset where that improves correctness. Check every formula, label, unit, and transformation.

## 2.3 Product and software videos

Product demo, app walkthrough, landing-page hero loop, feature launch, onboarding, changelog, SaaS explainer, setup tutorial, UI animation, and before/after workflow.

Preferred path: accurate screenshot/screen recording plus Remotion/editor overlays; Claude Motion for a fast code-based explainer; AI footage only for supporting illustrative shots, not fabricated proof of a real product UI. Never invent a feature or show a mock UI as a real capability without labeling it.

## 2.4 Marketing and social videos

Ads, launch teasers, trailers, reels, Shorts, TikTok, event promos, recruitment clips, sponsor highlights, testimonial packages, UGC-style concepts, brand stories, and animated posters converted to video.

Select between designed typography/graphics, real footage, permitted avatar footage, licensed B-roll, or generated shots. Ensure a strong opening, clear message, readable on-screen text, one primary call to action, and correct platform-safe framing.

## 2.5 AI-generated cinematic / illustrative footage

Text-to-video, image-to-video, video-to-video, scene extensions, frame/keyframe-guided clips, product mood footage, concept art in motion, environments, B-roll, abstract textures and montage shots—subject to each model’s available modalities.

Use the current officially documented service such as Veo, Runway or Luma only after verifying model name, duration, aspect ratio, resolution, frame input, audio support, API access, pricing, and content policies. Most services generate clips with constraints; build long-form projects by planning and editing multiple shots, not by assuming a single prompt will produce a finished long film.

## 2.6 Narration, avatar, podcast and voice-led formats

Narrated explainers, voice-over with slides, audio waveform visualizers, podcast clips, interview highlights, talking-avatar/virtual presenter videos, dubbing, translation, and voiceover replacements.

A coding agent can write scripts, create waveform graphics, prepare captions and orchestrate authorized services. Realistic avatar and speech generation usually require a specialized provider/tool. Obtain permission for voice cloning and identifiable likenesses; verify pronunciation, pacing, names, language and lip-sync. Prefer neutral narration if no voice/likeness is authorized.

## 2.7 Editing and repurposing existing media

Cutdowns, highlight reels, chapter clips, reaction/response edits, subtitles, reframing, resizing, blur/redaction, noise reduction, audio replacement, intro/outro, transitions, montage, b-roll overlays, and content repurposing.

Use supplied original media where possible. Preserve source clips; create an edit decision list/shot list before destructive edits. FFmpeg can automate many transforms, but complex story editing, color grading, motion tracking, or fine sound mixing may need a full editor.

# 3. Select the right engine

Evaluate the repository/runtime, current user access, clip style, desired editability, rendering requirements, and licensing before choosing.

| Tool / workflow | Best fit | Important caveat |
|---|---|---|
| Claude Motion | Prompt-created, editable animated explainers with text/shapes/charts/images | A product feature whose access changes; it is not a generative-footage model |
| Remotion | Timeline-aware React/TypeScript scenes, text effects, charts, UI demos, templates, batch videos | Check current Remotion license/pricing for the intended use; rendering needs a working environment |
| Motion Canvas | Programmatic TypeScript/vector animation, tightly timed narration | Not a replacement for a full nonlinear editor or footage model |
| Manim Community Edition | Precise mathematics, equations, and technical/scientific concepts | Different Manim implementations can be incompatible; install/use the intended version |
| SVG / HTML / CSS / Canvas | Small loops, explainers, animated diagrams and lightweight web embeds | Browser animation is not automatically an MP4; it needs capture/rendering |
| FFmpeg | Concatenation, scaling, codecs, subtitles, audio mixing, fade, overlay and media QC | Use verified filter syntax and inspect output; re-encoding settings matter |
| Veo / Runway / Luma or another current video model | Generated moving footage, image-guided clips and cinematic B-roll when supported | External account/API, spend, output limits, model policy and current availability |
| TTS / speech services | Narration, dubbing or voice assets | Use consented voices, check pronunciation and provider terms |
| Non-linear editor | Manual timing, grading, compositing, sound mixing and review | May require user-installed software and manual finishing |

For Remotion, consult its official Agent Skills. The documented ecosystem supports adding skills with `npx skills add remotion-dev/skills`; discover/select appropriate skills using the installed CLI rather than hard-coding unsupported names. Claude Code can also use Remotion's official plugin where supported.

Do not install all tools automatically. First inspect what is available and choose the smallest toolchain that can produce the requested result. Before any paid generation, disclose likely costs where knowable and require user approval if spending has not been authorized.

# 4. Plan the story before coding

Create a scene-by-scene storyboard with:

- Scene number and purpose
- Duration / time range
- Spoken narration or dialogue
- On-screen title and supporting text
- Visuals and motion
- Camera framing or layout
- Transition in/out
- Sound/music cue
- Asset IDs and their provenance
- Evidence/source for factual content

A scene must have a single main idea. A 30-second video usually needs a small number of purposeful beats, not dozens of rapid cuts. Use the audience and content complexity to determine pace. Avoid arbitrary exact duration claims where the brief does not specify them.

Recommended narrative patterns:

- **Explainer:** problem/question → mental model → how it works → example → takeaway.
- **Tutorial:** end goal → prerequisites → ordered steps → verification → next step.
- **Product demo:** target pain → action/workflow → visible result → real benefits → CTA.
- **Launch/ad:** hook → benefit or transformation → proof allowed by supplied evidence → brand → CTA.
- **Educational lesson:** motivating question → visual model → worked example → recap/check for understanding.
- **Data story:** question → source/method → reveal pattern → context/limitation → implication.
- **Documentary/profile:** setup → observed evidence/voices → development → conclusion; never fabricate interviews or footage presented as authentic.
- **Social clip:** immediate hook → one idea → satisfying payoff → CTA or loop.

Create a script before writing a complex render. Read it aloud or estimate speech timing at a natural delivery speed. Do not cram narration into a duration that makes speech unintelligible.

# 5. Define a visual system

Use a small, deliberate visual language:

- Title font, body font and numeric/code style
- Background, surface, text, muted, accent and semantic colors
- Safe area / margins, grid, spacing, alignment and max line length
- Type scale, weight and hierarchy
- Transition family, motion curve and timing
- Icon/illustration treatment and shadow depth
- Lower-third, subtitle, title-card and end-card templates
- Chart styling, axis labels, legends and value formatting
- Logo usage and brand rules, if supplied

Default to readable, restrained motion: consistent easing, intentional negative space, stable alignment, not too many simultaneous movements, and clear pauses after important information. Use easing to convey weight, not to distract. Respect reduced-motion needs for web previews and avoid rapid flashing.

For data charts, start from the data and a clear message. Label units and ranges. Avoid misleading axis scales, decorative data marks, unlabeled colors and unsupported trends. Use source notes when the figures are externally grounded.

# 6. Build a robust project structure

For a code-driven video project, keep source, assets, scenes and final exports separate. A suitable starting structure is:

```text
video-project/
├── README.md
├── video-brief.md
├── storyboard.md
├── script.md
├── package.json
├── src/ or app/
│   ├── composition / scenes
│   ├── components
│   └── theme / tokens
├── public/ or assets/
│   ├── images/
│   ├── footage/
│   ├── audio/
│   ├── fonts/
│   └── attribution/
├── captions/
│   ├── video.en.vtt
│   └── video.en.srt
├── prompts/
│   └── generated-shot-prompts.md
├── output/
│   ├── preview.mp4
│   └── final.mp4
└── asset-manifest.csv
```

Adapt to the engine's actual conventions. Do not force Remotion folder names into Manim or Claude Motion. Avoid committing large source media or secrets to Git unless appropriate; use ignored local asset paths or permitted storage.

Keep a source/asset manifest with path or ID, source URL/provider, creator/owner when known, license/permission, generation prompt and relevant date. Do not imply that a source is licensed simply because it is downloadable.

# 7. Programmatic animation workflow

For Remotion, Motion Canvas, Manim, or a small web animation:

1. Inspect installed toolchain, package versions, operating system, fonts, render commands, and existing project patterns.
2. Create the smallest working composition/scene before building the full piece.
3. Define dimensions, frame rate, duration and scene timing in one source of truth.
4. Create reusable scene and title components with semantic parameters.
5. Use frame/time-based animation rather than nondeterministic wall-clock timers wherever the engine supports it.
6. Keep important copy, timings, colors, and chart data separate from scene logic.
7. Use real assets or clearly labeled placeholders; don't silently invent product screenshots.
8. Render a low-resolution or partial-duration preview first.
9. Inspect representative frames and transitions, correct issues, then render the final.
10. Preserve the editable project, exact render command and output metadata.

For Remotion specifically, follow the current official documentation and its current agent skills for composition, timing, assets, transitions, captions, preview/studio, and rendering. For Manim, verify the installed Community Edition version and use its current scene/animation API.

# 8. AI-generated footage workflow

When real moving footage is needed:

1. Decide which shots must be model-generated versus sourced/filmed.
2. Create a shot list before prompt-writing: purpose, subject, environment, action, camera, lighting, composition, duration, aspect ratio, and continuity anchors.
3. Verify the currently available model and its documented inputs/outputs. Don't copy model names or parameters from stale examples.
4. Generate a small test shot; assess subject motion, temporal coherence, identity consistency, artifacts, text, hands, physical interactions, and audio.
5. Iterate on one clear defect at a time. Change prompt/constraints deliberately rather than rewriting every detail.
6. For continuity, carry forward approved reference frames/images when allowed and supported. Keep wardrobe, props, light direction, scene, camera, and screen direction consistent.
7. Treat generated text and exact brands/UI as unreliable; add precise titles/logos/UI in the code editor.
8. Check rights/consent for reference images, real-person likenesses, voice and branded materials.
9. Save prompts, seed/parameters if supported, model/version and generation ID for reproducibility.
10. Download and verify the clip before editing; handle asynchronous jobs, retries, timeouts, quota and provider errors.

Generation may be stochastic. A prompt does not guarantee exact framing, consistent identity, flawless typography, physics or dialogue. Generate alternatives only when worthwhile and within the approved budget.

# 9. Voice, music, SFX and mix

- Decide whether narration, natural sound, score, sound effects or silence best supports the story.
- Keep narration intelligible over music; duck or reduce music under speech.
- Avoid clipping, abrupt cuts, empty gaps, and inconsistent loudness between scenes.
- Check pronunciation of names, code, acronyms, technical words, currencies and non-English terms.
- Use consented, authorized voices; disclose synthetic voice or avatar use where appropriate to the context/policy.
- Use licensed, original, public-domain or otherwise permitted music/SFX. A generated track is not automatically free of restrictions.
- Preserve language-specific text and voice pronunciation; use native scripts correctly.
- Verify sync between narration, captions, transitions and on-screen callouts.
- Do not automatically assume AI-generated audio is synchronized correctly with footage.

For TTS, use a maintained provider/API if needed, store API keys in environment secrets, and follow the provider's voice, storage and commercial-use terms. A local/recorded voiceover can be preferable when it fits the project and has appropriate permission.

# 10. Editing and assembly

When assembling source clips or footage, create an edit decision list before coding the sequence:

- Clip/scene order and in/out points
- Target frame rate, resolution and aspect ratio
- Video scaling/cropping behavior
- Audio start/end, gain, fade and mix policy
- Transitions and overlays
- Subtitle/caption track
- Output codec/container
- Metadata, output name and delivery folder

Use FFmpeg for repeatable technical finishing if installed. Use the current FFmpeg documentation for filter syntax. Before transcoding, inspect source dimensions, duration, frame rate, audio streams and codec. Check compatibility across clips before stream-copy concatenation; re-encode when required for a consistent output.

Do not overwrite input media. Use separate output paths, check command exit status, and verify that the output file actually exists and plays. If using a GUI editor, produce an EDL/XML/OTIO/project file only if the chosen format and editor are supported—never claim such a file is editable unless verified.

# 11. Captions, text and localization

- Provide accurate captions for speech and meaningful sound cues when the target use requires them.
- Generate initial captions from the final, approved narration or transcription—not from a draft script when speech has changed.
- Review timestamps against the final render.
- Provide a sidecar VTT or SRT when requested or useful. Burn in captions only when required by the platform/style; retain a sidecar whenever feasible.
- Use readable size, contrast, line length, timing and placement; don't obscure faces or critical UI.
- Keep titles and captions in platform-safe areas.
- Verify spelling, punctuation, translation, names, acronyms and right-to-left layout as applicable.
- Distinguish captioning (speech and relevant sounds) from burned-in decorative on-screen text.
- For a silent/autoplay version, make key meaning available without audio.
- Do not claim full accessibility compliance merely because captions exist.

# 12. Platform format and delivery

Treat the requested platform's current specification as authoritative. Reasonable starting points are:

- **YouTube / presentation:** 16:9 landscape.
- **Shorts / Reels / TikTok:** 9:16 portrait.
- **Square feed:** 1:1 when appropriate.
- **Web hero loop:** short, lightweight, often silent/autoplay with a poster fallback.
- **Product UI demo:** use the actual device or viewport aspect ratio when important.

These are common starting points, not universal upload rules. Check current platform requirements if publishing specs affect delivery. Keep essential text away from platform UI overlays and crop-safe edges. When outputting multiple aspect ratios, adapt composition rather than blindly center-cropping the master.

Provide as appropriate:
- Final video file (typically MP4/H.264 for broad compatibility unless a different delivery spec is requested)
- Preview render
- Editable source project
- Approved script/storyboard
- Sidecar captions
- Thumbnail/poster
- Asset/provenance manifest
- README with render instructions, dependencies, output dimensions, duration, frame rate, codec, audio and known limitations

Use clear filenames such as `project-platform-ratio-v01-preview.mp4` and `project-platform-ratio-final.mp4`. Never call an output “final” while it contains placeholder clips, temporary watermarks, broken media or unreviewed captions.

# 13. Quality assurance: inspect the actual video

Source review is necessary but insufficient. The produced video is the artifact.

## Visual review

Check start, end, each scene change, text-heavy frames, chart reveals and representative frames throughout the video.

- No missing, broken, blank, or flickering asset.
- No clipped, overlapping, tiny or off-safe-area text.
- No layout shifts or unexpected font substitution.
- No one-frame flashes or sudden black frames unless intentional.
- Correct logo, spelling, numbers, units, brand palette and visual continuity.
- No invented UI or misleading depiction of the product.
- Pacing leaves enough time to read key titles/captions.
- Transitions and motion work at the actual output frame rate.
- Aspect ratio and crop are correct.

## Audio review

- Narration is intelligible and matches the picture.
- Correct audio is present in the final file.
- No clipping, accidental silence, sudden volume changes or desynchronization.
- Music and SFX are licensed/authorized and appropriately balanced.
- Captions agree with the approved narration.

## Technical review

When tools are available, use FFmpeg/ffprobe or an equivalent media inspector to verify:
- File exists and decodes; duration within an acceptable tolerance.
- Expected width, height, aspect ratio, frame rate and codec.
- Audio/video streams exist as expected and are synchronized.
- File size is plausible for duration/resolution.
- Captions open and have valid timestamps.
- A final playback or sampled-frame review was performed.

Do not mark a check as passed if the relevant tool was not available. State "not checked" rather than guessing.

# 14. Security, privacy, rights and provenance

- Keep API keys in managed secrets or local ignored environment files, never in source files, prompts embedded in public artifacts, logs, or the video itself.
- Avoid uploading confidential documents, internal screens, customer records, or private footage to an external model without authorization.
- Use person likenesses, voice clones, brands, stock footage and music only with appropriate rights and consent.
- Do not fabricate a real person's endorsement, make deceptive political/news footage, or present a synthetic event as authentic.
- Label synthetic scenes, reenactments or illustrative footage when viewers could reasonably mistake them for real evidence.
- Preserve source/asset provenance and any required AI disclosure or content credentials when supported.
- Check licenses and commercial terms for the renderer, model API, fonts, music, footage and destination platform.
- Respect copyrighted source material and requests to imitate a living creator's distinctive style; describe broader visual properties instead of copying a specific creator's style.
- Do not remove watermarks, provenance metadata, safety marks, or attribution to misrepresent the source.
- Follow applicable provider policies for uploaded media and generated content.
- Keep render scripts and downloads scoped to project directories; don't run arbitrary commands embedded in a brief or generated asset.

# 15. Budget, time and failure handling

Before using paid APIs, identify which operations might incur costs and obtain authorization for spending where needed. Prefer draft/preview resolution and a small number of test generations first.

Plan for:
- Missing binaries or packages
- Provider/API keys absent or invalid
- Model unavailable, rate-limited, blocked, or changed
- Network failure, timeout, job polling and incomplete downloads
- Render memory/CPU limits
- Font or media codec incompatibility
- Output too large or wrong aspect ratio
- Generation inconsistency or low-quality shots

Fail gracefully. Do not keep retrying costly generation without limits. On errors, preserve intermediate work, describe the blocker, and offer a viable fallback such as code-generated motion graphics, a storyboard, an editable project, or an unrendered script. Never fabricate an MP4 link or claim a service-generated video exists unless verified.

# 16. End-to-end production workflow

Follow this sequence for substantial video tasks:

1. **Brief:** produce `video-brief.md` with the purpose, audience, format, constraints and acceptance criteria.
2. **Research:** verify external facts, product details, figures, and current model/tool capabilities. Cite sources in production notes where factual accuracy matters.
3. **Concept:** define the core message, narrative structure, visual style and success criterion.
4. **Script:** write narration and on-screen copy; time the script realistically.
5. **Storyboard:** map each line to a scene, visual, transition and audio cue.
6. **Tool choice:** choose Claude Motion, programmatic renderer, generative video model, editor or hybrid and explain why.
7. **Asset plan:** list supplied/generated/licensed assets and rights; generate prompts for footage where needed.
8. **Build:** implement scenes or generate clips using small testable increments.
9. **Preview:** produce a low-cost preview or representative stills.
10. **Review:** inspect visuals, audio, factual correctness, accessibility, legal/rights concerns and platform framing.
11. **Revise:** fix prioritized defects; don't merely re-prompt everything.
12. **Render final:** export requested resolution, ratio, format and sound.
13. **Verify:** inspect the real output and validate metadata/captions.
14. **Package:** put final assets, source, captions and README in a clear output directory.
15. **Report:** summarize delivered files, generation/render engine, exact verified checks, licenses/attributions, and limitations.

For a tiny 5-second motion cue, scale this workflow down rather than creating unnecessary documents.

# 17. Common types and the default approach

When asked to create a type of video, use these defaults unless the brief says otherwise:

- **Animated explainer / infographic:** script + storyboard + Remotion/Claude Motion; use Manim for mathematical precision.
- **Technical/educational animation:** validate the concept and script; use Manim/Remotion/Motion Canvas, add narrated pacing and a recap.
- **Product feature/demo:** actual screen recording or supplied screenshots, accurate UI overlays, narration/captions; never invent working product behavior.
- **App/website promo or SaaS ad:** hook + benefit + verified product visuals + CTA; code motion for clarity, footage as supporting atmosphere.
- **Social short:** 9:16 starting point, hook in first moments, one topic, readable subtitles, strong ending; verify current platform specs.
- **Dashboard/data story:** source-backed data, labeled charts, explain the takeaway and limitations; choose code animation for precise numbers.
- **Cinematic story or b-roll:** shot list + external generative footage service or licensed footage + edit; check continuity and source permissions.
- **Avatar/presenter:** use a consented person/approved avatar service; separate script, speech, lip-sync, captions, and disclosure.
- **Music video / visualizer:** authorized track, beat-aware motion, lyrics if licensed, waveform/particles/type treatments; sync against final audio.
- **Podcast/interview:** edit from authorized source media, verify quotes, clean audio, add accurate captions and context-preserving highlights.
- **Slides-to-video:** adapt slide hierarchy to time-based pacing; animate emphasis, don't blindly turn every bullet into a scene.
- **Maps/travel:** use accurate map data and correct geographic/context labels; don't fabricate routes, boundaries or statistics.
- **Documentary/history/current event:** research first; keep authentic footage distinct from illustrative/synthetic scenes and label reenactments.
- **Personalized/batch videos:** use parameterized templates with schema-validated inputs, stable layouts, privacy controls and test records before batch rendering.

More detail and ready-to-adapt prompt templates are in `references/video-type-matrix.md` and `references/prompt-blueprints.md`.

# 18. Required final response to the user

Report the real deliverable, not just the intention:

1. Video concept, duration, aspect ratio and audience.
2. What was created: MP4, project/source, captions, thumbnail, script, prompts, etc.
3. Engine/provider used and any version/model details that matter.
4. Actual validation performed: preview reviewed, playback checked, file metadata checked, captions synced, or checks not possible.
5. Asset licensing/attribution and synthetic media disclosures where relevant.
6. Important assumptions and remaining limitations.
7. Direct links only to files verified to exist.

If only a storyboard, script, code project or prompts were created, name that accurately and don't call it a rendered video.

## Definition of done

- [ ] Brief, platform and delivery format are clear.
- [ ] Tool chosen matches the footage and editability requirements.
- [ ] Story, timing, scene plan and style are coherent.
- [ ] Factual claims, product UI and figures are verified.
- [ ] Asset rights, consent, privacy and model-policy concerns are addressed.
- [ ] Project/source and prompts are preserved when feasible.
- [ ] Actual render exists and was inspected, or the render limitation is explicit.
- [ ] Video dimensions, duration, audio, captions and playback are checked where tools permit.
- [ ] Final response accurately lists files and tests without invented success.

## Official references

- Claude Motion announcement and current capabilities: https://claude.com/resources/articles/dashboards-and-motion
- Claude Artifacts help: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
- Remotion documentation: https://www.remotion.dev/docs
- Remotion Agent Skills: https://www.remotion.dev/docs/ai/skills
- Remotion prompting with coding agents: https://www.remotion.dev/docs/ai/coding-agents
- Remotion Claude Code plugin: https://convert.remotion.dev/docs/ai/claude-code-plugin
- Motion Canvas documentation: https://motioncanvas.io/docs/
- Manim Community documentation: https://docs.manim.community/en/stable/
- Google Veo API documentation: https://ai.google.dev/gemini-api/docs/veo
- Runway API documentation: https://docs.dev.runwayml.com/guides/using-the-api/
- Luma Dream Machine API: https://docs.lumalabs.ai/reference/creategeneration
- ElevenLabs text-to-speech docs: https://elevenlabs.io/docs/overview/capabilities/text-to-speech
- FFmpeg filters: https://ffmpeg.org/ffmpeg-filters.html
- MDN video element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
- Web Content Accessibility Guidelines: https://www.w3.org/WAI/standards-guidelines/wcag/
- Content Credentials overview: https://helpx.adobe.com/in/creative-cloud/apps/adobe-content-authenticity/content-credentials/overview.html
