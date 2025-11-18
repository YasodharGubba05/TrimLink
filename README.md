# TrimLink 

TrimLink is a lightweight, secure, and production-ready **URL Shortening API** built with **Node.js, Express, Drizzle ORM, PostgreSQL, JWT, and Zod**.  
It enables authenticated users to shorten URLs, manage their links, and redirect anyone accessing the shortened link to the target URL.

---

##  Features
-  **JWT-based Authentication** (Signup/Login)
-  **URL Shortening** with optional custom codes
-  **Zod Validation** for all request bodies
-  **PostgreSQL + Drizzle ORM** for migrations & schema
-  **Redirection Support**
-  **Docker support for local database (optional)

---

##  Tech Stack
- **Node.js + Express**
- **Drizzle ORM**
- **PostgreSQL**
- **Zod**
- **JWT**
- **NanoID**

---

##  Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YasodharGubba05/TrimLink.git
cd TrimLink
```

### 2️⃣ Install dependencies
```bash
pnpm install
```

### 3️⃣ Configure environment variables  
Create a `.env` file:
```
DATABASE_URL=postgres://username:password@localhost:5432/trimlink
JWT_SECRET=your-secret-key
PORT=8000
```

### 4️⃣ (Optional) Start PostgreSQL using Docker
```bash
docker-compose up -d
```

### 5️⃣ Push migrations
```bash
pnpm drizzle-kit push
```

### 6️⃣ Start the server
```bash
pnpm dev
```

Server runs at: **http://localhost:8000**


