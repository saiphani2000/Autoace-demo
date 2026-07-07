"""Vercel serverless entrypoint for the FastAPI backend."""
import sys
from pathlib import Path

# Allow imports from the repo root (backend package).
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend.server import app  # noqa: E402  (FastAPI ASGI app)
