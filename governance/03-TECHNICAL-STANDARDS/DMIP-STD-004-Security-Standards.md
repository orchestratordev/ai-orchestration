DMIP-STD-004 – Security Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 29 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar keamanan minimum untuk seluruh komponen DMIP, meliputi:

- Backend Services
- Frontend Applications
- AI Services
- AI Agents
- Databases
- Infrastructure
- API Gateway
- Authentication Services
- Developer Workstations

---

2. Security Principles

DMIP menggunakan prinsip:

Security by Design

Keamanan dibangun sejak tahap desain.

---

Zero Trust

Tidak ada service yang otomatis dipercaya.

---

Least Privilege

Setiap user dan service hanya memiliki akses minimum.

---

Defense in Depth

Menggunakan lapisan keamanan berlapis.

---

Secure by Default

Semua konfigurasi default harus aman.

---

3. Authentication Standards

Human Users

Wajib menggunakan:

- Username + Password
- JWT Authentication

---

Administrator Accounts

Wajib:

- MFA / 2FA
- Strong Password

---

Service-to-Service

Gunakan:

- API Keys
- JWT
- Service Tokens

---

4. Password Policy

Minimum:

12 karakter

Harus mengandung:

- huruf besar
- huruf kecil
- angka
- simbol

---

Tidak boleh:

- nama
- tanggal lahir
- password umum

---

5. Password Storage

Wajib:

Argon2
atau
bcrypt

Dilarang:

MD5
SHA1
Plain Text

---

6. Secret Management

Rahasia:

- API Keys
- Database Password
- JWT Secret
- Encryption Keys

Tidak boleh:

- di Git
- di source code
- di README

---

Gunakan:

.env
Secret Manager
Environment Variables

---

7. JWT Standards

Token:

Access Token
Refresh Token

---

Access Token:

15-60 menit

Refresh Token:

7-30 hari

---

8. Session Management

Session harus:

- dapat di-expire;
- dapat di-revoke;
- dapat di-audit.

---

9. Authorization

Gunakan:

RBAC
(Role Based Access Control)

Role minimum:

ADMIN
OPERATOR
MEMBER
GUEST
SERVICE

---

10. API Security

Semua endpoint:

- authenticated
- validated
- rate limited
- logged

---

11. Rate Limiting

Default:

100 request/minute

AI endpoints:

30 request/minute

Authentication:

10 request/minute

---

12. HTTPS Standards

Production:

HTTPS ONLY

TLS:

TLS 1.2+

---

13. CORS Policy

Tidak boleh:

*

Gunakan whitelist domain.

---

14. Security Headers

Wajib:

Content-Security-Policy
Strict-Transport-Security
X-Frame-Options
X-Content-Type-Options
Referrer-Policy
Permissions-Policy

---

15. Input Validation

Semua input wajib:

- type validation
- length validation
- sanitization
- encoding

---

16. SQL Injection Protection

Gunakan:

- ORM
- Parameterized Query

Dilarang:

f"SELECT * FROM users WHERE id={id}"

---

17. XSS Protection

Semua output:

- escaped
- sanitized

---

18. CSRF Protection

Untuk web application:

- CSRF Token
- SameSite Cookie

---

19. File Upload Security

Validasi:

- file size
- extension
- mime type

---

Dilarang:

.exe
.bat
.sh
.ps1

---

20. Encryption Standards

At Rest:

AES-256

In Transit:

TLS 1.2+

---

21. Database Security

Database:

- private network
- authentication enabled
- backups encrypted

---

Tidak boleh:

public access

---

22. Logging Security

Tidak boleh mencatat:

- password
- token
- API key
- secret

---

23. Audit Logs

Wajib mencatat:

- login
- logout
- role changes
- permission changes
- configuration changes
- secret changes

---

24. Dependency Security

Wajib:

- dependency scanning
- update berkala
- CVE monitoring

---

Tools:

pip-audit
safety
npm audit
dependabot

---

25. Container Security

Container:

- non-root user
- minimal image
- read-only filesystem jika memungkinkan

---

Tidak boleh:

privileged=true

---

26. Infrastructure Security

Server:

- firewall enabled
- SSH key authentication
- fail2ban
- automatic security updates

---

27. AI Security

AI Models:

- prompt injection protection
- output filtering
- rate limiting
- tool permission control

---

28. MCP Security

MCP Server:

- authenticated
- isolated
- least privilege

---

29. Agent Security

AI Agents:

- sandboxed
- permission based
- auditable

---

30. Backup Security

Backup:

- encrypted
- versioned
- tested regularly

---

31. Incident Response

Jika terjadi insiden:

1. Detect
2. Contain
3. Eradicate
4. Recover
5. Review

---

32. Security Review Frequency

Minimum:

3 bulan sekali

---

33. Security Testing

Minimum:

- SAST
- Dependency Scan
- Secret Scan

---

Tahunan:

- Penetration Test
- Security Audit

---

34. Definition of Done

Fitur dianggap selesai apabila:

✅ Authentication selesai

✅ Authorization selesai

✅ Logging selesai

✅ Validation selesai

✅ Security review selesai

---

35. Compliance

Seluruh repository DMIP wajib mematuhi standar ini.

Pelanggaran standar keamanan dianggap:

HIGH PRIORITY DEFECT

dan harus diperbaiki sebelum production release.

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
