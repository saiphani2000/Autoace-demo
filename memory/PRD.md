# AutoAce — Product Requirements Document

## Original Problem Statement
Build a landing page for AutoAce, a specialized AI platform managing inbound and outbound communications for car dealerships. AI voice agents integrate directly with dealer management systems (DMS) to automate appointment scheduling, service reminders, and customer follow-ups 24/7.

## Real Company Content (provided by user, June 2026)
- Hero: "AI-Powered Voice Agents for Your Dealership" / CTA "Get Started Today" / trust: Y Combinator (F25) + MIT
- Problem: service departments miss 30–40% of inbound calls → lost appointments & gross profit; AutoAce = AI teammate that reads/writes to dealership systems
- Inbound: 20+ languages, real-time booking on live technician availability, seamless handoff with context, <1s pickup, 100% answer rate
- Outbound: automated reminders/confirmations, revenue recovery (declined services, recalls), automated CSI surveys
- Integrations: CDK Global, Reynolds & Reynolds, Tekion, Dealertrack, XTime, myKaarma, Affinitiv; writes appointments + RO pre-builds back to schedulers
- Metrics: 98% call accuracy, 30% increase in appointments, 94% CSAT, 24/7 always-on
- Security: SOC 2 Type II audit in progress; data-protection controls built in
- About: founded 2025, Cambridge MA, by MIT engineer Bradley Bunch (sole founder — Michael Wong removed per user request, June 2026)
- Contact: bbunch@autoace.ai; Careers: Boston-based engineering, voice AI + LLMs
- Footer: © 2026 AutoAce AI; links Login, Contact, LinkedIn
- Logo: Spade icon

## User Choices
- Design: Premium automotive — deep navy/graphite, refined, luxury feel + glassmorphism dashboards ("Live Incoming Calls", "Outbound Queue") in hero
- Language: English
- Lead capture stored in MongoDB (no external email service yet)

## Architecture
- Frontend: React (CRA + craco), Tailwind, shadcn/ui (sonner toast), lucide-react icons (Spade logo)
- Backend: FastAPI (`/app/backend/server.py`), all routes prefixed `/api`
- DB: MongoDB (`leads` collection)
- Fonts: Cabinet Grotesk (headings, Fontshare) + Manrope (body)
- Design guidelines: `/app/design_guidelines.json` (dark luxury, #060A14 / #0D1322)

## Data Model
- Lead: { id (uuid), name, dealership, email (EmailStr), phone, created_at (ISO) }

## API Endpoints
- POST /api/leads — create lead, returns 201, 422 on invalid email
- GET /api/leads — list leads

## Frontend Structure
- `/app/frontend/src/pages/Landing.jsx` — composition: Navbar, Hero (with live-call dashboard mocks), TrustBar, ProblemSection, Features (inbound/outbound), IntegrationsSection, MetricsSection, SecuritySection, AboutSection (single founder card: Bradley Bunch), CareersSection, LeadForm, Footer
- `/app/frontend/src/pages/AdminLeads.jsx` — /admin leads table (linked from footer "Login")

## Implemented
- [x] 2026-06: MVP landing page + leads API (iteration_1.json, 100% pass)
- [x] 2026-06: EmailStr + 201 on POST /api/leads; /admin leads view (curl + screenshot verified)
- [x] 2026-06: Full content overhaul to real company info — 9 corporate sections, spade logo, hero glassmorphic Live Incoming Calls / Outbound Queue mocks, founders section, careers/contact, SOC 2 band, integrations grid, new footer (iteration_2.json, 100% pass)
- [x] 2026-06: scroll-margin-top fix so anchor headings clear the fixed navbar

## Backlog
- P1: Email notification to sales team on new lead (Resend)
- P1: Auth protection for /admin (footer "Login" currently opens it publicly)
- P2: Rate limiting / spam protection on public lead endpoint
- P2: SEO meta tags / OpenGraph
- P2: Real founder photos + real LinkedIn URL (current LinkedIn link is a placeholder: linkedin.com/company/autoace)

## Notes
- Hero dashboard panels are static marketing mocks by design
- Founder card uses initials avatar intentionally (no fake stock portrait)

## Test Artifacts
- `/app/backend/tests/test_leads_api.py` (regression suite)
- `/app/test_reports/iteration_1.json`, `/app/test_reports/iteration_2.json`

## Credentials
- None (public site, no auth)
ession suite)
- `/app/test_reports/iteration_1.json`, `/app/test_reports/iteration_2.json`

## Credentials
- None (public site, no auth)
