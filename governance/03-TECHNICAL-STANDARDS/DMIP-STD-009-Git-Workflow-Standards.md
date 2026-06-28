DMIP-STD-009 – Git Workflow Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar penggunaan Git dan GitHub pada seluruh pengembangan DMIP.

Tujuan:

- menjaga kualitas kode;
- mengurangi konflik;
- mempermudah kolaborasi;
- menjaga histori pengembangan.

---

2. Source Control System

DMIP menggunakan:

Git
GitHub

---

3. Repository Principles

Repository harus:

✅ Version Controlled

✅ Traceable

✅ Auditable

✅ Reproducible

---

4. Branching Strategy

DMIP menggunakan:

GitHub Flow + Release Branch

---

5. Main Branches

main
develop
release/*
hotfix/*

---

6. Branch Functions

main

Production-ready code.

---

develop

Integration branch.

---

release

Persiapan release.

---

hotfix

Perbaikan darurat production.

---

7. Feature Branch Naming

Format:

feature/<short-description>

Contoh:

feature/user-auth
feature/agent-memory
feature/mcp-github

---

8. Bugfix Branch Naming

Format:

bugfix/<short-description>

Contoh:

bugfix/login-timeout
bugfix/redis-connection

---

9. Hotfix Branch Naming

Format:

hotfix/<short-description>

Contoh:

hotfix/api-crash

---

10. Release Branch Naming

Format:

release/v1.0.0
release/v1.1.0

---

11. Branch Protection

Protected:

main
develop

---

12. Direct Push Policy

Dilarang:

push langsung ke main
push langsung ke develop

---

13. Pull Request Requirement

Semua perubahan:

Pull Request Mandatory

---

14. Pull Request Rules

Minimal:

- description;
- testing result;
- checklist;
- reviewer.

---

15. Pull Request Size

Target:

<500 lines changed

---

16. Commit Strategy

Gunakan:

Conventional Commits

---

17. Commit Format

type(scope): description

---

18. Commit Types

feat
fix
refactor
docs
test
chore
ci
build
perf
style

---

19. Examples

feat(auth): add jwt authentication
fix(redis): reconnect on timeout
docs(adr): update architecture decision

---

20. Commit Rules

Commit harus:

- kecil;
- fokus;
- mudah dipahami.

---

21. Prohibited Commits

Dilarang:

update
fix bug
test
wip
asdf

---

22. Merge Strategy

Default:

Squash and Merge

---

23. Merge Requirements

Minimal:

✅ CI Passed

✅ Review Approved

✅ No Conflict

---

24. Code Review

Semua PR wajib:

1 reviewer minimum

Production:

2 reviewer minimum

---

25. Review Checklist

Periksa:

- security;
- readability;
- tests;
- performance;
- documentation.

---

26. CI Requirements

Minimal:

lint
tests
type checks
security checks

---

27. Release Tags

Gunakan:

v1.0.0
v1.1.0
v2.0.0

---

28. Versioning

Gunakan:

Semantic Versioning

MAJOR.MINOR.PATCH

---

29. Changelog

Gunakan:

CHANGELOG.md

---

30. Repository Structure

Minimal:

README.md
LICENSE
CHANGELOG.md
CONTRIBUTING.md
SECURITY.md

---

31. Git Ignore

Gunakan:

.env
.venv
node_modules
__pycache__
dist
build
coverage

---

32. Secrets

Dilarang:

- API Key
- Password
- Token
- Credential

masuk repository.

---

33. Secret Scanning

Gunakan:

GitHub Secret Scanning
Gitleaks

---

34. Large Files

Gunakan:

Git LFS

jika diperlukan.

---

35. Documentation Update

Setiap perubahan besar:

README update mandatory

---

36. ADR Update

Perubahan arsitektur:

ADR mandatory

---

37. Release Process

develop
 ↓
release/*
 ↓
main
 ↓
tag

---

38. Emergency Hotfix

main
 ↓
hotfix/*
 ↓
main
 ↓
develop

---

39. Branch Lifetime

Feature branch:

<14 hari

---

40. Pull Request Lifetime

Target:

<3 hari

---

41. Repository Ownership

Minimal:

Maintainer
Reviewer
Contributor

---

42. Definition of Done

Perubahan dianggap selesai apabila:

✅ commit sesuai standar

✅ tests lulus

✅ documentation diperbarui

✅ review selesai

✅ merged ke branch target

---

43. Future Roadmap

Planned:

Automatic Release
Release Bot
Dependency Bot
AI Code Review
AI Commit Generator

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
