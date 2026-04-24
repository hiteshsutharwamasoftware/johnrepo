# Use Cases

This document outlines how this repository’s demo frontend is expected to behave and be verified. It guides lightweight QA, future contributors, and Codex/Verity automation.

## System Summary
- Minimal React + TypeScript + Vite app used for Verity/Codex demos.
- Provides a mock AuthContext with a demo user and optional tenant.
- Bridges authenticated user context into a host page widget via window.__gfpWidget using the useWidgetUser hook.
- Renders a simple starter UI with a counter, documentation links, and social links.
- Uses CSS variables and the prefers-color-scheme media query for light/dark themes.

Key characteristics: zero backend, no secrets, production-like structure for CI/docs workflows.

## Primary User Stories

### US-01: App bootstraps and renders
As a site visitor, I want the app to mount without errors so I can see the landing content.
- Acceptance Criteria
  - App renders into element id #root without runtime errors.
  - Hero image and framework logos are present.
  - The heading Get started is visible.
- Key Modules/Files
  - src/main.tsx:1
  - src/App.tsx:1
  - index.html:1

### US-02: Hot Module Reloading works during development
As a developer, I want HMR so code edits appear instantly without full reloads.
- Acceptance Criteria
  - Running the Vite dev server shows the app locally.
  - Editing src/App.tsx updates the browser without page reload.
  - No HMR error overlays after a normal edit/save cycle.
- Key Modules/Files
  - src/App.tsx:1
  - vite.config.ts:1
  - package.json:1

### US-03: Counter interaction
As a site visitor, I want to click a button to increment a counter so I can confirm interactivity works.
- Acceptance Criteria
  - Button label starts with Count is 0 on first render.
  - Clicking the button increases the numeric value by 1 per click.
  - State persists while staying on the page until refresh.
- Key Modules/Files
  - src/App.tsx:1

### US-04: Mock authentication context available
As a developer, I want a consistent mock user so I can simulate authenticated flows locally.
- Acceptance Criteria
  - useAuth() returns a non-null user by default id, name, email, role.
  - The mock user contains a tenant object with id and name.
  - No network calls are required to resolve user.
- Key Modules/Files
  - src/contexts/AuthContext.tsx:1
  - src/main.tsx:1

### US-05: Widget receives user on mount
As a host integrator, I want the widget to receive the current user so cross-surface personalization is possible.
- Acceptance Criteria
  - If window.__gfpWidget.setUser exists, it is called once when a non-null user is present.
  - Payload includes id, name, email, role, and tenant when available.
  - No errors are thrown if the widget API is missing.
- Key Modules/Files
  - src/hooks/useWidget.ts:1
  - src/App.tsx:1
  - src/contexts/AuthContext.tsx:1

### US-06: Widget clears user on sign-out or null user
As a host integrator, I want the widget user context cleared when the app has no user.
- Acceptance Criteria
  - If window.__gfpWidget.clearUser exists, it is called when the user becomes null.
  - No calls to setUser occur after clearing unless a new user appears.
  - App continues to render without errors.
- Key Modules/Files
  - src/hooks/useWidget.ts:1

### US-07: Tenant metadata is propagated
As a multi-tenant admin, I want tenant metadata included so downstream systems can scope access.
- Acceptance Criteria
  - When user.tenant is present, the widget setUser payload includes a tenant object with id and name.
  - When user.tenant is absent, tenant is omitted not an empty object.
- Key Modules/Files
  - src/contexts/AuthContext.tsx:1
  - src/hooks/useWidget.ts:1

### US-08: Accessibility basics
As an accessibility reviewer, I want core elements to expose appropriate semantics.
- Acceptance Criteria
  - Decorative SVGs or graphics use role=presentation and-or aria-hidden=true where appropriate.
  - Primary images have alt text or empty alt when decorative.
  - Interactive controls the counter button are keyboard operable and focus-visible.
- Key Modules/Files
  - src/App.tsx:1
  - public/icons.svg:1 referenced

### US-09: External links and navigation
As a visitor, I want documentation and community links to open in a new tab.
- Acceptance Criteria
  - Links to Vite, React, GitHub, Discord, X, and Bluesky include target=_blank.
  - No client-side routing errors occur when clicking links.
- Key Modules/Files
  - src/App.tsx:1

### US-10: Responsive layout
As a mobile visitor, I want legible text and layout on small screens.
- Acceptance Criteria
  - Base font size reduces at viewport widths <= 1024px.
  - Headings scale down appropriately; layout remains readable without horizontal scrolling.
- Key Modules/Files
  - src/index.css:1
  - src/App.css:1

### US-11: Dark mode support
As a visitor using dark mode, I want readable contrast and adapted icon colors.
- Acceptance Criteria
  - When prefers-color-scheme: dark is active, CSS variables switch to dark values.
  - Social button icons apply the dark-mode filter rule.
- Key Modules/Files
  - src/index.css:1

### US-12: Production build succeeds
As a maintainer, I want a reproducible production build for deployment demos.
- Acceptance Criteria
  - npm run build completes without errors.
  - A dist/ folder is produced with static assets.
  - TypeScript project references compile without type errors.
- Key Modules/Files
  - package.json:1
  - tsconfig*.json:1
  - vite.config.ts:1

## Notes
- No secrets or API keys are used or expected.
- Tests are not currently defined; acceptance criteria can be verified manually or with future unit tests for example, mocking window.__gfpWidget.
- If you change any component or API shape, update this file and ensure build checks continue to pass.
