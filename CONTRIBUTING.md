# Contributing to SkillForge

Thank you for helping improve the open-source Agent Skills ecosystem! SkillForge welcomes thoughtful contributions from students, developers, educators, maintainers, and anyone with a useful reusable workflow.

## What makes a good skill?

A good skill helps an agent perform a recurring task more reliably. It should be practical, specific, safe, and easy to evaluate—not merely a generic prompt or a collection of vague recommendations.

Good candidates include engineering workflows, design systems, research methods, testing procedures, documentation workflows, education, data analysis, and domain-specific tasks.

## Add a skill

1. Fork this repository and create a branch.
2. Create a directory in `skills/` with a short lowercase, hyphen-separated name (for example, `accessible-data-visualization`).
3. Add a `SKILL.md` file with valid YAML frontmatter and clear instructions.
4. Add references, examples, assets, or scripts only when they materially improve the workflow.
5. Check that all content is your own, appropriately licensed, or included with the rights and attribution required by its license.
6. Run the local validation script.
7. Open a pull request using the template and explain the intended user, when to use the skill, examples, requirements, and known limitations.

## Required skill format

Each skill folder must contain `SKILL.md` with at least:

```yaml
---
name: accessible-data-visualization
description: Build accessible charts and data visualizations from validated data. Use when an agent needs to select, implement, or review a chart and its accessible text equivalent.
---
```

The `name` should match the folder name. Keep the description specific: say what the skill does and when it should be selected. Follow the [Agent Skills specification](https://agentskills.io/specification) for exact format requirements.

## Local validation

Requirements: Node.js 20+.

```bash
node scripts/validate-skills.mjs
```

The validation script performs structural and metadata checks. It is not a security audit and does not certify the correctness of a skill.

## Review checklist

Maintainers review for:

- Valid format, naming, and useful description
- Clear trigger/use cases and actionable steps
- Practical examples and honest limitations
- Safe handling of untrusted data, credentials, external actions, and scripts
- License compatibility and attribution
- No secrets, malware, undisclosed telemetry, or misleading claims
- Links that are relevant and maintained
- Avoidable duplication with existing skills

Passing CI is necessary but does not guarantee acceptance. Maintainers may request changes, decline a duplicate, or ask to scope an oversized skill into smaller focused files.

## Scripts and external actions

Do not assume a skill's scripts will be executed automatically. Scripts must be documented and safe. Do not include commands that exfiltrate data, weaken security, reveal secrets, or perform destructive operations without clear explanation and safeguards. Never commit credentials or private data.

## Licensing

Include a license in a skill's own metadata or document its licensing clearly in its directory. Do not copy third-party content without checking the license and retaining required attribution. The top-level repository license does not automatically relicense content whose terms differ.

## Pull requests

Please keep each PR focused. Use a descriptive title and include:

- What the skill does and who it helps
- Why it should be part of SkillForge
- How to invoke or use it
- Example task(s) and expected behavior
- Required tools/dependencies
- License and attribution details
- Validation performed and known limitations

Be kind and constructive in review. Thanks for contributing!
