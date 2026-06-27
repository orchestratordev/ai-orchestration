ADR-10 — Technology Stack Decision

- Status: Accepted
- Date: 27 June 2026 (WITA)
- Project: AIOPS-OS / DIC / DMIP
- Authors: Chief System Architect (GPT-5.5), DOKB Engineering Team

---

1. Context

AIOPS-OS, DIC (DMIP Intelligence Core), dan DMIP membutuhkan fondasi teknologi yang:

- Open Source First
- Self-Hosted First
- Modular Architecture
- AI-Native Design
- Docker First
- API First
- Low Operational Cost
- Small Team Friendly
- Scalable for Future Growth

Technology stack harus mampu mendukung:

- Multi-Agent Runtime
- Multi-LLM Provider
- Research Engine
- Knowledge Management
- Mobility Intelligence Platform
- Future Enterprise Features

---

2. Decision

2.1 Frontend Stack

Framework: Next.js
Language: TypeScript
UI Library: React
Styling: Tailwind CSS
State Management: Zustand
Data Fetching: TanStack Query
Forms: React Hook Form
Charts: Recharts
Icons: Lucide

Rationale

- Mature ecosystem
- Type-safe
- Excellent developer experience
- Suitable for dashboard applications
- Strong community support

---

2.2 Backend API Stack

Framework: NestJS
Language: TypeScript
Protocols:
  - REST API
  - WebSocket
  - Internal API

Rationale

- Enterprise-grade framework
- Modular architecture
- Dependency Injection built-in
- Excellent for microservices

---

2.3 AI Runtime Stack

Language: Python
Version: 3.11+
Framework: FastAPI
ASGI Server: Uvicorn

AI Libraries

LangChain
LlamaIndex
Transformers
SentenceTransformers
Pandas
Numpy
Scikit-Learn

Rationale

The AI ecosystem is predominantly Python-based.

---

2.4 LLM Runtime

Primary

Ollama

Secondary

OpenAI
Anthropic
Gemini
Zhipu AI

Future

vLLM
SGLang

---

2.5 Database Stack

Primary Database

PostgreSQL 17+

Vector Database

pgvector

Rationale

Avoid maintaining separate vector database infrastructure.

---

2.6 Cache Layer

Redis

Used for:

- Session Cache
- Rate Limiting
- Task Queue
- Temporary Memory
- Pub/Sub

---

2.7 Object Storage

Initial Phase

Filesystem Storage

Future Phase

MinIO

---

2.8 Authentication

JWT
Refresh Token
RBAC
API Key

Future

OIDC
SSO

---

2.9 Messaging Layer

Initial Phase

Redis Streams

Future Phase

NATS

---

2.10 Search Engine

Initial Phase

PostgreSQL Full Text Search

Future Phase

OpenSearch

---

2.11 Container Platform

Docker
Docker Compose

Future

Kubernetes

---

2.12 CI/CD

GitHub Actions

Pipeline:

Lint
Test
Build
Deploy

---

2.13 Monitoring

Prometheus
Grafana
Loki

---

2.14 Logging

Node.js

Pino
Structured JSON Logging

Python

structlog

---

2.15 Documentation

Swagger
OpenAPI
ADR
Markdown

---

2.16 Development Environment

VSCode
Docker Desktop
Git
GitHub

---

2.17 Repository Strategy

Monorepo

Structure:

apps/
packages/
services/
docs/
infra/

---

3. Final Architecture Stack

Frontend
└── Next.js + TypeScript

Backend
└── NestJS + TypeScript

AI Runtime
└── Python + FastAPI

Database
└── PostgreSQL + pgvector

Cache
└── Redis

Messaging
└── Redis Streams
└── NATS (Future)

Storage
└── Filesystem
└── MinIO (Future)

LLM Providers
└── Ollama
└── OpenAI
└── Anthropic
└── Gemini
└── Zhipu AI

Deployment
└── Docker
└── Docker Compose
└── Kubernetes (Future)

---

4. Consequences

Positive

- Open-source friendly.
- AI ecosystem compatibility.
- Small team maintainability.
- Low operational cost.
- Easy local development.
- Future enterprise scalability.

Negative

- Multi-language stack (TypeScript + Python).
- Additional operational complexity.
- Requires Docker knowledge.
- Future Kubernetes adoption increases complexity.

---

5. Decision

ADR-10 — Technology Stack Decision

Status: ACCEPTED

This stack becomes the official technology foundation for:

- AIOPS-OS
- DIC (DMIP Intelligence Core)
- DMIP (DOKB Mobility Intelligence Platform)

---

Version: 1.0
Last Updated: 27 June 2026 (WITA)
