Updated docs and ran required sync.

What I changed
- Edited docs/use-cases.md with:
  - Short system summary
  - 12 primary user stories
  - Clear acceptance criteria for each
  - Key modules/files where obvious
- Ran python scripts/sync_repo_docs.py because policies.documentation.auto_mode is true in .verity/config.yml, which refreshed:
  - docs/REPO_CONTEXT.md
  - docs/AI_HANDOFF.md

File references
- docs/use-cases.md
- .verity/config.yml
- scripts/sync_repo_docs.py
- docs/REPO_CONTEXT.md
- docs/AI_HANDOFF.md
- src/hooks/useWidget.ts
- src/contexts/AuthContext.tsx
- src/App.tsx

Checks run
- Attempted npm test per AGENTS.md; repository has no test script in package.json, so npm test fails. Consider adding a minimal test or updating .verity/config.yml if tests are intentionally absent.
- Build not executed because dependencies weren’t installed (npm ci requires network). In your environment, run:
  - npm ci
  - npm run build

Notes
- No secrets added; user identity is mocked in src/contexts/AuthContext.tsx.
- Guardrails script scripts/check_no_direct_openai.py executes without error locally. If you enable CI, ensure it runs in workflows.