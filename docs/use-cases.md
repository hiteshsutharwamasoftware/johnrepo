# Verity Demo Frontend — Use Cases

## System Summary
A minimal React + Vite demo app used to validate Verity/Codex automation flows and a simple widget-user wiring pattern. It renders a starter UI and propagates the current authenticated user from `AuthContext` into an embedded third‑party widget via `window.__gfpWidget` (if present), keeping user state in sync.

## Primary User Stories

1) As an authenticated user, I want my identity shared with the embedded widget so it can personalize content.
- Acceptance criteria:
  - When `AuthContext.user` is non‑null, `window.__gfpWidget.setUser(...)` is called with `id`, `name`, `email`, `role`, and optional `tenant`.
  - Calls happen on initial render and whenever the user object changes.
  - No uncaught errors if the widget is unavailable.
- Key modules/files:
  - `src/contexts/AuthContext.tsx`, `src/hooks/useWidget.ts`, `src/App.tsx`

2) As a signed‑out user, I want the widget cleared so it doesn’t retain my identity.
- Acceptance criteria:
  - When `AuthContext.user` becomes `null`, `window.__gfpWidget.clearUser()` is called if the API exists.
  - No residual PII remains in component state passed to the widget.
- Key modules/files:
  - `src/contexts/AuthContext.tsx`, `src/hooks/useWidget.ts`

3) As a tenant admin, I want tenant context sent to the widget for multi‑tenant behavior.
- Acceptance criteria:
  - When present, `tenant.id` and `tenant.name` are forwarded in `setUser` payload.
  - Omitting tenant produces no runtime errors.
- Key modules/files:
  - `src/contexts/AuthContext.tsx`, `src/hooks/useWidget.ts`

4) As a developer, I want the app to run locally with hot reload.
- Acceptance criteria:
  - `npm run dev` starts Vite and serves the app without TypeScript errors.
  - Hot Module Replacement works for edits in `src/`.
- Key modules/files:
  - `package.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`

5) As a developer, I want a production build that compiles consistently.
- Acceptance criteria:
  - `npm run build` completes without errors and emits optimized assets.
  - TypeScript project references (`tsconfig.*`) resolve correctly.
- Key modules/files:
  - `package.json`, `tsconfig.*`, `vite.config.ts`

6) As a security reviewer, I want to ensure no direct OpenAI calls from the frontend.
- Acceptance criteria:
  - Running the repository guard script reports no forbidden usage.
  - No API keys or secrets are present in the repo.
- Key modules/files:
  - `scripts/check_no_direct_openai.py`, `.github/workflows/verity-guardrails.yml`

7) As a docs maintainer, I want auto‑refreshed repository context for fast onboarding.
- Acceptance criteria:
  - When `.verity/config.yml` sets `policies.documentation.auto_mode: true`, running `python scripts/sync_repo_docs.py` updates the marked blocks in `docs/REPO_CONTEXT.md` and `docs/AI_HANDOFF.md`.
  - Snapshots include commit SHA, dates, configured commands, and workflow inventory.
- Key modules/files:
  - `scripts/sync_repo_docs.py`, `docs/REPO_CONTEXT.md`, `docs/AI_HANDOFF.md`, `.verity/config.yml`

8) As a CI user, I want use cases documented for traceability.
- Acceptance criteria:
  - `docs/use-cases.md` lists a concise system summary, 5–20 primary user stories, acceptance criteria, and involved files.
  - File is Markdown‑lint friendly and contains no secrets.
- Key modules/files:
  - `docs/use-cases.md`, `.github/workflows/codex-usecase-generation.yml`

9) As an integrator, I want the widget API to be optional and non‑blocking.
- Acceptance criteria:
  - If `window.__gfpWidget` is undefined, the app renders normally and logs no errors.
  - Hook guards prevent calling into an undefined API.
- Key modules/files:
  - `src/hooks/useWidget.ts`, `src/App.tsx`

10) As a QA engineer, I want deterministic mock identity during manual testing.
- Acceptance criteria:
  - A stable mock user is provided by `AuthContext` in dev builds.
  - The mock contains realistic fields and a tenant for exercising flows.
- Key modules/files:
  - `src/contexts/AuthContext.tsx`

11) As a designer, I want visible, working hero and links to docs/communities.
- Acceptance criteria:
  - The hero renders React and Vite logos and a sample CTA.
  - External links open in a new tab and icons render from `public/icons.svg`.
- Key modules/files:
  - `src/App.tsx`, `public/icons.svg`, `src/assets/*`

12) As a maintainer, I want simple, safe defaults in repo config.
- Acceptance criteria:
  - `.verity/config.yml` defines `setup`, `test`, and `build` commands using npm scripts.
  - Changing commands updates generated docs upon next sync.
- Key modules/files:
  - `.verity/config.yml`, `scripts/sync_repo_docs.py`, `docs/REPO_CONTEXT.md`

## Notes and Constraints
- No secrets should be committed; environment variables or platform secret stores must be used for any credentials.
- The widget interface is assumed to provide `setUser` and `clearUser`. The app must guard for absence.
- Keep changes minimal and aligned with existing architecture and tooling.

