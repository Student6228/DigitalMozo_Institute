# School Management System

Full-stack school management system for **DigitalMozo Institute** built with React, Vite, Tailwind CSS, Node.js, Express, and TypeScript.

---

## 📁 Workspace Layout

- **`frontend/`**: React 19, Vite, Tailwind CSS frontend application.
  - `src/assets/` and `public/assets/`: Institutional media assets, icons, course banners, and student photos.
  - `src/components/`: Modular UI components (Hero, About, Academics, Placement, Admissions, Contact, Forms, Layout).
  - `src/pages/`: Main application pages (Home, Student Login, Teacher Login, 404).
  - `src/schemas/`: Form validation schemas using Zod.
- **`backend/`**: Express, Node.js, and TypeScript API server.
  - `src/app.ts`: REST endpoints (`/api/health`, `/api/inquiry`, `/api/contact`, `/api/auth/login`).
  - `prisma/`: Prisma database schema (PostgreSQL ready).

---

## 🚀 Getting Started

### 1. Activate Local Node Environment

Node.js is isolated inside `.tools/node` and is not installed system-wide. Activate it in PowerShell:

```powershell
. .\Activate-Node.ps1
```

### 2. Configure Environment Files

```powershell
Copy-Item backend\.env.example backend\.env
Copy-Item frontend\.env.example frontend\.env
```

### 3. Run Development Server

```powershell
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend API**: `http://localhost:4000` (Health Check: `http://localhost:4000/api/health`)

---

## 🛠 Available Commands

| Command                | Action                                                      |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Start both Frontend and Backend concurrently                |
| `npm run dev:frontend` | Start only Vite Frontend server                             |
| `npm run dev:backend`  | Start only Express Backend server                           |
| `npm run build`        | Compile and build production bundles for Frontend & Backend |
| `npm run typecheck`    | Run TypeScript type checks across all workspaces            |
| `npm test`             | Run test suite                                              |
| `npm run lint`         | Run ESLint code quality checks                              |

---

## 🗄 Database Commands (Prisma)

```powershell
npm run db:generate --workspace @school/backend
npm run db:migrate --workspace @school/backend
npm run db:studio --workspace @school/backend
```
