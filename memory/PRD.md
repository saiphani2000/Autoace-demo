# AutoAce — Product Requirements Document

## Original Problem Statement
Build a landing page for AutoAce, a specialized AI platform managing inbound and outbound communications for car dealerships. AI voice agents integrate directly with dealer management systems (DMS) to automate appointment scheduling, service reminders, and customer follow-ups 24/7. Highlights: co-founder Bradley Bunch (MIT engineer), Y Combinator backed. Messaging covers honest ROI (AI captures missed leads; humans handle complex sales negotiations) and the hybrid model (AI = operational logistics, humans = trust-building).

## User Choices
- Design: Premium automotive — deep navy/graphite, refined, luxury feel (option b)
- Language: English
- No external integrations requested; lead capture stored in MongoDB

## Architecture
- Frontend: React (CRA + craco), Tailwind, shadcn/ui (sonner toast), lucide-react icons
- Backend: FastAPI (`/app/backend/server.py`), all routes prefixed `/api`
- DB: MongoDB (`leads` collection)
- Fonts: Cabinet Grotesk (headings, Fontshare) + Manrope (body, Google Fonts)
- Design guidelines: `/app/design_guidelines.json` (dark luxury, #060A14 / #0D1322)

## Data Model
- Lead: { id (uuid), name, dealership, email, phone, created_at (ISO) }

## API Endpoints
- POST /api/leads — create lead (demo request)
- GET /api/leads — list leads

## Frontend Structure
- `/app/frontend/src/pages/Landing.jsx` — page composition
- `/app/frontend/src/components/landing/` — Navbar, Hero, TrustBar, Features (bento), ROISection, HybridSection, FounderSection, LeadForm, Footer

## Implemented (June 2026)
- [x] Design guidelines via design agent (dark luxury archetype)
- [x] Backend leads API (POST/GET) with Mongo persistence
- [x] Full landing page: hero (cinematic bg + stats), trust marquee, asymmetric bento features (inbound/outbound agents, 24/7, DMS, scheduling, reminders), ROI stats grid, hybrid AI-vs-human comparison, founder section (Bradley Bunch, MIT + YC badges), glass lead form, footer
- [x] Smooth-scroll anchor nav, staggered fade-in animations, marquee, hover lifts
- [x] data-testid on all interactive/critical elements
- [x] E2E tested: iteration_1.json — 100% pass (backend 6/6, all frontend flows)

## Backlog (not requested, potential P1/P2)
- P1: Email notification to sales team on new lead (needs email integration e.g. Resend)
- P1: Explicit 201 status + EmailStr validation on POST /api/leads
- P2: Rate limiting / spam protection on public lead endpoint
- P2: Simple admin view to browse captured leads
- P2: SEO meta tags / OpenGraph for sharing

## Test Artifacts
- `/app/backend/tests/test_leads_api.py` (regression suite)
- `/app/test_reports/iteration_1.json`

## Credentials
- None (public landing page, no auth)
