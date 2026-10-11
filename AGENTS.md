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
