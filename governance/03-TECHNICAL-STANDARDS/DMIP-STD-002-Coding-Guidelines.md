DMIP-STD-002 – Coding Guidelines

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 28 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar penulisan kode untuk seluruh repository DMIP agar:

- mudah dibaca;
- mudah dipelihara;
- mudah diuji;
- konsisten antar developer dan AI agent.

---

2. Core Principles

Seluruh kode wajib mengikuti prinsip:

- KISS (Keep It Simple)
- DRY (Don't Repeat Yourself)
- SOLID
- YAGNI (You Aren't Gonna Need It)
- Clean Code
- Explicit is Better Than Implicit

---

3. Naming Convention

Variables

Gunakan:

user_name
driver_count
session_id

Hindari:

a
b
tmp
x1

---

Constants

Gunakan:

MAX_RETRY
DEFAULT_TIMEOUT
API_VERSION

---

Functions

Gunakan:

get_user()
load_session()
calculate_distance()

Hindari:

do_it()
run()
process()

---

Classes

Gunakan:

SessionManager
AgentRegistry
ModelRouter

---

Files

Gunakan:

session_manager.py
agent_registry.py
model_router.py

Hindari:

SessionManager.py
ModelRouter.py

---

4. Function Rules

Single Responsibility

Satu fungsi:

1 fungsi = 1 tujuan

---

Maximum Length

Ideal:

< 50 lines

Maksimum:

100 lines

---

Parameters

Ideal:

≤ 5 parameters

Jika lebih:

gunakan:

@dataclass
class Config:

atau:

class Settings:

---

5. Class Rules

Ideal:

< 300 lines

Jika lebih:

pecah menjadi beberapa class.

---

6. File Rules

Ideal:

< 500 lines

Maksimum:

800 lines

---

7. Python Standards

Python Version

Python 3.12+

---

Type Hint

Wajib.

Contoh:

def get_user(user_id: str) -> User:

---

Dataclass

Gunakan untuk:

- DTO
- Config
- Message
- Schema

---

Enum

Gunakan untuk:

- Status
- Types
- Modes

---

8. Imports

Urutan:

# standard library
import os
import json

# third party
from fastapi import FastAPI

# local
from core.session import Session

---

9. Error Handling

Gunakan:

try:
except:
finally:

Jangan:

except:
    pass

---

Seluruh exception:

- harus dicatat;
- harus memiliki log.

---

10. Logging

Gunakan:

logger.info()
logger.warning()
logger.error()

Hindari:

print()

---

11. Comments

Komentar menjelaskan:

WHY

bukan:

WHAT

---

Buruk:

# increment x
x += 1

Baik:

# retry counter untuk API timeout
retry_count += 1

---

12. Docstrings

Public function wajib:

def load_session():
    """
    Load session from storage.

    Returns:
        Session
    """

---

13. Magic Numbers

Jangan:

timeout = 17

Gunakan:

DEFAULT_TIMEOUT = 17

---

14. Configuration

Tidak boleh:

API_KEY = "123"

Gunakan:

os.getenv()

atau:

Settings()

---

15. Dependency Injection

Prefer:

def __init__(
    self,
    repository: Repository
):

Hindari:

repository = Repository()

di dalam class.

---

16. Async Rules

Gunakan:

async
await

untuk:

- API
- LLM calls
- Database
- External Services

---

17. Security Rules

Dilarang:

- hardcoded secret;
- hardcoded token;
- hardcoded password.

---

18. Testing Rules

Setiap function penting wajib memiliki:

unit test

---

19. AI Generated Code

Kode dari:

- GPT
- Claude
- Gemini
- Cursor
- Windsurf
- AI Agent

WAJIB:

- direview;
- ditest;
- direfactor bila perlu.

---

20. Code Review Checklist

Sebelum merge:

- readable
- typed
- tested
- logged
- documented
- secure
- follows standards

---

21. Formatting

Gunakan:

black
ruff
isort

---

22. Commit Rules

Gunakan Conventional Commits:

feat:
fix:
refactor:
docs:
test:
chore:
ci:

Contoh:

feat(orchestrator): add model router
fix(agent): repair memory loading
docs(adr): update stack decision

---

23. Definition of Done

Sebuah task dianggap selesai apabila:

✅ code berjalan

✅ unit test lulus

✅ documentation selesai

✅ review selesai

✅ sesuai standar ini

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
