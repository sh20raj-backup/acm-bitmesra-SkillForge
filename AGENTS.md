# Repository instructions for coding agents

- This repository is a community directory of Agent Skills, not an app runtime.
- Follow the Agent Skills specification: https://agentskills.io/specification.
- Preserve each skill's directory as a self-contained unit with its own `SKILL.md`.
- Do not rewrite contributors' skills for stylistic preference without discussing the change.
- Never add secrets, private user data, malicious instructions, or unexplained destructive commands.
- Do not run arbitrary scripts supplied by contributed skills during validation.
- Run `node scripts/validate-skills.mjs` after changing the skill collection.
- Keep README badges honest; CI badges must point to real workflows.
- Update catalogue/documentation only when the corresponding feature exists.
- Preserve attribution and per-skill licensing.
- When adding automation, use least-privilege permissions and pin third-party actions to reviewed versions where practical.
- Every `README.md` created or materially updated in this repository must include the SkillForge visitor badge: `[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Facm-bitmesra%2FSkillForge&countColor=%23263759&style=flat-square)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Facm-bitmesra%2FSkillForge)` (unless the user explicitly provides a different visitor-badge target).
