DMIP-STD-010 – Release Management Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar pengelolaan release pada seluruh komponen DMIP agar:

- stabil;
- dapat diulang (repeatable);
- mudah diaudit;
- minim risiko kegagalan.

---

2. Release Principles

Setiap release harus:

✅ Tested

✅ Documented

✅ Versioned

✅ Recoverable

✅ Traceable

---

3. Release Types

DMIP menggunakan:

Major Release
Minor Release
Patch Release
Hotfix Release

---

4. Versioning Standard

Menggunakan:

Semantic Versioning (SemVer)

Format:

MAJOR.MINOR.PATCH

Contoh:

v1.0.0
v1.1.0
v1.1.1
v2.0.0

---

5. Major Release

Digunakan apabila:

- perubahan arsitektur;
- breaking changes;
- redesign besar.

Contoh:

v2.0.0

---

6. Minor Release

Digunakan apabila:

- fitur baru;
- peningkatan non-breaking.

Contoh:

v1.2.0

---

7. Patch Release

Digunakan apabila:

- bug fixing;
- security patch;
- optimisasi kecil.

Contoh:

v1.2.1

---

8. Hotfix Release

Digunakan apabila:

- production down;
- security emergency;
- critical defect.

Contoh:

v1.2.2

---

9. Release Branch

Format:

release/v1.0.0
release/v1.1.0

---

10. Git Tag Format

Format:

v1.0.0
v1.1.0
v1.1.1

---

11. Release Frequency

Target:

Major : As Needed
Minor : Monthly
Patch : Weekly
Hotfix : Anytime

---

12. Release Checklist

Minimal:

✅ Code Freeze

✅ Tests Passed

✅ Security Scan Passed

✅ Documentation Updated

✅ CHANGELOG Updated

---

13. Release Candidate

Gunakan:

v1.0.0-rc1
v1.0.0-rc2

---

14. Pre-release Environment

Release Candidate wajib diuji pada:

Staging Environment

---

15. Production Requirements

Sebelum release:

- backup database;
- backup configuration;
- backup secrets.

---

16. Database Migration

Migration wajib:

Forward Compatible
Rollback Supported

---

17. Deployment Window

Disarankan:

22:00–05:00 WITA

untuk meminimalkan gangguan.

---

18. Deployment Owner

Minimal:

Release Manager
Technical Lead

---

19. Release Documentation

Setiap release wajib memiliki:

Release Notes
Deployment Notes
Rollback Notes

---

20. Release Notes Content

Minimal:

- version;
- release date;
- new features;
- bug fixes;
- breaking changes;
- migration notes.

---

21. CHANGELOG Format

Gunakan:

Added
Changed
Fixed
Removed
Security

---

22. Release Approval

Release production memerlukan:

Technical Lead Approval
Project Owner Approval

---

23. Rollback Policy

Semua release wajib:

Rollback Ready

---

24. Rollback Trigger

Dilakukan apabila:

- error rate tinggi;
- database corruption;
- service outage;
- security issue.

---

25. Rollback Objective

Target:

RTO < 30 minutes

---

26. Post Release Validation

Verifikasi:

- login;
- database;
- API;
- AI services;
- notifications;
- integrations.

---

27. Monitoring Period

Minimal:

24 Hours

setelah deployment.

---

28. Incident Classification

P1 Critical
P2 High
P3 Medium
P4 Low

---

29. Emergency Release

Boleh melewati:

- schedule normal;
- feature freeze.

Tetapi wajib:

Postmortem

---

30. Release Metrics

Monitoring:

Deployment Frequency
Lead Time
Failure Rate
Rollback Rate
MTTR

---

31. Artifact Management

Semua release harus menghasilkan:

Docker Image
Git Tag
Release Notes
Backup Snapshot

---

32. Retention Policy

Minimal:

12 bulan

---

33. Security Requirements

Sebelum release:

Dependency Scan
Secret Scan
Vulnerability Scan

---

34. Release Communication

Release wajib diumumkan kepada:

- Development Team;
- Project Owner;
- Stakeholders.

---

35. Production Freeze

Tidak boleh deploy:

- saat incident besar;
- saat maintenance provider;
- saat database bermasalah.

---

36. Definition of Successful Release

Release dianggap berhasil apabila:

✅ Deployment sukses

✅ Monitoring normal

✅ Tidak ada rollback

✅ Tidak ada P1 incident

---

37. Future Roadmap

Planned:

Automated Release
Blue-Green Deployment
Canary Deployment
Progressive Rollout
Release Dashboard

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
