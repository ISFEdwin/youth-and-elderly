# Web Development Plan — Phase 1 Implementation Baseline

## Scope and Product Definition

### Phase 1 In-Scope (Web)
- Marketing website
- Web app onboarding
- User profiles
- Matching discovery
- Session booking
- V-Credit wallet
- Messaging
- Guardian Mode dashboards

### Deferred via Feature Flags
- Story-Nodes editing (Phase 3)
- Advanced AI Matchmaker features (Phase 2)

### Primary Launch Audiences
- Youth users
- Senior users
- Guardians
- Partner admins (university/corporate)

## Information Architecture

### Public Pages
- Home
- How It Works
- Safety & Trust
- For Seniors
- For Youth
- For Families
- For Universities
- For Companies
- Pricing
- FAQ
- Contact

### Authenticated Areas by Role
- Senior: appointments, lessons hosted, wallet, profile, guardian settings
- Youth: sessions/gigs, wallet, rewards conversion, profile, impact badge
- Guardian: activity logs, safety alerts
- Partner Admin: cohort management, usage reports, moderation queue

### Navigation and Language Model
- Role-based navigation trees for senior/youth/guardian/partner admin
- Classic terminology: Appointments, Lessons, My Profile
- Pulse terminology: Sessions, Gigs, My Vantage

## UX/UI System for Web

### Dual Theme System
- Classic: high contrast, larger typography, explicit labels, reduced motion by default
- Pulse: denser layout, faster interactions, dark-first visual defaults

### Accessibility Acceptance Gates
- Keyboard navigability for all controls
- Screen-reader labels for all interactive UI
- Contrast compliance (AA minimum, AAA target for Classic)
- Scalable text without layout breakage
- Reduced motion support bound to user/system preference

### Priority Flows
- Sign-up and verification
- Session booking
- Session completion
- Credit transfer
- Reporting and blocking
- Guardian setup

## Technical Foundation and Repository Setup

### Monorepo Baseline
- Root workspace with `apps/*` and `packages/*`
- `apps/web` for web app structure
- `packages/design-tokens` for Classic/Pulse shared theme tokens

### Backend Integration Surface (Planned)
- GraphQL services for auth, sessions, credits, guardian, rewards

### Environment Conventions
- local / staging / prod profiles
- Externalized secret management for staging/prod
- Feature-flag source split (static local, remote staging/prod)
- Analytics enabled in staging/prod only

## Core Module Build Order
- A: Authentication + role onboarding + ID verification state handling
- B: Profile + skills catalog + availability calendar
- C: Matching discovery + compatibility explanation UI
- D: Session booking + lifecycle states
- E: Wallet ledger + transaction history + conversion cap UX
- F: Messaging + safety controls
- G: Guardian Mode dashboard + privacy boundaries
- H: Partner/admin portal basics

## Data, Safety, and Compliance Readiness
- Explicit consent checkpoints for recording/data sharing/guardian linking
- Least-privilege access by role across API and UI
- Moderation workflow for profiles, reports, suspicious activity
- Privacy/legal operations for data deletion and export

## Monetization Implementation

### Phase 1
- University/corporate lead capture and sales funnel pages
- B2B admin onboarding and seat management
- Youth rewards conversion UI with monthly cap

### Phase 2
- Self-serve institutional checkout and billing portal

### Phase 3
- Premium Legacy subscription management for families

## QA, Validation, and Release Gates

### Test Layers
- Unit tests for critical UI and business rules
- Integration tests for booking, credits, guardian privacy rules
- E2E tests for top user journeys by role

### CI Quality Gates
- Accessibility audits
- Performance budgets

### MVP Release Criteria
- Core flow success-rate targets achieved
- No critical security/privacy defects
- Accessibility and performance thresholds met

## Delivery Roadmap
- Sprint 0: Requirements freeze, IA, design system, technical setup
- Sprints 1–2: Auth/onboarding, profiles, foundational nav/themes
- Sprints 3–4: Matching, booking, session lifecycle, messaging/safety
- Sprints 5–6: Wallet/ledger, rewards conversion, guardian dashboard
- Sprint 7: Partner admin MVP + analytics instrumentation
- Sprint 8: Stabilization, security/accessibility hardening, pilot prep

## Pilot Launch and Iteration
- Soft launch in one college-town ecosystem with one senior community + one university
- Track weekly: adoption, session completion, credit velocity, trust/safety signals
- Prioritize backlog by retention blockers first, then monetization expansion
