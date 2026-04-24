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

As a homepage visitor, I want a textbox on the homepage - As a general user or visitor accessing the homepage, I want to see and use a textbox prominently displayed on the homepage. This allows users to input information (such as search queries, feedback, or other data as required by the application) immediately upon landing on the site. Providing a textbox on the homepage improves user engagement, streamlines user workflows, and supports key business objectives such as increasing user interacti
