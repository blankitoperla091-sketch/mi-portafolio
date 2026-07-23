from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import json

app = FastAPI(title="Juan Carlos Alcántara Custodio - Portfolio API")
ROOT_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = ROOT_DIR / "frontend"
DATA_DIR = ROOT_DIR / "data" / "portfolio_data.json"

with open(DATA_DIR, "r", encoding="utf-8") as f:
    portfolio_data = json.load(f)

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/api/profile")
def get_profile():
    return JSONResponse(content=portfolio_data)

@app.post("/api/contact")
def send_contact(message: ContactMessage):
    return {
        "message": f"Gracias {message.name}, tu mensaje fue recibido. La disciplina y la constancia están funcionando.",
        "status": "success"
    }

@app.get("/health")
def health():
    return {"status": "ok", "service": "portfolio-api"}

app.mount("/", StaticFiles(directory=STATIC_DIR, html=True), name="static")
