# HCIN-620 Polaris

Team Polaris group project for HCIN-620.

## Course

- School: Rochester Institute of Technology (RIT).
- Program: [Human-Computer Interaction MS](https://www.rit.edu/study/human-computer-interaction-ms).
- Class: HCIN-620 — Information and Interaction Design.
- Professor: Adam Emfield.

## Overview

Team Polaris is exploring guidance for safe and responsible electronic waste disposal. This repository contains the course project website and supporting documentation.

## Website Platform and Hosting

- Hosting: GitHub Pages, decided on the professor's recommendation.
- Site implementation technology: Astro, generating a static website.
- Repository visibility: public, selected for GitHub Pages hosting.
- Component library: Bootstrap, with custom CSS to implement the team's Figma designs.
- Publishing setup: deployment workflow prepared; first deployment and live verification are pending.
- Site URL after publishing: https://astronolanx.github.io/hcin620-polaris/ (no custom domain needed).

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
src/layouts/      Shared document metadata, header, and footer
src/components/   Navigation, team list, content sections, and image placeholder
src/data/         Shared project copy and team names/roles
src/styles/       Design tokens, shared styles, and responsive layout
public/           Public assets copied into the built site
docs/             Project documentation and handoff materials
.agents/skills/    Reusable assistant skills loaded for relevant tasks
```

## Getting Started

Use Node.js 24.x and npm. Run the commands below from the root of your local copy of this repository. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/hcin620-polaris/` (or the address printed in the terminal if that port is busy).

```sh
npm run build
npm run preview
```

The build writes the static site to `dist/`. Preview serves that build locally at the same base path.

The overview implements the team's supplied index design: introductory text, team roles, an image area, project sections, and a shared dark footer. Project Focus uses the same components and content. Images and references remain placeholders; later course stages appear as locked navigation items.

Update team names and roles in `src/data/team.ts` and project copy in `src/data/project.ts`; both pages reuse this content. Shared colors, typography, spacing, and responsive rules live in `src/styles/global.css`. Replace `ImagePlaceholder.astro` with the selected image and its verified credit when those assets are ready. The template and content still need student and teammate review before submission.

Add pages under `src/pages/` and reuse `src/layouts/BaseLayout.astro`. Bootstrap CSS is bundled locally; add team-approved custom styles in `src/styles/global.css`. Import Bootstrap JavaScript only when a component needs it.

The GitHub Pages path is configured in `astro.config.mjs`. Prefix internal links and paths to `public/` assets with `import.meta.env.BASE_URL`, for example `${import.meta.env.BASE_URL}images/example.png`.

Keep private documents out of this public repository, not just out of `public/`. Files in `public/` are copied into the site; other tracked files are still accessible on GitHub. Store sensitive originals in restricted team storage and share only reviewed, sanitized copies here. Removing a file in a later commit does not erase its earlier versions from [Git history](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

See the [Astro setup guide](https://docs.astro.build/en/install-and-setup/) and [GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) for framework instructions.

Before using AI tools, read the [AI Workflow Guidelines](docs/ai-guidelines.md) and [Tools and Usage](docs/tools.md). Repository instructions are in `AGENTS.md` and `CLAUDE.md`.

See [Agent Skills](docs/agent-skills.md) for proofreading, local-link checks, and change review. Agents can load a skill for relevant work or when explicitly asked, and delegate an independent check when useful. The guide covers invocation, permissions, and the shared structure.

## Publishing

The [deployment workflow](.github/workflows/deploy.yml) builds the site with Node.js 24 and publishes only `dist/` on pushes to `main`. A maintainer with write access can also run it manually from the Actions tab on `main`. It uses GitHub-provided deployment credentials; no personal token or custom domain is required.

The repository owner or an administrator handles the one-time GitHub Pages setup, selecting **GitHub Actions** as the publishing source. Team members do not need access to repository settings to contribute site updates.

To publish updates:

1. Prepare and review changes using the development workflow below. Changes reaching `main` trigger deployment automatically.
2. Check [Actions](https://github.com/astronolanX/hcin620-polaris/actions) for a successful **Deploy to GitHub Pages** run.
3. Check the [homepage](https://astronolanx.github.io/hcin620-polaris/) and [Project Focus](https://astronolanx.github.io/hcin620-polaris/project-focus/), including navigation and styling. Publishing placeholders does not make them submission-ready.

See [Astro's publishing guide](https://docs.astro.build/en/guides/deploy/github/) for the GitHub Pages setup.

## Development Workflow

- Use Slack for primary communication and email as needed. Respond within 24 hours on weekdays and 48 hours on weekends; raise blockers and deadline risks early.
- Meet weekly on Monday at 12:00 p.m. EST and post weekly work plans in Slack by Monday at 11:59 p.m. EST, as stated in the team contract. Give at least 3 hours' notice if unable to attend.
- Keep Jira assignments, progress, and deadlines current. Use Figma for design, Google Docs/Drive and GitHub for documentation, and tl;dv for meeting notes.
- Until the team confirms Milestone 1 has been passed, continue new work on the current branch; creating a separate branch is optional. After that, resume creating a branch from `main` for each focused change.
- Keep changes small and document relevant decisions in `docs/`.
- Open a pull request before merging into `main`. Have at least one other team member review completed work and address feedback by the agreed deadline.
- Keep credentials and local environment files out of version control.
