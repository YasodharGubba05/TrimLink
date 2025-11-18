 TrimLink — URL Shortener API

TrimLink is a fast and secure URL Shortener API built with Node.js, Express, PostgreSQL, Drizzle ORM, JWT Authentication, and Zod Validation.
It allows users to register, log in, shorten URLs, and handle redirections efficiently.

⸻

⭐ Features
	•	🔐 JWT Authentication (signup, login, protected routes)
	•	🔗 URL Shortening with optional custom codes
	•	🧪 Zod-based validation for all inputs
	•	🗄 Drizzle ORM + PostgreSQL for clean, typed database access
	•	🚦 Redirection from short code to original URL
	•	🐳 Docker support for database setup

⸻

📁 Tech Stack
	•	Backend: Node.js, Express.js
	•	Database: PostgreSQL + Drizzle ORM
	•	Auth: JWT
	•	Validation: Zod
	•	Utility: nanoid
	•	Container: Docker (optional)

⸻

🛠️ Getting Started

Follow these steps to run TrimLink locally.

⸻

1️⃣ Clone the Repository

git clone https://github.com/YasodharGubba05/TrimLink.git
cd TrimLink

2️⃣ Install Dependencies
pnpm install

3️⃣ Configure Environment Variables

Create a .env file in the project root:
DATABASE_URL=postgres://username:password@localhost:5432/trimlink
JWT_SECRET=your-secret-key
PORT=8000

4️⃣ Start PostgreSQL (Optional via Docker)

docker-compose up -d

5️⃣ Run Drizzle Migrations

pnpm drizzle-kit push

6️⃣ Start the Development Server

pnpm dev
