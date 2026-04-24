Here’s what I did and what changed.

- Updated docs/use-cases.md with:
  - Short system summary
  - 12 primary user stories
  - Acceptance criteria for each story
  - Key modules/files for each story where obvious

- Auto-doc refresh
  - policies.documentation.auto_mode is enabled in .verity/config.yml, so I ran python scripts/sync_repo_docs.py
  - Updated files: docs/REPO_CONTEXT.md, docs/AI_HANDOFF.md

- Repo checks (per AGENTS.md)
  - Detected commands in .verity/config.yml:
    - setup: npm ci
    - test: npm test
    - build: npm run build
  - Attempted setup+tests+build. In this sandbox, npm errored and the build surfaced missing type definitions for vite/client and node. I did not modify dependencies per the “no new deps unless necessary” rule. The checks are defined correctly; local environment may need a clean npm install and network access.

Files touched
- docs/use-cases.md:1

Next steps (optional)
- Want me to open a follow-up patch to add @types/node and vite’s client types or adjust tsconfig to avoid the missing types during build? Or keep as-is since this repo is a demo and the commands are already declared.