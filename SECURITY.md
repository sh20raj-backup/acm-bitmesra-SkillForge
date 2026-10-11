# Security Policy

SkillForge publishes instructions and resources for AI agents. A skill may influence agent decisions and may include scripts, links, examples, or tool workflows. Treat third-party skills as untrusted until reviewed.

## Reporting a vulnerability

Please do not publish exploitable details, credentials, private information, or a weaponized proof of concept in a public issue. Contact the repository maintainers privately through the security reporting options shown on the GitHub repository, or contact the ACM BIT Mesra organization maintainers through their published organization channels.

Include the affected path, the potential impact, reproduction steps that are safe to share, and any suggested mitigation. Do not include real secrets.

## Security principles

- Never commit passwords, API keys, access tokens, private data, or production credentials.
- Never execute scripts from a skill just because it is in this repository.
- Review network access, shell commands, file writes, and external service calls in bundled scripts.
- Treat model output, retrieved content, and user input as untrusted.
- Use least privilege and explicit user approval for consequential side effects.
- Validate structured input and output. A valid `SKILL.md` is not proof that a skill is safe.
- CI checks are structural checks, not a full security review.

## Scope and support

This policy covers the SkillForge repository and its contribution workflow. Report suspected malicious content or credential exposure promptly. Maintainers will triage reports based on impact and available information; no specific response-time SLA is promised.
