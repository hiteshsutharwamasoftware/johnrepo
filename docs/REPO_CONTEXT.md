# Repo Context

This file helps Verity/Codex understand how to work in this repository.

## What Verity detected
- Detected at: 2026-04-23 07:40:17 UTC
- Repo: hiteshsutharwamasoftware/johnrepo
- Default branch: verity/bootstrap-v2-e8dee39b957d

## Suggested commands (review before enabling automation)
These are written into `.verity/config.yml` (in a PR) if empty.

### Setup
- `npm ci`

### Tests
_(none detected)_

### Build
- `npm run build`

### Deploy
_(none detected)_

## Notes for humans
- If you change commands here, also update `.verity/config.yml`.
- No secrets should be committed. Use GitHub Secrets.

## Auto Documentation Snapshot
<!-- verity:auto-doc:start -->
- Commit: `cc784c548584b31c3c065ad6a72b20211679342b`
- Commit date: `2026-04-23T07:39:47Z`
- Repository: `hiteshsutharwamasoftware/johnrepo`
- Default branch: `main`

### Configured Commands
Setup:
- `npm ci`
Tests:
_(none configured)_
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
- `verity-post-merge-validation.yml`
- `verity-pr-auto-fix.yml`
- `verity-repo-context-builder.yml`

### Enabled Policy Flags
- `- `openai_guardrail.enabled`: `True``
- `- `pr_review.enabled`: `True``
<!-- verity:auto-doc:end -->
