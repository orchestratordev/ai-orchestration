DMIP-STD-005 – Database Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar database untuk seluruh komponen DMIP agar:

- konsisten;
- mudah dipelihara;
- aman;
- scalable;
- siap berkembang menjadi multi-service architecture.

---

2. Supported Databases

Primary Database

PostgreSQL

---

Cache Database

Redis

---

Vector Database

ChromaDB

Tahap berikutnya:

Qdrant

---

Search Engine (Optional)

OpenSearch

---

3. Database Principles

DMIP menggunakan:

✅ Single Source of Truth

✅ Normalize First

✅ Denormalize When Needed

✅ Security by Default

✅ Auditability

✅ Scalability

---

4. Naming Convention

Table

Gunakan:

snake_case
plural

Contoh:

users
agents
sessions
tasks
documents
chat_messages

---

Column

Gunakan:

snake_case

Contoh:

created_at
updated_at
user_id
is_active

---

Index

idx_<table>_<column>

Contoh:

idx_users_email
idx_tasks_status

---

Foreign Key

fk_<table>_<reference>

Contoh:

fk_tasks_users

---

5. Primary Key Standard

Semua tabel:

UUID

Contoh:

id UUID PRIMARY KEY

---

Tidak menggunakan:

AUTO_INCREMENT
SERIAL

---

6. Timestamp Standard

Semua tabel wajib memiliki:

created_at TIMESTAMP
updated_at TIMESTAMP

Opsional:

deleted_at TIMESTAMP

---

7. Soft Delete

Default:

Soft Delete

Kolom:

deleted_at

---

8. Audit Columns

Tabel penting:

created_by
updated_by
deleted_by

---

9. Boolean Columns

Gunakan:

is_
has_

Contoh:

is_active
is_admin
has_access

---

10. Foreign Keys

Semua relasi:

explicit foreign key

Contoh:

user_id UUID REFERENCES users(id)

---

11. Unique Constraints

Gunakan:

UNIQUE

Contoh:

email UNIQUE

---

12. Indexing Rules

Wajib index:

- foreign key
- email
- status
- created_at
- owner_id

---

13. JSON Usage

Gunakan:

JSONB

Contoh:

metadata JSONB
settings JSONB

---

14. Enum Usage

Gunakan:

VARCHAR + CHECK

Lebih fleksibel daripada enum database.

---

15. Database Migrations

Gunakan:

Alembic

Dilarang:

manual schema change

---

16. Migration Rules

Migration:

- versioned
- reversible
- repeatable

---

17. Transactions

Gunakan transaction untuk:

- create workflow
- payment
- multi-table update
- task execution

---

18. Query Standards

Gunakan:

- ORM
- parameterized query

Dilarang:

f"SELECT * FROM users WHERE id={id}"

---

19. ORM Standard

Gunakan:

SQLAlchemy

---

20. Connection Pooling

Gunakan:

SQLAlchemy Pool

atau:

PgBouncer

---

21. Database Configuration

Development:

PostgreSQL Local

Production:

Managed PostgreSQL

---

22. Backup Policy

Backup:

Daily

Retention:

30 hari

---

23. Disaster Recovery

Target:

RPO ≤ 24 jam
RTO ≤ 4 jam

---

24. Encryption

At Rest:

AES-256

In Transit:

TLS

---

25. Access Control

Role minimum:

app_user
app_admin
read_only

---

26. Environment Separation

Database:

dev
staging
production

Tidak boleh berbagi database.

---

27. Multi-Tenancy

Tahap awal:

single tenant

Roadmap:

multi tenant ready

---

28. Logging

Catat:

- slow query
- failed query
- migration
- schema change

---

29. Query Performance

Target:

P95 < 100ms

---

30. Large Files

Dilarang menyimpan:

- image
- pdf
- video

di PostgreSQL.

Gunakan:

Object Storage

Database hanya menyimpan:

file_url
file_metadata

---

31. Chat History Storage

Chat:

chat_sessions
chat_messages

---

AI metadata:

JSONB

---

32. Vector Storage

Embedding:

ChromaDB

Tahap enterprise:

Qdrant

---

33. Retention Policy

Log:

90 hari

Audit:

2 tahun

Chat:

sesuai kebijakan organisasi

---

34. Observability

Database wajib memiliki:

health check
metrics
connection monitoring
slow query monitoring

---

35. Recommended Schema

Core:

users
roles
permissions
sessions
tasks
agents
documents
chat_sessions
chat_messages
settings
audit_logs
notifications

---

36. AI Schema

models
providers
tools
mcp_servers
agent_runs
agent_memory
embeddings

---

37. Definition of Done

Database dianggap selesai apabila:

✅ migration selesai

✅ index selesai

✅ backup selesai

✅ monitoring selesai

✅ documentation selesai

---

38. Future Roadmap

Planned:

Read Replica
Partitioning
Sharding
Qdrant
Event Store

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
