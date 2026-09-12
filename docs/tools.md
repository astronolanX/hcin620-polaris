# Tools and Usage

Team Polaris's workflow tools and planned additions are listed below.

| Tool | Use |
| --- | --- |
| Slack and email | Team communication, progress updates, and coordination; Slack is the primary channel. |
| Figma | Student-led design and prototyping. |
| Jira | Task assignments, progress tracking, and deadlines. |
| Google Docs and Google Drive | Collaborative documentation and shared project materials. |
| GitHub | Version control, repository documentation, and work review. |
| GitHub Pages | Hosting for the static website; GitHub Actions source configured and deployment workflow prepared. First deployment and live verification pending. |
| GitHub Actions | Publishing workflow prepared: build with Node.js 24 and npm, upload `dist/`, and deploy to GitHub Pages when `main` changes. First run pending. |
| Astro | Static website framework for the overview and Project Focus pages, shared layout, and local development/build commands. |
| Bootstrap | Active: CSS bundled locally through the shared layout; custom stylesheet ready for the team's Figma designs. JavaScript components are not loaded yet. |
| Node.js and npm | Active: run Astro locally and install the dependencies recorded in the npm lockfile. Use Node.js 24.x. |
| tl;dv | Meeting notes. |
| OpenAI Codex | Pair programming for site implementation, repository setup, documentation, technical research, debugging, and checks. |
| Firecrawl | Web search and reference checks for technical research. |
| [Repository skills](agent-skills.md) | Active: local `proofread`, `check-links`, and `review-changes` workflows, loaded as needed by an existing approved assistant or delegated worker. Reports findings; changes require task authorization. No added runtime, dependency, or service. |
| Claude Code (planned) | Intended for the same student-directed technical and documentation support, subject to unanimous team agreement before adoption. |

Students make creative, design, and technology decisions and review AI-assisted work. All AI tools must follow the [AI Workflow Guidelines](ai-guidelines.md). This inventory records usage, not approval of additional tools. Keep it current and make work available for instructor assessment.

## AI Attribution

Built with OpenAI Codex as a pair programmer for site setup, implementation, documentation, and technical checks. Nolan Figueroa directs the website architecture and implementation; the team owns the project content and design decisions. The tools above support development and collaboration.
