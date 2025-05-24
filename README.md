# 📱 Used Phone Marketplace

A full-stack B2B used phone marketplace built with a modern TypeScript stack.

## 🧱 Tech Stack

- **Frontend**: React + React Router + Tailwind CSS + shadcn/ui
- **Backend**: Hono (Bun) + tRPC
- **Database**: PostgreSQL + Prisma ORM
- **Full-stack**: tRPC API linking frontend and backend
- **Deployment**: Docker-ready

---

## 🛠 Features

- 🛒 Product listing with search, filters, and pagination
- 🔍 Live search with keyboard navigation
- 📦 Product detail page with dynamic routing
- ✍️ Admin seed script for demo data
- 🔗 Type-safe API with tRPC
- 🧾 Environment-based configuration

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/MochamadRafli21/bekas.git
cd bekas

### 2. Install dependency
bun install

### 3. Run Docker for local database
cd docker
docker compose up

### 4. Add environment variable
DATABASE_URL=postgresql://root:toor@localhost:5432/bekas
change the url if you are using other postgresql database

### 5. Setup Database
bun run migrate
bun run generate
bun run seed

### 6. Run Dev server
bun run dev
```
