---
name: testing-quality-engineering
description: Plan and implement practical automated tests for web applications, APIs, and libraries, from unit and integration tests through browser end-to-end flows and CI checks. Use when adding regression coverage, debugging flaky tests, designing a test strategy, or verifying release readiness.
license: MIT
metadata:
  version: "1.0.0"
  category: engineering
---

# Testing and Quality Engineering

## Mission

Create tests that provide trustworthy evidence that software behaves correctly. Choose test types based on risk, boundaries and cost. Favor deterministic tests of observable behavior over brittle tests coupled to implementation details.

This skill is a workflow for improving an existing test suite or introducing one incrementally. It does not require any particular test runner; first inspect the project and use compatible tooling.

## Principles

1. Test user-visible and contractually meaningful behavior.
2. Test at the lowest layer that proves the behavior; use end-to-end tests for journeys that cross important boundaries.
3. Prefer deterministic fixtures over real uncontrolled services.
4. Don't test framework internals or duplicate every implementation detail.
5. Each test should have a clear reason to fail and a useful failure message.
6. Flaky tests are a product defect in the test suite; don't hide them with endless retries.
7. Every test must be safe to run repeatedly and must clean up its data.
8. Test error paths, permissions, boundaries and empty states—not only happy paths.
9. Never claim tests passed unless they were actually executed and their result was observed.
10. Match assertions and coverage to the risk of the change.

## 1. Inspect the existing testing environment

Inspect:

- package scripts, lockfile, test runner and installed versions
- unit, integration, component, browser, API and contract tests
- CI configuration, required checks, environment variables and test databases
- fixtures, factories, mocks, cleanup, coverage and snapshot policies
- current flaky tests and ignored/disabled test files
- how authentication, tenancy, time, randomness, network and storage are configured for tests

Reuse current conventions. Don't add a second test framework if the existing one is sufficient. If the app lacks tests, add the smallest useful test at the right boundary first.

## 2. Choose the right test level

### Unit tests

Use for pure functions, transformations, validation, calculations, formatters, reducers, and business rules with controlled inputs. Keep tests fast and focused.

### Component tests

Use where interaction, accessibility state, and rendering logic can be tested without a full browser journey. Test user behavior through roles, labels and visible output.

### Integration tests

Use for boundaries that matter together: routes plus authentication, database repository plus transaction, API plus schema validation, or component plus query/mutation state.

### End-to-end tests

Use for a small number of critical user journeys across browser, frontend and backend. Examples include sign-in, purchase confirmation, posting a form, permissions, or essential onboarding.

### Contract tests

Use when client/server schemas or external APIs must remain compatible. Validate request/response shapes and important error cases.

### Avoid false precision

High coverage does not guarantee correctness. Avoid testing every trivial getter solely to raise a percentage. Coverage is a signal for missing paths, not an outcome by itself.

## 3. Write robust test cases

For each test define:

- Behavior and risk being protected
- Given state and fixture
- Action or input
- Expected observable result
- Expected side effects and forbidden side effects
- Cleanup requirements

Use clear names that state behavior, not implementation, such as “rejects an update when the caller does not own the record”.

Prefer Arrange, Act, Assert (or Given, When, Then). Keep each test focused enough that a failure points to one cause. Avoid assertions that only check an element exists when the actual requirement is that it behaves correctly.

## 4. Test boundaries and negative cases

For APIs and forms, consider:

- Missing, malformed and unknown fields
- Boundary lengths, numeric limits and empty collections
- Invalid enum values and wrong content types
- Unauthorized and forbidden requests
- Record ownership and cross-tenant access
- Duplicate submits, idempotency and concurrency
- Rate limits, timeouts and provider failure
- Empty results, pagination edges and stale data
- File type/size mismatch and unsafe filenames
- Error states, retry behavior and partial failures

Do not turn a test into a destructive production attack. Use isolated fixtures and controlled test environments.

## 5. Browser testing with Playwright

If the project uses Playwright, consult the installed version's official docs.

- Prefer user-facing locators such as role, label and visible text; use test IDs when semantic locators aren't appropriate.
- Prefer web-first assertions that retry until the expected condition is true, instead of checking a momentary value and racing the UI.
- Avoid fixed sleeps as synchronization. Wait for observable state, expected navigation, a controlled network response, or an explicit fixture.
- Isolate tests so order doesn't matter; don't share mutable state across workers unless carefully controlled.
- Use explicit test data and deterministic network mocks where suitable.
- Check accessibility-critical interaction with keyboard, not only mouse clicks.
- Capture trace, screenshot or relevant logs on failure where supported.
- Use retries to detect and classify flakiness; do not treat a pass after retry as equivalent to a stable first-pass result.
- Avoid brittle CSS/XPath selectors coupled to DOM structure.

Test critical journeys and important error paths, not every possible combination in the browser.

## 6. Mocking and external services

- Mock at boundaries where external behavior is nondeterministic, expensive or unavailable.
- Prefer realistic fakes or local test services when contract behavior matters.
- Do not mock the function whose behavior the test is meant to verify.
- Keep mocks aligned with current API schemas and failure modes.
- Make time, randomness and generated IDs deterministic when necessary.
- Use a real disposable database for database semantics that mocks cannot represent.
- Never use production credentials or mutate real production data during tests.
- Be careful with snapshots: update them only after understanding why output should change.

## 7. Test data and cleanup

- Use factories or builders for readable fixtures.
- Avoid depending on an account, record, date, or global database created outside the test.
- Use unique IDs or isolated schemas/transactions to avoid collisions.
- Reset changed state after each test.
- Do not store secrets in fixtures.
- Keep test records minimal and realistic.
- Make the suite repeatable from a clean checkout.

## 8. Quality checks and CI

A practical CI pipeline may run:

1. Formatting/lint check
2. Type checking
3. Unit tests
4. Integration/contract tests
5. Build
6. Selected browser tests
7. Coverage/reporting where useful

Choose order based on speed and risk. Cache dependencies safely. Run untrusted pull-request code with least-privileged permissions and do not expose deployment secrets to untrusted contributors.

Use explicit exit codes and preserve test output. Avoid workflows that echo secrets. Do not make a status badge imply a passing test unless it is connected to the real workflow.

## 9. Debug a failing or flaky test

1. Re-run the failing test with the same environment and capture the error.
2. Determine whether the failure is in product behavior, fixture setup, test assumptions, ordering, timing, or external dependency.
3. Reproduce in isolation where possible.
4. Prefer waiting for observable state and controlled dependencies over added sleeps.
5. Fix the root cause; add a regression test if the bug was in the product.
6. Re-run the test repeatedly when flakiness is suspected.
7. Run the larger impacted suite.
8. Report any known nondeterminism rather than silently increasing retries.

Do not delete, skip or weaken a failing test without explaining why and finding an appropriate replacement or follow-up.

## 10. Test quality for UI

Check:

- Keyboard navigation and focus behavior
- Labels, validation messages and disabled state
- Loading, empty, error, and success states
- Navigation and URL changes
- Mobile-responsive behavior for critical flows
- No double submission or accidental duplicate side effects
- Data remains correct after refresh or navigation when persistence is required
- Accessible names and native roles for controls

Automated accessibility checks are useful but cannot prove full conformance or usability.

## 11. Release verification

Before release, map the change to risk and confirm:

- What changed and which code paths are affected
- Which tests protect the changed behavior
- Which tests were executed and their outcomes
- What was not tested and why
- Whether a migration, feature flag, rollback or manual check is required

Don't use “all tests pass” if only one narrow test ran. Say precisely “targeted unit test passed; full suite not run” where applicable.

## Acceptance checklist

- [ ] Existing test conventions and tools were inspected.
- [ ] Test level matches behavior and risk.
- [ ] Happy path, meaningful failures and boundaries are covered.
- [ ] Tests are deterministic, isolated and clean up after themselves.
- [ ] Browser tests use stable locators and observable-state assertions.
- [ ] Tests are safe to run locally and in CI.
- [ ] CI doesn't expose secrets to untrusted code.
- [ ] Relevant checks were run and accurately reported.
- [ ] Flaky, skipped and untested behavior is disclosed.
- [ ] Tests assert behavior, not implementation trivia.

## Official references

- Playwright best practices: https://playwright.dev/docs/best-practices
- Playwright assertions: https://playwright.dev/docs/test-assertions
- Playwright retries and flaky-test classification: https://playwright.dev/docs/test-retries
- Agent Skills specification: https://agentskills.io/specification

Consult docs matching the installed version and test runner.
