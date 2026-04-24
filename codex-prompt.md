# Verity Codex Test Generation

Generate/update tests to reflect intended behavior and prevent regressions.

Rules:
- Follow `AGENTS.md`.
- Prefer adding tests over changing production code.
- Keep scope minimal.

Steps:
1) Read `.verity/config.yml` to learn test/build commands.
2) Add/update tests.
3) If `policies.documentation.auto_mode` is enabled, run `python scripts/sync_repo_docs.py`.
4) Run tests/build until green.
5) Final message: Summary, tests added, commands run.

## Scope

As a homepage visitor, I want to ensure the homepage textbox functions correctly - As a visitor to the homepage, I want to interact with the textbox to enter information so that I can use the site's primary features without issues. Ensuring the textbox works as intended is critical for user engagement and data collection, directly impacting user satisfaction and conversion rates. This story focuses on validating the textbox's presence, input acceptance, and expected behavior on the homepage.
