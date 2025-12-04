📌 User & Todo Management API (Node.js + Express + MongoDB)

A fully functional RESTful API built with Node.js, Express.js, MongoDB, and JWT authentication.
The system allows users to register, log in, view profile, and manage their todo tasks (create, list, update, delete).
This project follows MVC architecture, includes error handling, rate limiting, and supports pagination.

🚀 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcryptjs (password hashing)

dotenv (environment variables)

express-rate-limit (for auth route protection)

nodemon (development server)

📂 Project Structure
src/
│── config/
│     └── db.js
│── controllers/
│     ├── authController.js
│     ├── userController.js
│     └── todoController.js
│── middlewares/
│     ├── authMiddleware.js
│     ├── errorMiddleware.js
│     └── rateLimitMiddleware.js
│── models/
│     ├── User.js
│     └── Todo.js
│── routes/
│     ├── authRoutes.js
│     ├── userRoutes.js
│     └── todoRoutes.js
│── utils/
│     └── generateToken.js
└── server.js

🛠️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File

Create a .env file in the project root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/user_todo_db   # or your MongoDB Atlas URI
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

4️⃣ Start the Server
npm run dev


Server will run at:

http://localhost:5000

🔑 Authentication

This API uses JWT authentication.

After registering or logging in, you will receive:

{
  "token": "your_jwt_token"
}


Use it in all protected routes:

Authorization: Bearer <your_jwt_token>

📚 API Endpoints
🔐 Auth Routes
✅ 1. Register User

POST /api/auth/register

Request Body
{
  "name": "Manas",
  "email": "manas@example.com",
  "password": "123456"
}

Response
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "...",
    "name": "Manas",
    "email": "manas@example.com"
  }
}

✅ 2. Login User

POST /api/auth/login

Request Body
{
  "email": "manas@example.com",
  "password": "123456"
}

Response
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "id": "...",
    "name": "Manas",
    "email": "manas@example.com"
  }
}

👤 User Routes
✅ 3. Get User Profile

GET /api/user/profile
Protected Route

Headers
Authorization: Bearer <token>

Response
{
  "name": "Manas",
  "email": "manas@example.com"
}

📝 Todo Routes

(ALL routes below require JWT token)

✅ 4. Create Todo

POST /api/todos

Headers
Authorization: Bearer <token>

Body
{
  "title": "Build API",
  "description": "Finish assignment"
}

✅ 5. Get All Todos (Paginated)

GET /api/todos?page=1&limit=10

Headers
Authorization: Bearer <token>

Response
{
  "total": 1,
  "page": 1,
  "limit": 10,
  "totalPages": 1,
  "data": [ ...todos ]
}

✅ 6. Update Todo Status

PATCH /api/todos/:id

Body
{
  "status": "completed"
}

✅ 7. Delete Todo

DELETE /api/todos/:id

Response
{
  "message": "Todo deleted successfully"
}

🧩 Bonus Features

✔ MVC Folder Structure
✔ Error Handling Middleware
✔ Rate Limiting for Auth Routes
✔ Pagination on GET /todos
✔ dotenv for configuration
✔ JWT Authentication
✔ Clean and modular code


GitHub: https://github.com/your-username
