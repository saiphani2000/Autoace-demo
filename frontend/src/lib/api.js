/**
 * API base URL for backend requests.
 * On Vercel (same-origin deploy), leave REACT_APP_BACKEND_URL unset — requests go to /api.
 * For local dev or split hosting, set REACT_APP_BACKEND_URL (e.g. http://localhost:8000).
 */
const backendUrl = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "");

export const API_BASE = backendUrl ? `${backendUrl}/api` : "/api";
