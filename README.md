<div align="center">

# ✨ SkillForge

### Community-powered AI agent skills by ACM BIT Mesra

[![Skills Format](https://img.shields.io/badge/format-Agent%20Skills-8250df?style=for-the-badge)](https://agentskills.io/)
[![Community](https://img.shields.io/badge/community-open%20source-2da44e?style=for-the-badge)](CONTRIBUTING.md)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-fc8c03?style=for-the-badge)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Maintained by ACM BIT Mesra](https://img.shields.io/badge/maintained%20by-ACM%20BIT%20Mesra-0b7285?style=for-the-badge)](https://github.com/acm-bitmesra)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-2da44e?style=for-the-badge)](CONTRIBUTING.md)
[![CI](https://github.com/acm-bitmesra/SkillForge/actions/workflows/validate.yml/badge.svg)](https://github.com/acm-bitmesra/SkillForge/actions/workflows/validate.yml)

**Build once. Share everywhere.**

A growing, community-maintained collection of reusable skills for AI coding agents and other compatible assistants. Discover practical workflows for software engineering, design, research, learning, data analysis, documentation, and more.

[Browse Skills](skills/) · [Add a Skill](CONTRIBUTING.md) · [Report a Security Issue](SECURITY.md)

</div>

---

## What is SkillForge?

SkillForge is an open community library of **Agent Skills**: reusable instructions, workflows, and supporting resources that help compatible AI agents perform specialized tasks more consistently.

Each skill follows the open [Agent Skills format](https://agentskills.io/), using a `SKILL.md` file with metadata and instructions, plus optional references, scripts, and examples.

SkillForge is maintained by the community around **ACM BIT Mesra**. Contributions from students, developers, educators, and open-source maintainers are welcome.

## 🚀 Install a skill

Install skills with the community CLI ecosystem. These examples use the [Vercel skills CLI](https://github.com/vercel-labs/skills); check its current help output for the latest supported options.

### Install one skill

```bash
npx skills add acm-bitmesra/SkillForge --skill chatgpt-style-generative-ui
```

### Browse and install interactively

```bash
npx skills add acm-bitmesra/SkillForge
```

### Clone the collection to explore it

```bash
git clone https://github.com/acm-bitmesra/SkillForge.git
cd SkillForge
ls skills/
```

> **Compatibility note:** Skills are portable files, but agent clients differ in how they discover, install, and activate them. Follow the installation output and the documentation for your specific client. A repository being installable from GitHub does not by itself guarantee listing or ranking on a third-party discovery website.

## 🧰 Featured skill

### ChatGPT-Style Generative UI

A detailed implementation playbook for building modern AI chat interfaces with structured answers, accessible React components, charts, diagrams, interactive tools, streaming, and responsive design.

- **Directory:** [`skills/chatgpt-style-generative-ui`](skills/chatgpt-style-generative-ui/)
- **Main instructions:** [`SKILL.md`](skills/chatgpt-style-generative-ui/SKILL.md)
- **Install:**
  ```bash
  npx skills add acm-bitmesra/SkillForge --skill chatgpt-style-generative-ui
  ```

## 🗂️ Skill collection

Skills live under `skills/<skill-name>/`. Each folder is self-contained and may include references, examples, or scripts alongside the required `SKILL.md`.

| Skill | Focus | Install |
|---|---|---|
| [ChatGPT-Style Generative UI](skills/chatgpt-style-generative-ui/) | React, Next.js, rich AI responses, typed component registries, streaming and safety | `npx skills add acm-bitmesra/SkillForge --skill chatgpt-style-generative-ui` |
| [Next.js App Router Engineering](skills/nextjs-app-router-engineering/) | Server/client boundaries, data fetching, caching, security and production readiness | `npx skills add acm-bitmesra/SkillForge --skill nextjs-app-router-engineering` |
| [Premium Frontend Design](skills/premium-frontend-design/) | Visual direction, design tokens, responsive layouts, real UI states and accessibility | `npx skills add acm-bitmesra/SkillForge --skill premium-frontend-design` |
| [API Security Review](skills/api-security-review/) | OWASP-aligned endpoint inventory, authorization, validation, abuse controls and remediation | `npx skills add acm-bitmesra/SkillForge --skill api-security-review` |
| [Testing and Quality Engineering](skills/testing-quality-engineering/) | Unit, integration, browser, contract and release testing; flaky-test diagnosis | `npx skills add acm-bitmesra/SkillForge --skill testing-quality-engineering` |
| [Evidence-Based Web Research](skills/evidence-based-web-research/) | Source evaluation, date verification, corroboration, citations and uncertainty-aware reports | `npx skills add acm-bitmesra/SkillForge --skill evidence-based-web-research` |
| [AI Video Production Studio](skills/ai-video-production/) | Claude Motion, motion graphics, programmatic video, generated footage, editing, captions and QA | `npx skills add acm-bitmesra/SkillForge --skill ai-video-production` |

Each skill has its own detailed `SKILL.md`, scope, workflow, acceptance checklist and curated official references. Install commands use the current `skills` CLI syntax; see its help output for any version-specific changes.

## 🤝 Contribute a skill

You do not need to be an ACM BIT Mesra member to contribute. Please read the [contribution guide](CONTRIBUTING.md) and open a pull request.

1. Create a directory inside `skills/` using a clear, lowercase, hyphenated name.
2. Add a valid `SKILL.md` with `name` and `description` metadata.
3. Include practical, actionable instructions and disclose any assumptions or required tools.
4. Add examples or reference files when they materially improve the skill.
5. Confirm licensing and attribution for included content.
6. Run the validation script and submit a pull request.

All contributions are reviewed for format, usefulness, safety, clarity, and licensing before merge.

## ✅ Quality and automation

Pull requests run automated checks for skill structure, required metadata, naming conventions, and repository hygiene. These checks are meant to catch common issues early; they do not guarantee a skill is secure, accurate, or suitable for every environment.

- [Contribution guidelines](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Validation workflow](.github/workflows/validate.yml)

## 🔐 Security and trust

Skills are instructions and may include scripts or references. Review a skill before installing or running any bundled code. Never put API keys, passwords, access tokens, or other secrets in a skill. Report security concerns privately using the process described in [SECURITY.md](SECURITY.md).

## 🧭 Principles

- **Open format:** build on Agent Skills conventions, not a proprietary format.
- **Useful over numerous:** prefer clear, tested workflows to empty catalogue entries.
- **Safety by design:** validate content and review executable resources.
- **Community ownership:** acknowledge contributors and keep contribution rules transparent.
- **Honest status:** badges and documentation describe actual checks and features, not aspirational claims.

## Roadmap

- [x] Establish the repository structure and contribution policy
- [x] Add the initial generative UI skill
- [x] Add five researched skills across engineering, design, security, testing, and research
- [x] Add an end-to-end AI video production skill with video-type matrix and prompt blueprints
- [x] Add structural skill validation in CI
- [ ] Grow the community-maintained collection
- [ ] Generate a searchable skill catalogue
- [ ] Build a web directory for browsing and discovery
- [ ] Consider a SkillForge CLI for validation, search, and authoring helpers

## License

The repository's original shared documentation and validation utilities are licensed under the [MIT License](LICENSE), unless a file says otherwise. Each skill may have its own license and attribution requirements; check its directory before reuse.

---

<div align="center">

**Made for the open-source community by ACM BIT Mesra contributors.**

[Star the repository](https://github.com/acm-bitmesra/SkillForge) · [Open an issue](https://github.com/acm-bitmesra/SkillForge/issues) · [Contribute](CONTRIBUTING.md)

</div>
