# HCIN-620 Polaris

Team Polaris group project for HCIN-620.

## Course

- School: Rochester Institute of Technology (RIT).
- Program: [Human-Computer Interaction MS](https://www.rit.edu/study/human-computer-interaction-ms).
- Class: HCIN-620 — Information and Interaction Design.
- Professor: Adam Emfield.

## Overview

This repository will hold the team's project work and supporting documentation. Project scope is to be determined.

## Website Platform and Hosting

- Hosting: GitHub Pages, decided on the professor's recommendation.
- Site implementation technology: Astro, generating a static website.
- Repository visibility: public, selected for GitHub Pages hosting.
- Component library: Bootstrap, with custom CSS to implement the team's Figma designs.
- Publishing setup: pending; no site has been published as part of this task.

The platform and hosting decisions are recorded. Teammate review remains pending.

## Team

Team Polaris (Group 2):

- Chris Dougall
- Nolan Figueroa
- Natasya Queentina
- Shreya Rana

Responsibility for project work is shared across Team Polaris. Work is coordinated during weekly team meetings based on members' skills, preferences, availability, and project needs.

## Project Structure

```text
src/pages/        Website pages (file paths become routes)
src/layouts/      Shared HTML layout and stylesheet imports
src/styles/       Custom CSS for team-approved designs
public/           Public assets copied into the built site
docs/             Project documentation and handoff materials
.agents/skills/    Reusable assistant skills loaded for relevant tasks
```

## Getting Started

Use Node.js 24.x and npm. If you use nvm, run `nvm use` from the repository root.

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/hcin620-polaris/` (or the address printed in the terminal if that port is busy).

```sh
npm run build
npm run preview
```

The build writes the static site to `dist/`. Preview serves that build locally at the same base path. GitHub Pages publishing is still pending.

The starter page uses the existing team name and course description. It is a setup placeholder; the team will supply the homepage design and project content.

Add pages under `src/pages/` and reuse `src/layouts/BaseLayout.astro`. Bootstrap CSS is bundled locally; add team-approved custom styles in `src/styles/global.css`. Import Bootstrap JavaScript only when a component needs it.

The GitHub Pages path is configured in `astro.config.mjs`. Prefix internal links and paths to `public/` assets with `import.meta.env.BASE_URL`, for example `${import.meta.env.BASE_URL}images/example.png`. Keep private documents outside `public/`; its files are copied into the site.

See the [Astro setup guide](https://docs.astro.build/en/install-and-setup/) and [GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) for framework instructions.

Before using AI tools, read the [AI Workflow Guidelines](docs/ai-guidelines.md) and [Tools and Usage](docs/tools.md). Repository instructions are in `AGENTS.md` and `CLAUDE.md`.

See [Agent Skills](docs/agent-skills.md) for proofreading, local-link checks, and change review. Agents can load a skill for relevant work or when explicitly asked, and delegate an independent check when useful. The guide covers invocation, permissions, and the shared structure.

## Development Workflow

- Use Slack for primary communication and email as needed. Respond within 24 hours on weekdays and 48 hours on weekends; raise blockers and deadline risks early.
- Meet weekly on Monday at 12:00 p.m. EST and post weekly work plans in Slack by Monday at 11:59 p.m. EST, as stated in the team contract. Give at least 3 hours' notice if unable to attend.
- Keep Jira assignments, progress, and deadlines current. Use Figma for design, Google Docs/Drive and GitHub for documentation, and tl;dv for meeting notes.
- Until the team confirms Milestone 1 has been passed, continue new work on the current branch; creating a separate branch is optional. After that, resume creating a branch from `main` for each focused change.
- Keep changes small and document relevant decisions in `docs/`.
- Open a pull request before merging into `main`. Have at least one other team member review completed work and address feedback by the agreed deadline.
- Keep credentials and local environment files out of version control.
