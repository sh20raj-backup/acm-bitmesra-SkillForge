---
name: premium-frontend-design
description: Design and implement polished, distinctive, responsive web interfaces with strong visual hierarchy, reusable design tokens, accessible interactions, and real product states. Use when creating or refining landing pages, dashboards, product UI, marketing sites, design systems, or frontend components.
license: MIT
metadata:
  version: "1.0.0"
  category: design
---

# Premium Frontend Design

## Mission

Create high-quality interfaces that feel intentional, clear, useful, and distinctive. A premium interface is not a pile of gradients, shadows, animations, and cards. It combines a strong concept, disciplined typography, purposeful layout, coherent interactions, responsive behavior, and accessibility.

Produce working product UI, not just a screenshot-like mockup. Preserve the existing stack and design language unless the task explicitly requests a redesign.

## Design principles

1. Start from the product, audience, primary task, and content hierarchy.
2. Establish a visual direction before writing components.
3. Use restraint: not every section needs a card, border, gradient, badge or animation.
4. Build a coherent system of tokens and reusable primitives.
5. Design empty, loading, error, success, disabled and overflow states—not only the ideal state.
6. Treat mobile layouts as designed experiences, not compressed desktop layouts.
7. Prefer semantic HTML and native browser behavior before adding ARIA or custom interaction logic.
8. Use motion to communicate state or continuity, not as decoration that delays users.
9. Never fake metrics, reviews, logos, quotes, integrations, testimonials, or product behavior.
10. Test visual quality in the actual application and report what's been verified.

## 1. Understand before designing

Inspect the repository and answer these questions:

- Who is the user and what is the main job they need to complete?
- What is the primary action and what information supports it?
- What design system, colors, fonts, icons and component libraries already exist?
- Which routes and breakpoints matter?
- Is the site content-driven, transactional, analytical, or primarily a marketing experience?
- Which content and claims are supplied and verified? Which are unknown?
- What must remain compatible with existing components, APIs and deployment?

If the brief is incomplete, make low-risk assumptions, state the assumptions in the final report, and avoid inventing business facts.

## 2. Establish visual direction

Before implementation, define a compact design brief:

- **Mood:** a few precise words, such as editorial, technical, warm, understated or playful.
- **Hierarchy:** one primary focal point per section; clear secondary and tertiary content.
- **Typography:** display, heading, body, UI label and code roles; establish a readable line length.
- **Color:** page background, surfaces, primary text, muted text, border, action and semantic status colors.
- **Spacing:** a small, consistent scale rather than arbitrary values on every component.
- **Shapes:** consistent radii, border weight and elevation; use shadow only when it clarifies layering.
- **Imagery:** deliberate art direction, useful crops, appropriate aspect ratios and meaningful alternatives.
- **Interaction:** hover, focus, active, pressed, selected, loading, disabled and error states.

Avoid copying another brand's entire visual identity. Use reference products to understand patterns, then make a coherent design that fits this project's audience and content.

## 3. Design tokens and component system

Reuse existing tokens or define semantic tokens. Keep raw values centralized.

Suggested token groups:

- Colors: background, surface, elevated surface, foreground, muted foreground, border, accent, focus, success, warning and danger.
- Typography: font families, sizes, weights, line heights and letter spacing.
- Spacing: section, container, stack, inline and control spacing.
- Layout: container widths, sidebar width, header height, breakpoints and content max-width.
- Shapes: small/medium/large radii and border widths.
- Motion: duration, easing and reduced-motion alternative.
- Data visualization: distinguishable series colors, grid, axis, tooltip and selection states.

Use design tokens in components; don't scatter duplicated hex values and magic numbers throughout the application. Prefer composable primitives with clear props over one component containing dozens of booleans.

## 4. Layout and content hierarchy

- Define the main content width and align headings, body copy, cards and forms to a consistent grid.
- Use whitespace to show hierarchy; don't fill every empty area.
- Put primary actions near the content that justifies them.
- Keep navigation, page heading, supporting context and task content visually distinct.
- Use cards for meaningful groups, not as a universal wrapper.
- Avoid excessive nesting, repeated section introductions and decorative separators.
- Ensure headings describe the content that follows.
- Design tables, code blocks, filters and charts for overflow instead of letting them break the viewport.
- Long pages need clear section structure and sensible content density.

For marketing pages, make the value proposition specific, supporting evidence honest, and the primary call to action obvious. Do not add fabricated logos or social proof to make a page look established.

## 5. Responsive implementation

Test at narrow phone widths (320–375 px), typical phones (390–430 px), tablet (~768 px), laptop (~1280 px) and wide desktop (1440 px or above), as applicable.

- Use fluid sizing and layout constraints rather than fixing every dimension.
- Ensure controls have comfortable hit areas.
- Turn multi-column layouts into a deliberate mobile reading order.
- Keep menus and dialogs usable by keyboard and touch.
- Avoid hover-dependent content.
- Contain horizontal overflow in code and data tables.
- Ensure sticky headers/composers don't cover focused controls or page content.
- Respect safe areas when the product targets mobile browsers.
- Check long labels, localization, zoom and large text.

## 6. Accessibility baseline

Use WCAG 2.2 as a reference target and validate against the actual product and applicable requirements. This skill does not claim formal conformance by itself.

- Use semantic elements and logical heading levels.
- Native button, link, input, select and dialog elements should be preferred where appropriate.
- Every input needs a programmatic label and useful error text.
- Ensure keyboard navigation and visible focus.
- Do not communicate meaning through color alone.
- Provide useful alt text for informative images and empty alt text for decorative images.
- Check text and UI contrast.
- Support zoom and reflow.
- Respect prefers-reduced-motion.
- Manage focus for dialogs, drawers, menus and error summaries.
- Announce meaningful async status changes; don't spam screen readers with every visual update.
- Do not add ARIA roles that conflict with native semantics.
- Test with keyboard and an automated checker; automated tests alone cannot guarantee accessibility.

## 7. Motion and micro-interactions

Motion should make the interface feel responsive and explain what changed.

- Use short, consistent transitions for hover, focus, disclosure and state changes.
- Avoid animating large areas without a clear reason.
- Do not delay navigation or user actions for animation.
- Avoid continuous movement in reading-heavy content.
- Disable or simplify non-essential motion under reduced-motion preference.
- Ensure all functionality remains available without motion and hover.
- Avoid layout shifts when expanding content or loading imagery.

## 8. State coverage

For each meaningful component, consider:

- Initial/empty state
- Loading or pending state
- Success/selected state
- Validation and server error
- Disabled/permission-limited state
- Long content and overflow
- Network loss or retry state where applicable
- Narrow viewport and keyboard focus state

Use realistic representative content. Keep empty states useful and non-blaming. Errors should explain what happened and what the user can do next without exposing internal stack traces.

## 9. Frontend quality and performance

- Keep components small enough to understand and reuse.
- Reuse existing UI dependencies before adding another one.
- Avoid unnecessary JavaScript for static content.
- Optimize image dimensions and avoid layout shift.
- Use meaningful page metadata and headings.
- Check Core Web Vitals when relevant; don't claim field performance from local appearance alone.
- Prevent console errors, hydration mismatches and broken navigation.
- Use stable keys and avoid index keys for changing lists where they can cause state bugs.
- Validate forms and show result feedback.
- Don't introduce fake controls or visually disabled actions without a reason.

## 10. Implementation workflow

1. Audit existing routes, design tokens, components, data and dependencies.
2. Write a short visual direction and information hierarchy.
3. Define or reuse tokens and primitives.
4. Implement the page's main content and primary action before decoration.
5. Add real interaction and all important states.
6. Adapt layout intentionally for each breakpoint.
7. Verify semantic structure, focus, contrast, reduced motion and form labels.
8. Run existing lint/type/test/build checks.
9. Inspect the rendered result in a browser or screenshot tool when available.
10. Fix visible defects and report what could not be verified.

## Acceptance checklist

- [ ] The visual direction matches audience, content and product purpose.
- [ ] Hierarchy is obvious without excessive cards or decoration.
- [ ] Typography, spacing, color and radii are coherent.
- [ ] Existing reusable components and design tokens are reused.
- [ ] Mobile, tablet and desktop layouts are considered and checked where possible.
- [ ] All visible actions work and show meaningful status.
- [ ] Empty, loading, error and disabled states are covered where relevant.
- [ ] Keyboard, focus, contrast, labels and reduced motion are considered.
- [ ] Content and social proof are factual; no fabricated claims.
- [ ] Tests and final report accurately distinguish completed checks from assumptions.

## Official references

- WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
- What's new in WCAG 2.2: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- MDN ARIA guide: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- MDN accessible HTML features: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/HTML_features_for_accessibility
- Core Web Vitals: https://web.dev/articles/vitals

Use these references as the baseline and verify current guidance before making compliance claims.
