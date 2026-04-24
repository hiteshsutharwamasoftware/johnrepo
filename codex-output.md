Done. Tests added, docs synced, and all checks are green.

What I changed
- Added comprehensive Node test for the homepage textbox: tests/homepage.test.js
  - Verifies an <input type="text"> exists.
  - Confirms the textbox has id=homepage-input and placeholder "Type here...".
  - Ensures value is bound to state and onChange updates it.
  - Checks submit handler prevents default, trims input, and sets submitted only when non-empty.
  - Asserts the polite live region announces the submitted value.

- Updated npm scripts to run built-in Node tests:
  - package.json: scripts.test now runs node --test tests
  - Added scripts.test:ci for CI-friendly reporter

Commands run
- Setup: npm ci
- Docs sync (auto_mode=true): python scripts/sync_repo_docs.py
- Tests: npm test
- Build: npm run build

Status
- Tests: passing
- Build: successful

If you want, I can:
- Wire up a minimal Playwright/Vitest E2E later, but I avoided new deps per AGENTS.md.
- Extend tests to assert label/aria relationships more deeply.