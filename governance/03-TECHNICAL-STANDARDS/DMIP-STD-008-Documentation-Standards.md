DMIP-STD-008 – Documentation Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar dokumentasi DMIP agar:

- mudah dipahami;
- mudah dipelihara;
- mempermudah onboarding;
- mengurangi ketergantungan pada individu tertentu.

---

2. Principles

Dokumentasi harus:

✅ Clear

✅ Accurate

✅ Versioned

✅ Searchable

✅ Maintainable

✅ Up-to-date

---

3. Documentation Categories

DMIP menggunakan enam kategori dokumentasi:

Governance
Architecture
Development
Operations
User Guides
Reference

---

4. Documentation Directory

docs/
├── governance/
├── architecture/
├── development/
├── operations/
├── user-guides/
├── api/
├── reference/
└── assets/

---

5. Governance Documentation

Berisi:

ADR
Standards
Policies
Roadmap
Decision Records

---

6. Architecture Documentation

Berisi:

System Architecture
Diagrams
Service Maps
Data Flow
Sequence Diagram

---

7. Development Documentation

Berisi:

Setup Guide
Coding Standards
Testing Guide
Contribution Guide

---

8. Operations Documentation

Berisi:

Deployment
Monitoring
Backup
Incident Response
Runbooks

---

9. User Documentation

Berisi:

Installation Guide
User Manual
FAQ
Tutorial

---

10. API Documentation

Berisi:

REST API
MCP
AI Agents
Webhooks

---

11. Reference Documentation

Berisi:

Glossary
Configuration
Environment Variables
Dependencies

---

12. File Format

Default:

Markdown (.md)

---

Diagram:

.drawio
.mmd
.png
.svg

---

13. Naming Convention

Gunakan:

UPPERCASE-KEBAB-CASE

Contoh:

ADR-001-SYSTEM-ARCHITECTURE.md
STD-004-SECURITY-STANDARDS.md

---

14. Document Header

Semua dokumen wajib memiliki:

Title
Version
Status
Last Updated
Owner

---

15. Version Format

Gunakan:

MAJOR.MINOR.PATCH

Contoh:

1.0.0
1.1.0
2.0.0

---

16. Document Status

Status:

Draft
Review
Approved
Deprecated
Archived

---

17. Author Information

Semua dokumen:

Author
Reviewer
Approver

---

18. Change Log

Minimal:

Version
Date
Changes
Author

---

19. Markdown Standards

Gunakan:

# Heading 1
## Heading 2
### Heading 3

---

20. Code Blocks

Gunakan:

```python
```

```yaml
```

```json
```

---

21. Tables

Gunakan:

| Field | Description |
|-------|-------------|

---

22. Diagrams

Gunakan:

Mermaid
Draw.io

---

23. Architecture Diagrams

Minimal:

Context Diagram
Container Diagram
Sequence Diagram
Deployment Diagram

---

24. README Standard

Setiap folder wajib memiliki:

README.md

---

25. README Structure

Minimal:

Purpose
Contents
Usage
Dependencies

---

26. API Documentation

Gunakan:

OpenAPI
Swagger

---

27. Agent Documentation

Setiap agent:

Description
Capabilities
Permissions
Dependencies
Examples

---

28. MCP Documentation

Setiap MCP Server:

Purpose
Endpoints
Authentication
Examples

---

29. Configuration Documentation

Dokumentasikan:

Environment Variables
Default Values
Examples

---

30. Environment Files

Gunakan:

.env.example

---

Tidak boleh:

.env

masuk repository.

---

31. ADR Standards

Semua keputusan penting:

Architecture Decision Record

---

32. Documentation Review

Dokumentasi wajib direview:

- sebelum release;
- setelah perubahan besar.

---

33. Documentation Testing

Pastikan:

- link valid;
- diagram valid;
- contoh kode berjalan.

---

34. Documentation Ownership

Setiap dokumen memiliki:

Document Owner

---

35. Documentation Metrics

Monitor:

coverage
staleness
missing docs

---

36. Repository Documentation Structure

README.md
CHANGELOG.md
CONTRIBUTING.md
SECURITY.md
LICENSE
CODE_OF_CONDUCT.md

---

37. Runbooks

Semua operasi production wajib memiliki:

Runbook

---

38. Incident Documentation

Semua insiden:

Root Cause Analysis
Postmortem
Action Items

---

39. User Guides

Harus menyediakan:

Installation
Quick Start
Examples
FAQ

---

40. Documentation Automation

Gunakan:

MkDocs
Docusaurus

---

41. Documentation Repository

Source of Truth:

Git Repository

---

42. Definition of Done

Fitur dianggap selesai apabila:

✅ Dokumentasi tersedia

✅ Contoh tersedia

✅ Diagram tersedia

✅ README diperbarui

---

43. Future Roadmap

Planned:

Documentation Portal
Search Engine
AI Documentation Assistant
Auto Documentation Generator

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
