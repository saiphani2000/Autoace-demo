"""Backend API tests for AutoAce landing page - Leads endpoints."""
import os
import uuid
import pytest
import requests
from datetime import datetime

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://dealer-automation-2.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health / root ---
class TestHealth:
    def test_api_root(self, api_client):
        r = api_client.get(f"{API}/", timeout=15)
        assert r.status_code == 200
        assert r.json().get("message") == "Hello World"


# --- Leads CRUD ---
class TestLeads:
    def test_create_lead_success(self, api_client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "dealership": f"TEST_Dealer_{unique}",
            "email": f"test_{unique}@example.com",
            "phone": "+1-555-0100",
        }
        r = api_client.post(f"{API}/leads", json=payload, timeout=15)
        assert r.status_code == 200, f"status={r.status_code} body={r.text}"
        data = r.json()
        # Structure checks
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        # Value checks
        assert data["name"] == payload["name"]
        assert data["dealership"] == payload["dealership"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        # created_at parseable
        try:
            datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))
        except Exception as e:
            pytest.fail(f"created_at not ISO parseable: {data['created_at']} err={e}")
        # No mongo _id leaked
        assert "_id" not in data

    def test_create_lead_and_verify_persistence_via_get(self, api_client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Persist_{unique}",
            "dealership": f"TEST_PersistDealer_{unique}",
            "email": f"persist_{unique}@example.com",
            "phone": "+1-555-0199",
        }
        cr = api_client.post(f"{API}/leads", json=payload, timeout=15)
        assert cr.status_code == 200
        created_id = cr.json()["id"]

        gr = api_client.get(f"{API}/leads", timeout=15)
        assert gr.status_code == 200
        leads = gr.json()
        assert isinstance(leads, list)
        # No _id leak on any item
        for lead in leads:
            assert "_id" not in lead
        # Our lead is present
        matches = [l for l in leads if l.get("id") == created_id]
        assert len(matches) == 1, f"Created lead {created_id} not found in GET /api/leads"
        m = matches[0]
        assert m["email"] == payload["email"]
        assert m["name"] == payload["name"]
        assert m["dealership"] == payload["dealership"]
        assert m["phone"] == payload["phone"]

    def test_create_lead_missing_fields_returns_422(self, api_client):
        # missing dealership/email/phone
        r = api_client.post(f"{API}/leads", json={"name": "OnlyName"}, timeout=15)
        assert r.status_code == 422

    def test_create_lead_empty_body_returns_422(self, api_client):
        r = api_client.post(f"{API}/leads", json={}, timeout=15)
        assert r.status_code == 422

    def test_get_leads_returns_list(self, api_client):
        r = api_client.get(f"{API}/leads", timeout=15)
        assert r.status_code == 200
        assert isinstance(r.json(), list)
