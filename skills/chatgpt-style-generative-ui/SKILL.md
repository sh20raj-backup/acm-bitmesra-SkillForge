---
name: chatgpt-style-generative-ui
description: Build polished, structured, responsive AI chat experiences with rich visual components, interactive tools, diagrams, charts, citations, progressive streaming, and downloadable artifacts. Use when creating or upgrading a chat UI, assistant response renderer, generative UI system, AI copilot, learning assistant, research assistant, or tool-enabled conversation product.
license: MIT
metadata:
  version: "1.0.0"
  audience: coding-agents
  stack: "React, Next.js App Router, TypeScript, Tailwind CSS"
---

# ChatGPT-Style Generative UI — Agent Skill

## Mission

Build AI chat interfaces that feel calm, premium, intelligent, and useful—not like a pile of chat bubbles. The interface should choose the clearest presentation for each answer: well-written text when text is best, and structured cards, tables, diagrams, charts, forms, calculators, timelines, or other interactive components when they materially improve understanding or action.

The goal is to implement a high-quality product pattern, not to copy any proprietary implementation or claim knowledge of another product's internal source code.

Use this skill for:

- **Chat shell:** conversation layout, message list, composer, sidebar, streaming, message actions, responsive behavior.
- **Generative responses:** rendering structured, model-selected components inside assistant answers safely.
- **Tool-driven UI:** turning validated tool results into useful, interactive presentations.
- **Learning/research experiences:** breaking complex subjects into structured explanations with diagrams, comparisons, quizzes, and sources.

## Non-negotiable principles

1. **Answer first; decorate second.** The interface should make the answer easy to find.
2. **Choose a format for a reason.** Use prose for nuanced explanation, tables for comparison, charts for numerical relationships, diagrams for systems, and interactive controls when user input changes the result.
3. **Use a controlled component vocabulary.** The model may request components from an explicit, typed registry. Never execute model-generated React, JavaScript, HTML, CSS, JSX, or arbitrary URLs as code.
4. **Interaction must be real.** Every control that looks interactive must do what its label promises.
5. **Validate generated data.** Parse structured data against schemas, check ranges and IDs, and provide safe fallbacks for invalid or unsupported blocks.
6. **Stream gracefully.** Partial content must remain readable. Do not flash broken charts, empty component frames, or malformed Markdown while an answer is still arriving.
7. **Respect the existing repository.** Inspect the framework, package manager, component system, versions, route structure, and conventions before modifying files or adding dependencies.
8. **Accessibility is part of implementation.** Keyboard operation, visible focus, semantic HTML, sufficient contrast, labeled controls, reduced-motion support, and screen-reader announcements matter.
9. **Responsive by default.** Support mobile, tablet, and desktop; never depend on hover for essential information.
10. **Avoid visual noise.** Do not put every paragraph in a card, overuse badges, or use colorful boxes for ordinary conclusions.
11. **Citations are data, not decoration.** Keep source links beside the claims they support; never fabricate citations, ratings, timestamps, or document links.
12. **Do not invent capabilities.** If a component, tool, or file-generation path is not implemented, show a clear fallback.

# 1. Audit the existing project

Before editing anything, inspect:

- `package.json`, lockfile, framework/version, TypeScript configuration, linting, test runner, and build commands.
- Whether the project uses Next.js App Router (`app/`) or another router. Do not convert routers unless requested.
- Existing design tokens, Tailwind version, UI primitives, icon package, typography, theme support, and reusable components.
- The current chat data model and support for streaming, persistence, tools, uploads, citations, retries, and message actions.
- Existing AI provider and API route/server action. Never expose API keys or provider secrets to client code.
- Deployment/runtime constraints, such as Edge versus Node and server-only packages.
- Accessibility and responsive patterns.

Do not replace a working architecture just because another library is recommended here. Integrate with the current stack first.

## Baseline architecture

Use TypeScript, validated message parts, a fixed renderer registry, server-side model calls, and server-side authorization. If the project already has a mature chat UI library, extend it rather than rebuilding streaming and focus management from scratch.

# 2. Architecture

Separate content generation, rendering, and application actions.

```text
User input
  -> Chat composer (attachments, validation)
  -> Server endpoint (auth, rate limits, model, tools)
  -> Assistant stream
       ├── Markdown text
       ├── citations/source metadata
       ├── tool status/results
       └── validated structured UI blocks
  -> UI block registry
       ├── Text
       ├── Chart
       ├── Diagram
       └── Interactive tool
  -> Accessible responsive UI
```

### Responsibility boundaries

- **Chat shell:** ordering, composer, keyboard behavior, scrolling, streaming states, retries and message actions.
- **Model/orchestration:** model choice, tools, permissions, provider calls and stream serialization.
- **Content contract:** ordered, typed parts; preserve their order and stable IDs.
- **Renderer:** maps known block types to trusted React components.
- **Application actions:** perform calculations, exports, data lookups, and mutations through trusted handlers.

# 3. Select libraries based on the repo

Do not install everything automatically. Inspect installed packages and official docs first.

| Concern | Possible choice | Notes |
|---|---|---|
| Chat primitives | assistant-ui | Threads, message/composer primitives and chat behavior |
| Model streaming/tools | Vercel AI SDK | Provider integration and React chat state |
| UI primitives | Existing shadcn/ui/Radix setup | Reusable accessible controls |
| Markdown | Existing safe renderer or Streamdown | Streaming-aware Markdown |
| Charts | Recharts or current chart library | Data-backed visualizations |
| Motion | Motion for React | Subtle transitions only |
| Diagrams | Mermaid or @xyflow/react | Static diagrams versus interactive node canvases |
| Schema validation | Zod or existing schema validator | Validate input and output |
| Browser tests | Existing stack or Playwright | Real responsive and interaction checks |

Reference documentation:

- assistant-ui: https://www.assistant-ui.com/docs/primitives
- assistant-ui generative UI: https://www.assistant-ui.com/docs/tools/generative-ui-primitive
- Vercel AI SDK: https://ai-sdk.dev/docs
- shadcn/ui: https://ui.shadcn.com/docs
- Streamdown: https://streamdown.ai/docs
- Recharts: https://recharts.org/
- Motion: https://motion.dev/docs/react
- Mermaid: https://mermaid.js.org/
- Zod: https://zod.dev/

APIs change; the installed version and its current official documentation are authoritative.

# 4. Define a structured content contract

Model output should use an explicit set of component types instead of arbitrary component names and props.

An illustrative contract:

```ts
type AssistantContentPart =
  | { type: "markdown"; id: string; text: string }
  | { type: "ui"; id: string; block: SafeUIBlock }
  | { type: "sources"; id: string; items: SourceItem[] }
  | { type: "tool-status"; id: string; tool: string; status: ToolStatus };
```

Define `SafeUIBlock` with your project's schema library and only include types with implemented renderers.

Rules:

- Every block has a stable unique ID.
- Each block has a known type and a strictly validated payload.
- Validate array lengths, text lengths, URLs, number ranges, and enum values.
- Never use a model-provided type as a dynamic import target.
- Prefer semantic data (chart series and values) rather than instructions for how to style it.
- Keep presentation in React components; keep business data in payloads.
- Version schemas if persisted conversations can be replayed later.
- Treat interactive controls as declarative data. Never accept executable callbacks from a model.
- Validate at server boundaries and at client rendering boundaries when appropriate.

# 5. Component registry

Use a fixed mapping from validated content types to trusted React components. A `switch` with exhaustive typing or a fully typed registry is appropriate.

The registry should:

- Render semantic accessible HTML and existing project components.
- Use a safe Markdown renderer; do not use `dangerouslySetInnerHTML` for model content.
- Avoid untrusted image URLs, iframes, scripts, and arbitrary links.
- Keep stateful interactions inside dedicated components.
- Validate chart keys against the data.
- Provide text equivalents for complex visuals.
- Render unsupported blocks as readable fallback content.
- Never expose secrets, provider payloads, or stack traces in errors.

# 6. Component catalogue and selection

Implement the minimum useful set first. Do not show a component simply because it exists.

## Markdown and prose

Support headings, paragraphs, emphasis, lists, quotes, tables, fenced code, inline code and safe links. Add syntax highlighting only where useful. Code copy must work. Streaming output should remain readable when a fence/list is incomplete. Text answers should not be wrapped in cards unnecessarily.

## Metrics

Use for a small number of key facts. Include clear labels, values and units. Trends must come from data rather than color alone.

## Comparison tables

Use for repeated criteria across items. Keep headers explicit, align numeric values, handle unknown values honestly, and enable contained horizontal scrolling or a usable mobile layout.

## Charts

Use only when a visual is clearer than prose or a table.

- Line: trends over time; bar: category comparisons; scatter: relationships; pie/donut only for a small part-to-whole set.
- Label axes, units, dates and categories.
- Provide legends/tooltips for multiple series and a text summary or data table.
- Avoid misleading scales and made-up data.
- Handle empty/missing series and respect reduced motion.

## Diagrams and flowcharts

Use Mermaid for declarative static diagrams, `@xyflow/react` for interactive nodes, or accessible HTML/SVG for a small bespoke visualization. Label nodes and edges, bound counts, validate syntax, and provide a text fallback. Do not execute arbitrary diagram scripts.

## Timelines and checklists

Use for ordered processes, milestones and actionable plans. Only mark real progress as completed. Persist progress only when persistence is actually implemented.

## Calculators and forms

Define inputs, labels, units, defaults, constraints, validation and formula. Use controlled state and deterministic calculations. Clearly identify assumptions and estimates. Forms need real submit handlers, inline errors, and accessible success/failure states.

## Quizzes and flashcards

Support keyboard operation, answer selection, explanation, score, retry, and an appropriate reveal pattern for the learning goal.

## Cards and galleries

Use for distinct options or resources. Keep hierarchy consistent, avoid nested cards, use meaningful alt text, and keep mobile reading order sensible.

## Sources and citations

Keep citations connected to supported claims. Only render URLs from trusted retrieval results or supplied material. Never invent a source or imply research happened when it did not.

## Artifacts and tool status

Show downloadable links only after a real artifact exists and its path is verified. Tool status should say what is happening in user-oriented language, then clearly show the real result or error. Do not expose private chain-of-thought.

# 7. Answer structure and visual hierarchy

For long answers, prefer:

1. Direct answer/result.
2. Key facts or recommendations.
3. Explanation using a clear heading hierarchy.
4. A visual close to the paragraph it explains.
5. One useful next action where appropriate.
6. Citations next to claims they support.

Use prose when prose is best. Tables compare; charts explain numeric relationships; diagrams show structures/processes; interactive controls explore variable outcomes; checklists organize tasks; artifacts provide actual files. Avoid repeating the same fact across a paragraph, card, table, and chart without a distinct reason.

Distinguish facts, assumptions, estimates, and recommendations. Define technical terms before using them.

# 8. Design system

Use existing design tokens. If missing, define semantic tokens for backgrounds, surfaces, foregrounds, muted text, borders, accent, status, focus, chart series, code background, spacing, typography, radii and motion.

- Use a restrained typography scale and comfortable line length.
- Keep wide-screen answers within a readable content column.
- Prefer neutral surfaces and subtle borders.
- Reserve saturated color for semantic status or rare priority.
- Avoid unnecessary card-on-card layouts and excessive badges.
- Use one icon family and coherent sizing.
- Ensure light and dark themes have adequate contrast.
- Support small mobile (320–375px), typical mobile (390–430px), tablet (~768px), desktop (~1280px), and wide screens (1440px+).
- Contain table and code overflow within their own scroll region.
- Respect `prefers-reduced-motion` and never delay access to content for animation.

# 9. Chat shell

If upgrading the whole chat UI, address the following.

## Conversation

- Stable message and part IDs.
- Clear user/assistant distinction without enclosing all assistant output in bubbles.
- Auto-scroll only when the user is already near the bottom; provide “Jump to latest” if new content arrives offscreen.
- Preserve focus/scroll through streaming, retry, edits and component expansion.
- Reserve image/component space where practical to reduce layout shift.

## Composer

- Accessible multiline input that grows to a sensible maximum height.
- Enter-to-send and Shift+Enter for newline unless product requirements differ.
- Disable invalid empty submission, support cancellation when implemented, and preserve drafts on recoverable errors.
- Validate attachments by size/type server-side if uploads exist.
- Prompt suggestions should perform their advertised action.
- Labels should not rely on placeholders alone.

## Message actions

Show only implemented actions, such as Copy, Retry, Edit, feedback, Sources, Save, Export or Share. Provide feedback and do not display inert controls.

## Empty/loading/error states

Explain what the assistant can do; keep loading subtle; preserve readable streamed content; distinguish retryable network errors from validation, permission, quota, or unsupported requests. Never show raw stack traces or secrets.

## Persistence

Enforce ownership on the server. Confirm destructive actions where needed. Do not promise conversation persistence if it doesn't exist.

# 10. Streaming and progressive rendering

Treat streaming as a first-class behavior.

- Use the API for the installed library version.
- Keep text progressively readable.
- Buffer structured JSON until parseable and schema-valid; render the validated block atomically.
- Use stable part IDs and avoid remounting the whole transcript per token.
- Handle cancellation, network loss, incomplete streams and server errors.
- Prevent accidental duplicate tool actions.
- Show concise status and results, not private internal reasoning.
- Do not show a result before the tool has completed successfully.

A useful default: stream prose, show a pending placeholder if appropriate, validate structured content, then render it with a stable key and follow with interpretation/citations.

# 11. Tools and real interactions

Recommended flow:

1. Model selects a declared tool/type.
2. Server validates arguments.
3. Server enforces authentication, authorization, rate limits and business rules.
4. Server runs the permitted operation.
5. Result is normalized into typed data.
6. Renderer displays data using allowlisted components.
7. UI clearly reports success, failure or need for approval.

Keep tools narrow. Treat all model arguments, IDs, URLs and retrieved content as untrusted. Require explicit approval for consequential external side effects as appropriate. Make calls idempotent when possible. Interactive components must document inputs, state, action, output, permissions and accessibility.

# 12. Security and privacy

This section is mandatory:

- Never execute model-generated JavaScript, JSX, HTML, CSS, imports or shell commands.
- Render Markdown through a maintained safe renderer.
- Keep credentials and privileged prompts out of client bundles and browser storage.
- Validate all schemas and enforce sensible size/length limits.
- Use a fixed renderer allowlist, not arbitrary dynamic imports.
- Validate URL protocols; reject unsafe schemes such as `javascript:` and `data:` unless there is a specific, reviewed need.
- Avoid arbitrary iframes. Use sandboxed, origin-restricted embeds for approved needs.
- Validate uploads server-side; don't trust file extensions alone.
- Enforce authorization on each server operation and object lookup.
- Redact secrets from tool results, logs and user-facing errors.
- Escape untrusted values in the relevant output context.
- Rate-limit expensive model calls and actions.
- Minimize retention/logging of sensitive content.
- Distinguish generated estimates from verified data.

An allowlisted component name does not validate all props. Validate each component payload separately.

# 13. Accessibility

- Use semantic landmarks and logical headings.
- All functionality must work with keyboard alone.
- Show clear focus; do not remove focus outlines without an equivalent.
- Label inputs and associate errors with the relevant fields.
- Manage dialog focus and restore it when closed.
- Announce meaningful state changes without reading every token aloud.
- Provide text alternatives for visualizations.
- Don't communicate status only through color.
- Respect reduced-motion preference.
- Test at 200% zoom and narrow viewport widths.
- Avoid inaccessible hover-only interactions.

# 14. Performance and maintainability

- Keep client bundles focused; use Server Components for static surrounding layout in Next.js App Router where appropriate.
- Do not pass non-serializable values across server/client boundaries.
- Memoize only when render behavior/profiling justifies it.
- Avoid rerendering the whole transcript for every streamed token.
- Bound rows, chart points, diagram nodes, image counts and payload sizes.
- Provide fallbacks if chart, image or diagram rendering fails.
- Use error boundaries for complex renderers when appropriate.
- Avoid unnecessary animations and layout thrashing.

# 15. Testing and acceptance criteria

Run available lint, type-check, unit tests and production build. State which checks could not run and why.

### Functional checks

- Valid submission works; empty input is handled.
- Streaming is stable and cancellation works if supported.
- Markdown, code, tables, links and citations render.
- Copy/retry/edit actions work if visible.
- Registered UI types render correctly.
- Invalid or unknown blocks degrade safely.
- Controls update state and calculate/submit correctly.
- No inert button, fake success, or fake download.

### Visual and responsive checks

- Hierarchy and spacing are consistent.
- No unnecessary card around each paragraph.
- Charts and diagrams include labels and explanatory text.
- Code/table overflow is contained.
- Composer does not cover the final answer.
- Navigation and drawers work on mobile.
- Images have stable dimensions and useful alt text.
- Dark mode is checked if supported.
- Inspect 320–375, 390–430, 768, 1280 and 1440+ px where possible.

### Security and accessibility checks

- Invalid payloads are rejected or downgraded safely.
- Unknown component types cannot load modules.
- Unsafe URLs and untrusted HTML do not execute.
- Server authorization is independent of client UI.
- Keyboard operation, visible focus, labels and reduced motion are checked.

# 16. Implementation workflow

## Phase 1 — Audit

Inspect repository stack, message model, AI endpoint, streaming, UI primitives and test commands. Record reusable code and constraints.

## Phase 2 — Foundations

Reuse or create semantic tokens. Establish content width, message rhythm, composer placement, responsive surfaces and theme behavior.

## Phase 3 — Chat shell

Improve message layout, composer, focus, scrolling, actions, empty state and errors without breaking persistence or backend behavior.

## Phase 4 — Typed content model

Define schemas for Markdown, sources, tool status, and a small UI vocabulary. Add validation, stable IDs and schema versioning when needed.

## Phase 5 — Initial components

Implement and test a small polished set: comparison table, metric card, chart, step sequence/checklist, and a calculator/form only when there's a concrete use case. Add diagrams when useful.

## Phase 6 — Model/tool integration

Define narrow tools and structured output instructions; validate before render; handle permission checks, errors, cancellation and duplicate execution.

## Phase 7 — QA and final report

Run available checks, inspect mobile and desktop, exercise visible controls, and report actual changes and limitations. Avoid large rewrites; expand incrementally.

# 17. Model instructions

Teach the backend model to select among implemented component types—not invent new ones.

- Answer directly before adding optional visuals.
- Use a component only if it improves understanding or action.
- Emit only declared types with valid data.
- Explain chart/diagram takeaways in text.
- Never invent data, sources, tool results, dates or action completion.
- Preserve unknown values as unknown.
- Use prose if no supported block fits.
- Declare calculator assumptions; trusted application code performs calculations.
- Ask for confirmation when product policy requires it.
- Do not produce executable HTML/JSX/React as a way to generate UI.

# 18. Common mistakes

Avoid:

- Installing libraries without checking the current project.
- Using documentation examples for a different major version.
- Assuming generative UI parts render automatically.
- Mixing incompatible response schemas from different libraries.
- Trusting a renderer allowlist to validate props.
- Running arbitrary model-generated code.
- Overusing cards, gradients, badges, shadows and motion.
- Charting without labels, units, source or explanation.
- Building a desktop-only UI.
- Auto-scrolling while the user is reading earlier content.
- Showing "Done" before an action succeeds.
- Fake Download/Share controls.
- Ignoring errors, reduced motion or keyboard navigation.
- Claiming tests, artifacts, data or deployment succeeded without evidence.

# 19. Definition of done

- [ ] Existing architecture was audited and conventions reused.
- [ ] Existing submission/streaming still works.
- [ ] Structured parts are typed, validated, and rendered through a fixed registry.
- [ ] Plain Markdown remains polished and does not receive unnecessary wrappers.
- [ ] Components have empty/error states.
- [ ] Visible controls have real actions.
- [ ] Arbitrary model-generated code/HTML is never executed.
- [ ] Responsive layout and accessibility are checked.
- [ ] Available lint, type-check, test and build commands are run.
- [ ] The final report identifies changed files, tests, and known limitations.

# 20. Required final report

After implementing, report:

1. What changed and why.
2. The schema → validation → renderer/tool flow.
3. The components actually implemented (not planned).
4. Important files changed.
5. Checks run and their real results.
6. Security/accessibility handling.
7. Remaining limitations, missing configuration, or failed checks.

Never report intended future work as completed.
