DMIP-STD-006 – AI Agent Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar pengembangan seluruh AI Agent dalam DMIP agar:

- konsisten;
- aman;
- dapat diaudit;
- mudah dikembangkan;
- mendukung multi-provider dan multi-model.

---

2. AI Architecture Principles

DMIP menggunakan:

✅ Agentic Architecture

✅ Event Driven

✅ Modular

✅ Tool-Based

✅ Provider Agnostic

✅ Human Oversight

---

3. Agent Classification

DMIP membagi agent menjadi:

System Agents

Agent inti platform.

---

Domain Agents

Agent untuk kebutuhan bisnis.

---

Utility Agents

Agent pendukung.

---

4. System Agents

Minimal:

Chief System Architect
Lead Software Engineer
Research Agent
Planning Agent
Orchestrator Agent
Memory Agent
Security Agent

---

5. Domain Agents

Contoh:

DOKB AI Assistant
Regulation Agent
Advocacy Agent
Membership Agent
Finance Agent
Media Agent

---

6. Utility Agents

Contoh:

Summarizer Agent
Translator Agent
Code Reviewer Agent
Email Agent
Calendar Agent

---

7. Agent Identity

Setiap agent wajib memiliki:

agent_id
agent_name
version
description
owner
capabilities
permissions

---

8. Agent Manifest

Semua agent harus memiliki:

agent.yaml

Contoh:

id: research_agent
name: Research Agent
version: 1.0.0
capabilities:
  - web_search
  - summarization
permissions:
  - internet

---

9. Agent Directory Structure

agents/
├── orchestrator/
├── research/
├── planner/
├── security/
├── memory/
├── dokb_assistant/
└── utilities/

---

10. Agent Runtime

Default:

Python 3.12+

---

11. Agent Interface

Setiap agent wajib memiliki:

initialize()
execute()
shutdown()
health_check()

---

12. Agent Communication

Antar-agent menggunakan:

Message Passing

Dilarang:

Direct Function Coupling

---

13. Message Format

Standar:

{
  "task_id": "",
  "sender": "",
  "receiver": "",
  "payload": {},
  "timestamp": ""
}

---

14. Task Structure

Semua task memiliki:

task_id
priority
status
owner
deadline

---

15. Agent State

Agent:

Stateless by default

State disimpan di:

Memory Service
Database

---

16. Agent Memory Types

Short-Term Memory

Percakapan aktif.

---

Long-Term Memory

Knowledge permanen.

---

Episodic Memory

Riwayat interaksi.

---

Semantic Memory

Knowledge terstruktur.

---

17. Memory Storage

Gunakan:

Redis
ChromaDB
PostgreSQL

---

18. Context Window Management

Agent wajib:

- summarize;
- trim;
- compress.

---

19. Tool Calling

Semua tools:

declarative
permission based
auditable

---

20. Tool Manifest

name:
description:
parameters:
permissions:
timeout:

---

21. MCP Standards

Default:

Model Context Protocol (MCP)

---

22. MCP Directory

mcp/
├── filesystem/
├── github/
├── database/
├── web/
└── custom/

---

23. Agent Permissions

Permission minimum:

filesystem
database
internet
email
calendar
shell
github

---

24. Permission Principle

Least Privilege

---

25. Agent Isolation

Setiap agent:

- isolated;
- sandboxed;
- permission controlled.

---

26. Human Approval

Wajib approval untuk:

delete
payment
email send
database modification
deployment

---

27. Agent Logging

Catat:

task
tool
result
error
latency
token usage

---

28. Agent Metrics

Minimal:

requests
errors
latency
cost
tokens
success rate

---

29. Agent Status

IDLE
RUNNING
WAITING
FAILED
STOPPED

---

30. Retry Policy

Default:

3 retries
exponential backoff

---

31. Timeouts

Default:

30 seconds

Long tasks:

5 minutes

---

32. Error Handling

Agent wajib:

- recover;
- retry;
- fallback.

---

33. Fallback Strategy

Urutan:

Primary Model
Secondary Model
Local Model
Human Escalation

---

34. Multi-Model Support

Supported:

OpenAI
Anthropic
Gemini
Groq
Mistral
DeepSeek
OpenRouter
Ollama
MiMo

---

35. Multi-Provider Support

Provider abstraction:

LiteLLM

---

36. Cost Tracking

Semua agent wajib mencatat:

tokens
cost
provider
model
duration

---

37. Agent Security

Wajib:

- prompt injection protection;
- tool restrictions;
- output validation.

---

38. Prompt Storage

Semua prompt:

versioned
documented
auditable

---

39. System Prompt Versioning

Gunakan:

prompt_id
version
created_at
updated_at

---

40. Agent Testing

Minimal:

unit test
integration test
prompt test
regression test

---

41. Agent Evaluation

Metrics:

accuracy
latency
cost
hallucination rate
tool success rate

---

42. Agent Registry

Semua agent wajib terdaftar pada:

Agent Registry Service

---

43. Orchestrator Rules

Hanya Orchestrator yang boleh:

- membuat workflow;
- memanggil agent lain;
- mengatur task queue.

---

44. Agent Communication Pattern

User
 ↓
Orchestrator
 ↓
Specialized Agents
 ↓
Tool Layer
 ↓
Memory Layer

---

45. Recommended Agent Stack

FastAPI
Pydantic
LiteLLM
Redis
PostgreSQL
ChromaDB
MCP

---

46. Folder Structure

agents/
├── manifests/
├── prompts/
├── tools/
├── memory/
├── workflows/
├── tests/
└── registry/

---

47. Definition of Done

Agent dianggap selesai apabila:

✅ manifest tersedia

✅ tests tersedia

✅ logging tersedia

✅ metrics tersedia

✅ permissions tersedia

✅ documentation tersedia

---

48. Future Roadmap

Planned:

Agent Marketplace
Agent Swarm
Multi-Tenant Agents
Self-Healing Agents
Autonomous Planning
Distributed Agent Runtime

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
