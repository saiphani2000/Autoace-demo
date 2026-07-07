# AutoAce — AI Voice Agents for Car Dealerships

Landing page + lead capture API. React frontend (CRA) and FastAPI backend, deployable together on Vercel.

## Project structure

```
├── frontend/          React app (CRA + craco, Tailwind, shadcn/ui)
├── backend/           FastAPI API (MongoDB via Motor)
├── api/index.py       Vercel serverless entrypoint for the backend
├── vercel.json        Vercel deployment config
└── requirements.txt   Python deps for Vercel serverless functions
```

## Local development

### Prerequisites

- Node.js 20.x
- Python 3.10+
- MongoDB Atlas cluster (or local MongoDB)

### Backend

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp ../.env.example .env   # edit with your MONGO_URL
uvicorn server:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install --legacy-peer-deps
echo "REACT_APP_BACKEND_URL=http://localhost:8000" > .env
npm start
```

Open [http://localhost:3000](http://localhost:3000). Admin leads view: [http://localhost:3000/admin](http://localhost:3000/admin).

## Deploy to Vercel

### 1. Push to GitHub

Ensure the repo is on GitHub (Vercel deploys from Git).

### 2. Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. **Do not** set a Root Directory — leave it as the repo root. `vercel.json` handles the frontend build path.
3. Framework Preset: **Other** (auto-detected from `vercel.json`).

### 3. Environment variables

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGO_URL` | Yes | MongoDB Atlas connection string |
| `DB_NAME` | No | Database name (default: `autoace`) |
| `CORS_ORIGINS` | No | Comma-separated origins (default: `*`) |

**Do not set `REACT_APP_BACKEND_URL` on Vercel.** The frontend calls `/api` on the same domain automatically.

For MongoDB Atlas, allow network access from anywhere (`0.0.0.0/0`) or add [Vercel's IP ranges](https://vercel.com/docs/security/deployment-protection#ip-addresses) if you restrict by IP.

### 4. Deploy

Click Deploy. Vercel will:

- Install frontend deps and run `npm run build` in `frontend/`
- Serve the static React app from `frontend/build`
- Route `/api/*` to the Python FastAPI serverless function
- Rewrite client-side routes (`/admin`, etc.) to `index.html`

### 5. Verify

- Landing page loads at your `*.vercel.app` URL
- Submit the demo form — should succeed if `MONGO_URL` is set
- Visit `/admin` to see captured leads

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/` | Health check |
| POST | `/api/leads` | Create a lead (201) |
| GET | `/api/leads` | List leads |

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails with peer dependency errors | `.npmrc` with `legacy-peer-deps=true` is included in `frontend/` |
| Lead form returns error | Check `MONGO_URL` and `DB_NAME` in Vercel env vars; confirm Atlas network access |
| `/admin` shows blank page | SPA rewrite is in `vercel.json`; redeploy if you changed routing |
| API returns 503 | `MONGO_URL` is missing or invalid |

## Tech stack

- **Frontend:** React 19, react-router-dom 7, Tailwind CSS, shadcn/ui, axios
- **Backend:** FastAPI, Motor (MongoDB), Pydantic
- **Hosting:** Vercel (static frontend + Python serverless API)
