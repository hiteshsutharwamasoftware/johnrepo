Summary
- Added focused Node tests to validate the homepage textbox’s presence, accessibility, controlled input behavior, submit handling, and user feedback. Updated the test script to use Node’s built-in test runner. Synced docs per auto_mode and verified a clean production build.

Tests Added/Updated
- tests/homepage.behavior.test.js:1
  - Verifies input exists with type="text" and matches label/for and id.
  - Ensures controlled input via value and onChange.
  - Asserts form prevents default, trims input, and calls setSubmitted for non-empty values.
  - Confirms presence of role="status" and aria-live="polite" feedback region.
- tests/homepage.test.js:1 (existing retained)
  - Keeps prior smoke check for presence of <input type="text">.

Commands Run
- Setup: npm ci
- Tests: npm test
- Docs sync (auto_mode=true): python scripts/sync_repo_docs.py
- Build: npm run build

Result
- Tests: 2 passed, 0 failed.
- Build: Successful; artifacts emitted under dist/.
- Scope kept minimal and aligned with AGENTS.md. No production code changes or new dependencies.