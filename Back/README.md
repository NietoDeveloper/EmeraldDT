# 💎 Emerald DT - Backend Security Cluster
### High-Engineering Emerald Commercialization Platform

This is the core services layer (API) of Emerald DT. Designed under a **Maximum Security** architecture and **Double Cluster** scalability, following the visual and technical standards inspired by SpaceX.

---

## 🏗️ Folder Architecture (Domain-Driven Design)

The project uses a modular structure where each resource is independent, facilitating maintenance and security auditing.

```
emerald-dt-api/
├── dist/                   # Compiled (JS) code for production
├── src/                    # Source code (TS)
│   ├── config/             # Cluster (MongoDB) configurations and Providers
│   ├── core/               # Core logic: Security Middlewares and Auth
│   ├── modules/            # Business Domains (Independent Modules)
│   │   ├── emeralds/       # Gem and certificate management
│   │   ├── users/          # Profile and role management
│   │   └── payments/       # Payment gateway (Stripe/Wompi)
│   ├── shared/             # Utilities, constants and global types
│   ├── app.ts              # Express configuration and Shields (Helmet/Cors)
│   └── server.ts           # Entry point (System Bootstrapping)
├── Dockerfile              # Container configuration for Railway/AWS
├── .env.example            # Environment variables template
├── .gitignore              # Secrets protection
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript compiler configuration
```

## 🛡️ Security Protocols (S+ Cycle)

- **Double Cluster Isolation:** Physical and logical separation between public catalog data and sensitive customer transactional information.
- **JWT Multi-Role:** Role-Based Access Control (RBAC) for dashboard employees and investors.
- **Rate Limiting:** Protection against brute-force attacks on authentication endpoints.
- **Helmet & CORS:** Strict header configuration to prevent Cross-Site Scripting (XSS).

---

## 🚀 Installation & Development

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/emerald-dt-back.git
cd emerald-dt-back
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure environment variables:**

Create a `.env` file based on `.env.example`.

**4. Start in development mode:**
```bash
npm run dev
```

---

## 🛠️ Engineering Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the server with Hot Reload. |
| `npm run build` | Compiles code to optimized JavaScript in `/dist`. |
| `npm run start` | Launches the production binary (For Railway/AWS). |
| `npm run lint` | Verifies TypeScript code integrity. |

---

## 📦 Tech Stack

- **Runtime:** Node.js v20+
- **Language:** TypeScript (Strict Mode)
- **Framework:** Express.js 5.0 (Next Gen)
- **Database:** MongoDB Atlas (Double Cluster)
- **ORM:** Mongoose
- **Security:** Helmet, Jose (JWT), Bcrypt

---

## ✍️ Author

Developed by Manuel Nieto (NietoDeveloper) — Building scalable systems with 100% discipline. #1 GitHub Colombia Ranking.

GitHub Profile | Portfolio | Software DT Website

Last updated: February 24, 2026
