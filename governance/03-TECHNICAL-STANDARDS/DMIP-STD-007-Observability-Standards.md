DMIP-STD-007 – Observability Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar observability untuk seluruh komponen DMIP agar:

- mudah dipantau;
- cepat mendeteksi masalah;
- mudah di-debug;
- mendukung operasi production.

---

2. Principles

DMIP menggunakan:

✅ Monitoring

✅ Logging

✅ Metrics

✅ Tracing

✅ Alerting

---

3. Three Pillars of Observability

DMIP menggunakan:

Metrics
Logs
Traces

---

4. Monitoring Stack

Recommended:

Prometheus
Grafana
Loki
Tempo
OpenTelemetry

---

5. Metrics Collection

Seluruh service wajib menyediakan:

/health
/metrics

---

6. Health Check Endpoints

Minimal:

{
  "status":"healthy",
  "service":"orchestrator",
  "version":"1.0.0"
}

---

7. Metrics Categories

System Metrics

- CPU
- RAM
- Disk
- Network

---

Application Metrics

- Requests
- Errors
- Latency
- Queue

---

AI Metrics

- Token Usage
- Cost
- Model Usage
- Success Rate

---

8. Logging Principles

Logging:

structured
machine readable
searchable

---

9. Log Format

Gunakan:

{
  "timestamp":"",
  "level":"",
  "service":"",
  "message":"",
  "metadata":{}
}

---

10. Log Levels

DEBUG
INFO
WARNING
ERROR
CRITICAL

---

11. Log Storage

Gunakan:

Loki

atau:

OpenSearch

---

12. Sensitive Data

Dilarang mencatat:

- password
- API key
- token
- secret
- credit card

---

13. Correlation ID

Semua request wajib memiliki:

request_id
correlation_id

---

14. Distributed Tracing

Gunakan:

OpenTelemetry

---

15. Trace Information

Minimal:

request
database
tool call
agent call
external api

---

16. Dashboard

Minimal dashboard:

Infrastructure
API
AI Models
AI Agents
Database
Business Metrics

---

17. API Metrics

Wajib memonitor:

requests
errors
latency
throughput

---

18. Database Metrics

Wajib memonitor:

connections
slow queries
locks
disk usage

---

19. Redis Metrics

Monitor:

memory
keys
connections
latency

---

20. AI Metrics

Monitor:

tokens
cost
latency
provider
model

---

21. Agent Metrics

Monitor:

tasks
errors
duration
tool calls
success rate

---

22. Queue Metrics

Monitor:

pending
running
failed
completed

---

23. Alert Severity

INFO
WARNING
HIGH
CRITICAL

---

24. Alert Channels

Gunakan:

Email
Telegram
Discord
WhatsApp

---

25. Critical Alerts

Kondisi:

Service Down
Database Down
Memory >90%
Disk >90%
API Error >10%

---

26. AI Alerts

Kondisi:

Cost Spike
Provider Failure
Hallucination Spike
Token Spike

---

27. Uptime Targets

Target:

99.5%

Tahap enterprise:

99.9%

---

28. Latency Targets

API:

P95 < 500ms

AI:

P95 < 10s

---

29. Error Budget

Maximum:

0.5%

---

30. Business Metrics

Monitor:

users
sessions
documents
tasks
agents

---

31. DOKB Metrics

Monitor:

active members
documents generated
advocacy reports
AI assistant usage

---

32. Cost Dashboard

Monitor:

OpenAI
Anthropic
Gemini
Groq
OpenRouter
MiMo

---

33. Log Retention

Application:

90 hari

Audit:

2 tahun

---

34. Metrics Retention

180 hari

---

35. Trace Retention

30 hari

---

36. Incident Response

Tahapan:

Detect
Investigate
Mitigate
Recover
Review

---

37. Postmortem

Semua insiden besar wajib:

- root cause;
- timeline;
- action items.

---

38. SLO

Service Level Objective:

Availability
Latency
Error Rate

---

39. SLA

Tahap awal:

Best Effort

Tahap production:

99.5%

---

40. Definition of Done

Service dianggap siap production apabila:

✅ Metrics tersedia

✅ Logs tersedia

✅ Traces tersedia

✅ Dashboard tersedia

✅ Alerts tersedia

---

41. Recommended Stack

Prometheus
Grafana
Loki
Tempo
OpenTelemetry
AlertManager

---

42. Folder Structure

observability/
├── dashboards/
├── alerts/
├── metrics/
├── logs/
├── traces/
└── runbooks/

---

43. Future Roadmap

Planned:

AI Observability
Anomaly Detection
Cost Forecasting
Self-Healing Infrastructure
Predictive Monitoring

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
