# Repo Context

This file helps Verity/Codex understand how to work in this repository.

## What Verity detected
- Detected at: 2026-04-24 09:54:58 UTC
- Repo: hiteshsutharwamasoftware/johnrepo
- Default branch: verity/bootstrap-v1-46d803306d57

## Suggested commands (review before enabling automation)
These are written into `.verity/config.yml` (in a PR) if empty.

### Setup
__SUGGESTED_SETUP__

### Tests
__SUGGESTED_TEST__

### Build
__SUGGESTED_BUILD__

### Deploy
__SUGGESTED_DEPLOY__

## Notes for humans
- If you change commands here, also update `.verity/config.yml`.
- No secrets should be committed. Use GitHub Secrets.

## Auto Documentation Snapshot
<!-- verity:auto-doc:start -->
- Commit: `fd4e2910d21e159f973c90645f257468a27e0f22`
- Commit date: `2026-04-25T06:40:46Z`
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
- `tests`

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
