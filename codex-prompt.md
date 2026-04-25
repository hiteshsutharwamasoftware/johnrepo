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

As a homepage user, I want to select a color using a color picker - Homepage visitors (end-users) want the ability to choose a color directly from the homepage using an intuitive color picker component. This feature allows users to personalize their experience, select theme colors, or preview color-dependent features. Providing a color picker enhances user engagement and supports customization, which can improve satisfaction and retention. The color picker should be easily accessible, visually i
