# AI Video Production Studio

Create, animate, edit, render, caption and package videos with Claude Motion, coding agents, programmatic video tools and external generative video/audio models.

## Install

```bash
npx skills add acm-bitmesra/SkillForge --skill ai-video-production
```

## What it covers

- Claude Motion and its editable, code-based animation workflow (when available to your account)
- Remotion, Motion Canvas, Manim, SVG/Canvas and FFmpeg
- Explainers, kinetic typography, educational/technical animations, product demos, ads, social shorts, data stories, maps, slide videos, music visualizers, tutorials, podcasts, AI-generated cinematic footage, avatars, and repurposing existing clips
- Storyboards, shot lists, script and narration timing, visual systems, prompts, audio, captions and localization
- Tool selection, generation APIs, licensing, consent, provenance, privacy and budget controls
- Preview, render, media inspection, quality assurance and final packaging

## Companion references

- [Video type matrix and production selection](references/video-type-matrix.md)
- [Reusable video prompt blueprints](references/prompt-blueprints.md)

## Important capability distinction

Claude Motion, announced by Anthropic on October 8, 2026, is a code-based animation feature that can animate text, charts, shapes and images and export MP4 where available. Anthropic explicitly says it does not use a video-generation model to create generated footage or AI-generated people. Use a currently available video model/provider for that requirement, or use licensed/supplied footage. Availability changes, so check the official announcement/docs linked in [SKILL.md](SKILL.md).

## Workflow

Brief → research → script → storyboard → tool choice → asset plan → build/generate → preview → inspect → revise → final render → verify → package.

The skill requires the agent to identify what it actually created and verified. It must not claim an MP4 exists until the file is rendered and checked.
