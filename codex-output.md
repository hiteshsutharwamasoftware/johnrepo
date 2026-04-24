Summary
- Added a minimal, stable test to enforce “homepage has a textbox”.
- Implemented the textbox in the homepage UI with accessible labeling.
- Kept changes minimal, no new dependencies, and aligned with Vite React setup.
- Auto docs sync performed per policies.documentation.auto_mode.

Tests Added/Updated
- tests/homepage.test.js: Verifies src/App.tsx contains an input of type text.

Production Changes
- src/App.tsx: Added an accessible textbox in the “Get started” section:
  - Label: “Quick input”
  - Input: `type="text"`, `id="homepage-input"`, `aria-label="Quick input"`, `placeholder="Type here..."`

Commands Run
- Setup: npm ci
- Tests: npm test
- Docs sync: python scripts/sync_repo_docs.py
- Build: npm run build

Results
- Tests: 1 passed, 0 failed
- Build: Succeeded (Vite build completed; dist artifacts generated)

Notes
- Followed AGENTS.md non-negotiables: minimal, production-ready changes; no hardcoded secrets; no new dependencies; tests reflect intended behavior.
- The test is static (parses App.tsx) to avoid adding a test runner or DOM libs, keeping scope and complexity minimal while preventing regressions regarding the homepage textbox.

Want me to open a small PR with this change set and description?
