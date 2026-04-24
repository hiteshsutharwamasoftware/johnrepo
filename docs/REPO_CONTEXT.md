# Repo Context

This file helps Verity/Codex understand how to work in this repository.

## What Verity detected
- Detected at: 2026-04-23 12:15:41 UTC
- Repo: hiteshsutharwamasoftware/johnrepo
- Default branch: main

## Suggested commands (review before enabling automation)
These are written into `.verity/config.yml` (in a PR) if empty.

### Setup
- `npm ci`

### Tests
- `npm test`

### Build
- `npm run build`

### Deploy
_(none detected)_

## Notes for humans
- If you change commands here, also update `.verity/config.yml`.
- No secrets should be committed. Use GitHub Secrets.

## Auto Documentation Snapshot
<!-- verity:auto-doc:start -->
- Commit: `69c50a263d092f4f99c6f0f0265b2c1a2965397c`
- Commit date: `2026-04-24T11:55:31+05:30`
- Repository: `hiteshsutharwamasoftware/johnrepo`
- Default branch: `main`

### Configured Commands
Setup:
- `npm ci`
Tests:
- `npm test`
Build:
- `npm run build`
Deploy:
_(none configured)_

### Top-level Directories
- `docs`
- `public`
- `scripts`
- `src`

### Workflow Files
- `codex-deploy.yml`
- `codex-dev-cycle.yml`
- `codex-pr-review.yml`
- `codex-test-generation.yml`
- `codex-test-to-issue.yml`
- `codex-usecase-generation.yml`
- `verity-auto-docs.yml`
- `verity-command-router.yml`
- `verity-guardrails.yml`
- `verity-monitor.yml`
- `verity-repo-context-builder.yml`

### Enabled Policy Flags
- `- `openai_guardrail.enabled`: `True``
- `- `pr_review.enabled`: `True``
<!-- verity:auto-doc:end -->
