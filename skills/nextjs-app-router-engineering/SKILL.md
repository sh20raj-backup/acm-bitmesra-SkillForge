---
name: nextjs-app-router-engineering
description: Audit, build, debug, and harden production Next.js applications using the App Router, React Server and Client Components, data fetching, caching, route handlers, forms, and deployment practices. Use when implementing features, fixing Next.js architecture bugs, improving performance, or preparing an app for production.
license: MIT
metadata:
  version: "1.0.0"
  category: engineering
---

# Next.js App Router Engineering

## Mission

Help coding agents make reliable, maintainable, secure Next.js App Router changes in an existing codebase. Preserve the project's working architecture and installed versions. Make evidence-based changes, verify them with available checks, and report what was actually validated.

Use this skill for feature work, bug fixes, refactors, performance work, deployment preparation, and architecture reviews involving Next.js App Router.

## Ground rules

1. Inspect the repository before editing; never assume a tutorial's file structure matches the project.
2. The installed Next.js and React versions plus the project's lockfile are authoritative for compatible APIs.
3. Consult the current official Next.js documentation when a behavior is version-sensitive. Do not rely solely on remembered examples.
4. Prefer the smallest coherent change. Don't rewrite the application, migrate routers, or replace libraries unless the task requires it.
5. Keep secrets and privileged data on the server.
6. Treat all route parameters, form submissions, search parameters, headers, cookies, and external API responses as untrusted.
7. Every interactive control must be functional; every async boundary needs a usable loading and error experience.
8. Never claim a build, test, deployment, or production verification passed unless the result was observed.

## 1. Audit the project

Inspect:

- package.json and lockfile, scripts, Node version and installed framework version.
- App Router structure under app/, route groups, layouts, templates, pages, loading, error, not-found and route handler files.
- TypeScript and lint configuration, aliases, compiler options, tests and CI.
- Existing design system, server/client component boundaries, forms and data mutations.
- Data-access layer, ORM, cache behavior, authentication, authorization, and environment variables.
- Deployment host, runtime constraints, image/font settings, and environment-specific configuration.

Before changing code, summarize the relevant current architecture internally and identify tests available. Avoid changing unrelated files.

## 2. Server and Client Components

App Router components are Server Components by default unless the boundary is declared otherwise. Use server rendering for data access, secrets, static composition, and reducing browser JavaScript. Use Client Components only where state, event handlers, effects, browser APIs, or client-only libraries require them.

- Place client boundaries as deep as practical; don't mark a whole page or layout as client just to support one button.
- Keep server-only modules away from client imports. Use the server-only marker for modules that must never enter the client graph where appropriate.
- Pass only values supported by the framework's serialization rules across the boundary.
- Never pass secrets, database credentials, full internal records, or authorization-sensitive data as client props.
- Render server data safely and expose only the fields needed by the UI.
- Don't assume Client Components are never rendered on the server during initial rendering.

When fixing server/client errors, diagnose the actual import graph or boundary first rather than adding a client directive blindly.

## 3. Data fetching, caching and streaming

Use the current official documentation for the installed version's caching semantics; these APIs and defaults can change.

- Fetch close to the Server Component that needs the data when suitable.
- Avoid calling your own Route Handler from a Server Component just to fetch data already available server-side; use a shared server-only data-access function instead.
- Parallelize independent requests where appropriate; keep truly dependent operations sequential.
- Set cache and revalidation behavior intentionally. Do not assume fetch results are cached by default.
- Understand which APIs make a route dynamic and whether that is intended.
- Use Suspense and loading states to stream meaningful portions rather than making the entire route wait for the slowest data request.
- Prevent cache leaks between users. User-specific data must never accidentally be stored in a shared cache.
- Handle HTTP failure status, malformed response bodies, timeouts and empty data explicitly.
- Avoid waterfalls that can be resolved with parallel server fetching or a better data boundary.

If using SWR, React Query or another client cache, align invalidation with server mutations and avoid maintaining two conflicting sources of truth.

## 4. Mutations, Route Handlers and Server Actions

For every mutation, identify the caller, required permission, input schema, expected output, and failure modes.

- Validate inputs on the server even when the client validates them too.
- Authenticate the caller and authorize the specific object/action on every request.
- Treat IDs supplied by the client as untrusted; verify ownership or access before reading or changing data.
- Use allowlisted fields for updates. Never blindly spread client payloads into database update calls.
- Use correct HTTP methods and status codes in Route Handlers.
- Keep secrets out of returned JSON, logs, error messages and client bundles.
- Avoid side effects during rendering; make writes through explicit mutation paths.
- Where duplicate submissions are harmful, use idempotency, uniqueness constraints, transactions, or deduplication.
- Don't assume a Server Action is automatically authorized just because it is called from a trusted-looking component.
- Set appropriate origin, cookie, CSRF and CORS controls for the architecture; CORS is not authorization.

Return structured, user-safe errors while retaining useful diagnostic context only in appropriately protected server logs.

## 5. Data access and environment

- Centralize privileged data operations in a server-only data access layer where appropriate.
- Give the database user and API tokens the minimum permissions needed.
- Keep environment variables out of committed files and client code. Only deliberately public configuration should use a public-prefixed environment variable.
- Validate required environment variables at startup or a clear server boundary.
- Do not log connection strings, bearer tokens, raw authorization headers, or personal data unnecessarily.
- Use parameterized queries or ORM APIs safely; don't concatenate untrusted values into SQL.
- Use transactions for multi-step writes that must remain consistent.
- Distinguish missing data, unauthorized access and infrastructure failure according to product policy.

## 6. Routing, forms, metadata and assets

- Follow existing file-system routing and route-group conventions.
- Handle params and searchParams according to the actual installed version's API signatures.
- Use Link and navigation APIs appropriately; preserve query/hash behavior where required.
- Provide loading, error, not-found and empty states as needed.
- Use framework metadata APIs for page titles, descriptions, canonical URLs, Open Graph and robots directives where relevant.
- Avoid duplicate/conflicting metadata and verify absolute URLs in the deployed environment.
- Use built-in image/font tooling appropriately and check layout shift and image sizing.
- Forms require labels, validation, pending states, error messages and success feedback.
- Make destructive actions clear and require confirmation where appropriate.

## 7. Performance and production readiness

Use measured evidence, not premature micro-optimization.

- Minimize client JavaScript and unnecessary hydration.
- Check bundle size and identify heavy client dependencies.
- Optimize images, fonts, scripts and third-party embeds.
- Avoid duplicate data fetches and unintended cache invalidation.
- Ensure loading states avoid layout shifts.
- Measure Core Web Vitals or production telemetry when available; don't infer real-user performance from a successful build.
- Check accessibility, mobile rendering, error states and slow-network behavior.
- Verify redirects, headers, environment settings and runtime limits in the actual deployment environment.
- Use the current production checklist for the deployed Next.js version.

## 8. Debugging workflow

1. Reproduce the issue and capture the exact error or failing behavior.
2. Trace from route/component to data source and runtime boundary.
3. Check framework version and official docs for version-sensitive APIs.
4. Identify the smallest root cause, not just the visible symptom.
5. Make a focused fix and add a regression test when feasible.
6. Run the narrow test first, then type-check, lint, tests and production build as available.
7. Review the diff for unintended changes and secret exposure.
8. Report the root cause, files changed, checks run, and any unverified deployment assumptions.

Do not suppress type errors, disable lint rules, or add broad any casts merely to make the build pass. Explain any justified exception.

## 9. Acceptance checklist

- [ ] Existing framework and package versions were inspected.
- [ ] Server/client boundaries are justified and secrets remain server-side.
- [ ] User-specific data cannot leak across caches or sessions.
- [ ] All mutations validate inputs and enforce object-level authorization.
- [ ] Fetch/caching behavior is intentional and documented where non-obvious.
- [ ] Loading, error, empty and not-found states are handled where needed.
- [ ] Forms and controls are accessible and functional.
- [ ] Type-check, lint, relevant tests and build were attempted as available.
- [ ] No secrets, unrelated refactors or unexplained dependencies were added.
- [ ] Final report distinguishes verified facts from assumptions.

## Official references

- Next.js App Router: https://nextjs.org/docs/app
- Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Fetching data and streaming: https://nextjs.org/docs/app/getting-started/fetching-data
- Production checklist: https://nextjs.org/docs/app/guides/production-checklist
- Data security: https://nextjs.org/docs/app/guides/data-security
- TypeScript: https://nextjs.org/docs/app/api-reference/config/typescript

Always verify these pages against the installed framework version before using version-sensitive recommendations.
