ADR-003

NEXTJS STANDARD

Status : Approved

Date : 2026-06-24

Version : 1.0.0

---

Context

The AI Orchestration Platform requires a modern web application framework capable of supporting:

- governance systems;
- administration portals;
- intelligence dashboards;
- AI orchestration interfaces;
- future mobility services;
- future ride hailing products.

The platform must support long-term maintainability, scalability, and developer productivity.

A primary frontend framework standard was required.

---

Problem Statement

Without a standard framework:

- development practices may diverge;
- architecture becomes inconsistent;
- onboarding becomes difficult;
- maintenance costs increase.

The platform requires a single primary web application framework.

---

Decision

The platform shall adopt Next.js as the official web application framework standard.

All major web applications within the platform ecosystem should use Next.js unless an approved ADR explicitly authorizes an exception.

---

Why Next.js

Next.js provides:

- React ecosystem compatibility;
- server-side rendering;
- static generation;
- API route support;
- strong TypeScript integration;
- enterprise adoption;
- long-term community support.

The framework aligns with the architectural requirements of the platform.

---

Technical Benefits

Unified Framework

Single framework for:

- frontend;
- backend routes;
- authentication integration;
- dashboard applications.

---

TypeScript Support

TypeScript is treated as the primary development language.

Benefits:

- type safety;
- maintainability;
- reduced runtime errors;
- improved AI-assisted development.

---

Scalability

Next.js supports:

- small prototypes;
- organizational tools;
- enterprise applications.

The framework can scale with platform growth.

---

Deployment Flexibility

Supports:

- Vercel;
- Docker;
- self-hosted environments;
- cloud providers.

Deployment remains vendor-independent.

---

Alternatives Considered

Alternative A

Plain React

Advantages:

- simplicity;
- large ecosystem.

Disadvantages:

- additional architecture required;
- fragmented implementation patterns.

Decision:

Rejected.

---

Alternative B

Vue Ecosystem

Advantages:

- developer friendliness.

Disadvantages:

- lower alignment with existing architecture plans;
- reduced consistency with AI engineering workflows.

Decision:

Rejected.

---

Alternative C

Angular

Advantages:

- enterprise features.

Disadvantages:

- higher complexity;
- slower development velocity.

Decision:

Rejected.

---

Alternative D

Next.js

Advantages:

- full-stack capability;
- TypeScript integration;
- scalability;
- strong ecosystem.

Decision:

Accepted.

---

Consequences

Positive Consequences:

- architectural consistency;
- improved productivity;
- simplified onboarding;
- better AI-assisted engineering.

Negative Consequences:

- dependency on React ecosystem;
- framework learning requirements.

Benefits outweigh drawbacks.

---

Scope

Applies to:

- AIOPS-OS interfaces;
- DMIP dashboards;
- DIC interfaces;
- administration portals;
- intelligence applications;
- future mobility services.

---

Exceptions

Alternative frameworks may only be adopted through an approved ADR.

Exceptions must demonstrate:

- measurable benefit;
- architectural justification;
- long-term maintainability.

---

Strategic Impact

Next.js becomes the foundational application framework for:

- governance systems;
- orchestration systems;
- intelligence systems;
- mobility systems.

The decision improves long-term architectural consistency.

---

Approval

Approved By:

Founder & Chief Executive Architect

Supported By:

Chief Systems Architect

Chief AI Runtime Engineer

Lead Software Engineer

---

Related ADRs

ADR-001-AIOPS_OS_FOUNDATION

ADR-004-SUPABASE_STANDARD

ADR-005-MONOREPO_DECISION

ADR-006-KERNEL_ARCHITECTURE

---

Final Statement

Next.js is adopted as the official web application framework standard for the platform ecosystem.

The decision provides consistency, scalability, and long-term sustainability for future platform development.
