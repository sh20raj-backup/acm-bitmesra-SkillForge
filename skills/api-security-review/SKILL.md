---
name: api-security-review
description: Review web APIs and backend endpoints for authentication, authorization, input validation, data exposure, resource abuse, SSRF, security misconfiguration, and unsafe error handling. Use for security reviews, pre-release audits, threat modeling, or remediation planning for REST, GraphQL, and application APIs.
license: MIT
metadata:
  version: "1.0.0"
  category: security
---

# API Security Review

## Mission

Help an engineering agent perform a methodical, defensive review of APIs, identify concrete security risks, and propose prioritized, testable remediations. Anchor findings in observable code and documented behavior. Do not claim a system is secure merely because a checklist was completed.

Use this skill for authorized code review, threat modeling, internal pre-release checks, and security remediation. Scope tests to systems the user owns or is explicitly authorized to assess.

## Safety boundaries

- Confirm the authorized scope and environment before testing live systems.
- Prefer source review, mocks, staging environments and non-destructive tests.
- Do not perform destructive, high-volume, stealthy, or data-exfiltrating testing.
- Do not access another user's records or attempt account takeover.
- Never print secrets or sensitive data found during a review. Redact them in output.
- Stop and report if testing appears to affect production data or service availability.
- Distinguish confirmed findings, plausible risks, and items that could not be assessed.

## 1. Establish scope and context

Record:

- API style and versions: REST, GraphQL, RPC, webhook, or mixed.
- Relevant routes, methods, schemas and authentication schemes.
- Data sensitivity and important trust boundaries.
- Roles, tenants, ownership model and privileged actions.
- External integrations, file uploads, URL fetching and background jobs.
- Rate limits, pagination, quotas, logging and monitoring.
- Environments where tests are permitted and actions that are out of scope.

Do not invent endpoints or assume hidden route behavior. Discover routes through the repository, API specification, route definitions, tests, or authorized documentation.

## 2. Build an endpoint inventory

For each endpoint capture:

- Method and route
- Purpose and data classification
- Authentication required
- Authorization rule (role, ownership, tenant or capability)
- Input schema and bounds
- Side effects and idempotency
- Rate/size/time limits
- Error response shape
- Tests and unresolved questions

Include internal, admin, debug, export, webhook, batch, upload and health endpoints where present. Check deprecated versions and alternate routes too.

## 3. Identity and authorization

### Authentication

- Check that protected routes consistently require the expected identity.
- Review session, token, expiration, signing, audience/issuer and refresh behavior as applicable.
- Ensure credentials are not placed in URLs or logged.
- Confirm logout/revocation semantics when applicable.
- Handle missing, invalid, expired and malformed credentials consistently.
- Do not design custom cryptography; use maintained framework/provider features.

### Object-level authorization

For every operation using a record ID, verify that the requester is allowed to access that specific record, not merely that they are signed in. Test owner, non-owner, cross-tenant and privileged-user cases using safe fixtures.

### Function-level authorization

Verify permission before administrative, billing, export, moderation, deletion, role-change or other privileged actions. Hiding a button in the UI is not enforcement. Enforce policy on the server for every request.

### Property-level authorization

Allowlist fields users may read and write. Prevent excessive data exposure and mass assignment. Do not serialize a full database record if the caller should see only a subset of fields.

## 4. Input validation and query safety

- Define explicit schemas for path, query, header, body and file inputs.
- Enforce required fields, data types, maximum lengths, number bounds, allowed enums and collection sizes.
- Reject or safely normalize ambiguous encodings and invalid content types.
- Use parameterized queries or safe ORM/query-builder APIs.
- Avoid building SQL, shell commands, file paths, template expressions or queries through string concatenation with untrusted input.
- Prevent unsafe deserialization and unbounded recursive payloads.
- Treat file name, MIME type and file contents as untrusted; enforce size and storage rules.
- Verify that validation occurs server-side.
- Avoid silently accepting unknown properties in sensitive updates unless designed intentionally.

## 5. Resource consumption and abuse

Review limits for:

- Requests per identity and per IP where appropriate
- Expensive search, AI, export, image processing and report-generation calls
- Pagination size, recursion depth, filter complexity and batch length
- File uploads and decompression
- Request body and response size
- Database query time and external-service timeout
- Concurrent operations and background job queues

Ensure quotas are applied to the right identity and cannot be bypassed simply by changing a user-controlled ID. Use graceful 429/rate-limit behavior and avoid revealing internal infrastructure details.

## 6. SSRF, redirects and external integrations

For features that fetch URLs, webhooks, images, documents or remote resources:

- Use a strict allowlist of hosts/schemes where feasible.
- Reject loopback, private, link-local and cloud metadata destinations unless explicitly required and safely isolated.
- Re-check resolved IPs and every redirect where the implementation permits redirects.
- Set timeouts, response-size limits and content-type expectations.
- Avoid passing arbitrary user URLs directly into privileged server-side fetches.
- Verify webhook signatures, replay protection, timestamps and idempotency.
- Validate outbound destination and credentials independently from client input.

Use framework/provider primitives rather than implementing network policy incompletely. Test with controlled mocks and reserved test targets.

## 7. HTTP and configuration

- Use HTTPS in deployed environments and secure cookie attributes where applicable.
- Review allowed CORS origins, methods and headers. CORS is a browser policy, not authentication or authorization.
- Avoid permissive credentialed CORS.
- Check security headers and Content Security Policy in the actual deployment.
- Disable debug endpoints and verbose stack traces in production.
- Ensure caches do not serve private responses to other users.
- Avoid sensitive content in URLs, referrers and analytics.
- Verify proxy/trust-header configuration before deriving client IP or scheme from headers.
- Confirm supported methods and content types are intentional.

## 8. Errors, logs and sensitive data

- Return useful but minimal error responses.
- Never reveal stack traces, SQL, internal hostnames, secrets, tokens or unrelated user records.
- Log security-relevant events with suitable request/correlation IDs.
- Redact secrets and minimize retention of personal data.
- Ensure logs and monitoring permissions are appropriately restricted.
- Don't turn validation failures into 500s or infrastructure failures into misleading success responses.
- Make security events observable without collecting unnecessary sensitive payloads.

## 9. Review against OWASP API Security Top 10 (2023)

Use the official list as a coverage aid:

1. Broken Object Level Authorization
2. Broken Authentication
3. Broken Object Property Level Authorization
4. Unrestricted Resource Consumption
5. Broken Function Level Authorization
6. Unrestricted Access to Sensitive Business Flows
7. Server Side Request Forgery
8. Security Misconfiguration
9. Improper Inventory Management
10. Unsafe Consumption of APIs

The version cited here is the 2023 edition; verify whether a newer edition exists before describing it as the latest. Also review the OWASP REST Security Cheat Sheet. A checklist does not replace threat modeling or context-specific analysis.

## 10. Finding format and severity

Each finding should include:

- **Title**
- **Severity and rationale**
- **Affected route/file/line range**
- **Preconditions and trust boundary**
- **Evidence** observed in code or safe test
- **Impact** stated without exaggeration
- **Reproduction** limited to an authorized, non-destructive scenario
- **Recommended remediation**
- **Regression test**
- **Confidence** and any uncertainty

Prioritize using impact, exploitability, exposed data/actions, reachability and compensating controls. Do not assign severity solely based on a keyword or a speculative worst case.

Group duplicate root causes, but do not merge unrelated routes if the fixes differ. Separate verified vulnerabilities from hardening recommendations.

## 11. Remediation and verification

For each accepted finding:

1. Identify the root cause and security boundary.
2. Propose the smallest robust fix.
3. Add or update an authorization/validation regression test.
4. Run focused tests, then relevant suite, type-check and build.
5. Verify that the fix doesn't break legitimate roles or tenants.
6. Avoid weakening controls just to satisfy a test.
7. Report remaining gaps and tests that require an authorized environment.

## 12. Deliverable structure

Produce:

1. Executive summary and scope
2. Architecture/trust-boundary observations
3. Findings ordered by risk
4. Coverage checklist for the OWASP API risks
5. Fix recommendations and regression tests
6. Unreviewed routes, missing evidence and residual risks

Do not issue a blanket "secure" or "compliant" conclusion. State what was reviewed, when, with which tools, and what remains untested.

## Acceptance checklist

- [ ] Scope and authorized environment were recorded.
- [ ] Endpoint inventory includes sensitive and privileged routes.
- [ ] Authentication and object/function/property authorization were reviewed.
- [ ] Inputs, resource limits, outbound requests and file handling were reviewed.
- [ ] Secrets, error responses, logging, CORS, caching and configuration were considered.
- [ ] Findings include evidence, impact, confidence and actionable remediation.
- [ ] Findings are prioritized without exaggeration.
- [ ] Regression tests and focused verification are included where possible.
- [ ] Sensitive data is redacted and no destructive tests were performed.
- [ ] The final report clearly states limitations and residual risk.

## Official references

- OWASP API Security Project: https://owasp.org/projects/api-security-project
- OWASP API Security Top 10 (2023): https://owasp.org/API-Security/editions/2023/en/0x11-t10/
- OWASP REST Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
- Next.js data security guide: https://nextjs.org/docs/app/guides/data-security

Use current project versions and deployment policy alongside these references.
