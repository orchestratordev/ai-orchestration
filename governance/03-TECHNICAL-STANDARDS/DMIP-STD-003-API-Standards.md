DMIP-STD-003 – API Standards

Project: DOKB Mobility Intelligence Platform (DMIP)
Version: 1.0.0
Status: Approved
Last Updated: 28 June 2026 (WITA)

---

1. Purpose

Dokumen ini menetapkan standar pengembangan API pada seluruh layanan DMIP agar:

- konsisten;
- mudah digunakan;
- mudah diintegrasikan;
- aman;
- siap dikembangkan menjadi microservices.

---

2. API Principles

Seluruh API wajib:

✅ RESTful

✅ Stateless

✅ JSON-based

✅ Versioned

✅ Secure by Default

✅ Documented

---

3. Base URL

Seluruh endpoint:

/api/v1/

Contoh:

/api/v1/agents
/api/v1/models
/api/v1/tasks
/api/v1/users

---

4. API Versioning

Versi baru:

/api/v2/

Tidak boleh:

/api/new/
/api/latest/

---

5. Resource Naming

Gunakan:

plural nouns

Benar:

/users
/tasks
/agents
/models

Salah:

/getUsers
/createTask
/runAgent

---

6. HTTP Methods

GET

Membaca data.

GET /users

---

POST

Membuat data.

POST /users

---

PUT

Mengganti seluruh data.

PUT /users/1

---

PATCH

Mengubah sebagian data.

PATCH /users/1

---

DELETE

Menghapus data.

DELETE /users/1

---

7. Endpoint Design

Benar:

GET /users
GET /users/{id}
POST /users
DELETE /users/{id}

Salah:

/getUsers
/deleteUser
/updateUser

---

8. Response Format

Seluruh response:

{
  "success": true,
  "message": "Success",
  "data": {}
}

---

9. Error Response

{
  "success": false,
  "message": "Validation failed",
  "error_code": "VALIDATION_ERROR",
  "details": {}
}

---

10. HTTP Status Codes

Success

200 OK
201 Created
202 Accepted
204 No Content

---

Client Error

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests

---

Server Error

500 Internal Server Error
502 Bad Gateway
503 Service Unavailable

---

11. Pagination

Gunakan:

?page=1
&limit=20

Contoh:

GET /users?page=1&limit=20

---

Response:

{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}

---

12. Sorting

Contoh:

?sort=name
?sort=-created_at

---

13. Filtering

Contoh:

?status=active
?role=admin

---

14. Search

Contoh:

?q=driver

---

15. Authentication

Gunakan:

Bearer Token (JWT)

Header:

Authorization: Bearer <token>

---

16. API Keys

Untuk:

- AI Providers
- Internal Services
- MCP Servers

Gunakan:

X-API-Key:

atau:

Authorization: Bearer

---

17. Idempotency

Untuk request tertentu:

Idempotency-Key:

---

18. Request Validation

Seluruh input wajib:

- type validation;
- length validation;
- format validation;
- sanitization.

---

19. Date Format

Gunakan:

ISO-8601

Contoh:

2026-06-28T10:30:00+08:00

---

20. Timezone

Default:

Asia/Makassar
UTC+8
WITA

---

21. Request ID

Setiap request:

X-Request-ID

Untuk:

- tracing;
- debugging;
- observability.

---

22. Health Endpoints

Seluruh service wajib memiliki:

/health
/ready
/version

---

23. Metrics Endpoint

/metrics

Untuk:

- Prometheus
- Grafana
- Monitoring

---

24. API Documentation

Seluruh API wajib memiliki:

OpenAPI
Swagger
ReDoc

---

25. Security Headers

Minimum:

X-Content-Type-Options
X-Frame-Options
Content-Security-Policy
Strict-Transport-Security

---

26. Rate Limiting

Default:

100 request/minute

AI endpoints:

30 request/minute

---

27. File Upload

Maksimum:

50 MB

Format:

pdf
docx
xlsx
csv
png
jpg
jpeg
md
txt
json

---

28. API Deprecation

Response header:

Deprecation: true
Sunset:

---

29. Internal APIs

Internal services wajib:

- authenticated;
- versioned;
- documented.

---

30. AI API Standards

AI endpoints:

/api/v1/chat
/api/v1/agents
/api/v1/completions
/api/v1/tools

Harus kompatibel dengan:

- OpenAI SDK
- LiteLLM
- OpenRouter
- Future Providers

---

31. Definition of Done

Sebuah API dianggap selesai apabila:

✅ endpoint berjalan

✅ validation selesai

✅ documentation selesai

✅ authentication selesai

✅ logging selesai

✅ monitoring selesai

---

Approval

Chief System Architect
DOKB Mobility Intelligence Platform (DMIP)

Status:

ACTIVE
