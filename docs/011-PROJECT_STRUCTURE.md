
«AI ORCHESTRATION PLATFORM
Project Structure Specification
Version 1.0.0»

---

1. Purpose

This document defines the official repository structure of the AI Orchestration Platform.

Its purpose is to ensure consistency, maintainability, scalability, and a clear separation of responsibilities across the entire codebase.

This structure is considered the official architecture baseline for all current and future development.

---

2. Repository Structure

ai-orchestration/

app/
core/
lib/
modules/
providers/
services/
types/
docs/
public/
tests/
scripts/

---

3. Folder Responsibilities

app/

Application layer.

Contains:

- Next.js App Router
- Pages
- Layouts
- API Routes
- UI Composition

No business logic should live here.

---

core/

Platform Kernel.

Contains the runtime responsible for:

- Bootstrap
- Lifecycle
- Dependency Injection
- Service Container
- Registry
- Event Bus
- Provider Manager
- Plugin Manager

The Kernel owns the platform lifecycle.

---

lib/

Shared reusable libraries.

Examples:

- Logger
- Configuration
- Environment
- Error Handling
- Utilities
- Validation

Libraries should remain framework-independent whenever possible.

---

modules/

Business modules.

Examples:

- AI
- Chat
- Workspace
- Workflow
- Memory
- Authentication
- Settings

Modules implement business capabilities.

Modules communicate through the Kernel.

---

providers/

External provider implementations.

Examples:

- OpenAI
- Anthropic
- Google
- Groq
- Ollama
- OpenRouter
- Supabase

Providers must implement standardized interfaces.

---

services/

Platform service implementations.

Examples:

- Database
- Storage
- Cache
- Authentication
- Notification

Services expose capabilities to modules.

---

types/

Global TypeScript types shared across the platform.

---

docs/

Official project documentation.

Documentation is considered part of the source code.

---

public/

Static assets.

---

tests/

Testing infrastructure.

Includes:

- Unit Tests
- Integration Tests
- End-to-End Tests

---

scripts/

Automation and developer scripts.

---

4. Layer Architecture

Applications

↓

Modules

↓

Services

↓

Providers

↓

Platform Kernel

↓

Infrastructure

Each layer has clearly defined responsibilities.

---

5. Dependency Rules

Allowed:

Application
→ Modules

Modules
→ Services

Services
→ Providers

Everything
→ Kernel

Not Allowed:

Module
→ Module (direct dependency)

Provider
→ Module

Kernel
→ Business Logic

---

6. Import Rules

Always import through public entry points.

Example:

import { logger } from "@/lib/logger";

Avoid importing internal implementation files directly.

---

7. Naming Convention

Folders:

lowercase

Files:

kebab-case or descriptive names

Types:

PascalCase

Functions:

camelCase

Constants:

UPPER_SNAKE_CASE

---

8. Architecture Principles

The project follows these principles:

- Separation of Concerns
- Single Responsibility
- Dependency Injection
- Event Driven Architecture
- Provider Abstraction
- Modular Design
- Platform First
- Documentation First

---

9. Future Expansion

The structure is designed to support:

- Multiple AI Providers
- Multiple Applications
- Plugin Marketplace
- Workflow Engine
- AI Memory
- Enterprise Deployment
- Distributed Services

without changing the repository architecture.

---

10. Engineering Rules

1. The Kernel owns the platform.

2. Business logic belongs inside Modules.

3. Shared logic belongs inside Libraries.

4. External integrations belong inside Providers.

5. Services expose reusable platform capabilities.

6. Documentation evolves together with the implementation.

7. Architecture changes require architectural review.

---

11. Conclusion

The repository structure represents the foundation of the AI Orchestration Platform.

Every contributor is expected to follow this specification to ensure consistency, maintainability, and long-term scalability.
