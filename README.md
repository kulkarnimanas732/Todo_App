# 📌 User & Todo Management API (Node.js + Express + MongoDB)

A complete RESTful API for **User Authentication** and **Todo Management**, built using:

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs
* MVC Architecture

---

# 🚀 Features

### 👤 User Module

* Register
* Login
* Get Profile

### 📝 Todo Module

* Create Todo
* Get Todos (with pagination)
* Update Todo status
* Delete Todo

### 🔒 Security Features

* JWT Auth
* Password hashing
* Rate limiting
* Error handling middleware

---

# 📁 Project Structure

```bash
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
```

---

# 🛠️ Setup & Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env` File

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/user_todo_db
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
```

---

## 4️⃣ Start the Server

```bash
npm run dev
```

Server starts at:

```bash
http://localhost:5000
```

---

# 🔑 Authentication Header

```bash
Authorization: Bearer <your_token>
```

---

# 📚 API Endpoints

---

# 🔐 Auth Routes

## 1. Register User

```bash
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Manas",
  "email": "manas@example.com",
  "password": "123456"
}
```

---

## 2. Login User

```bash
POST /api/auth/login
```

### Request Body

```json
{
  "email": "manas@example.com",
  "password": "123456"
}
```

---

# 👤 User Routes

## Get Profile (Protected)

```bash
GET /api/user/profile
```

Header:

```bash
Authorization: Bearer <token>
```

---

# 📝 Todo Routes

## Create Todo

```bash
POST /api/todos
```

### Body:

```json
{
  "title": "Build API",
  "description": "Finish assignment"
}
```

---

## Get All Todos

```bash
GET /api/todos?page=1&limit=10
```

---

## Update Todo Status

```bash
PATCH /api/todos/:id
```

### Body:

```json
{
  "status": "completed"
}
```

---

## Delete Todo

```bash
DELETE /api/todos/:id
```

---

# 📄 Postman / Thunder Client Collection

Included in repo:

```bash
postman/UserTodoAPI.postman_collection.json
```

Import this into Postman to test APIs.

---

# 🖼 Screenshots

Screenshots of Postman responses (Register, Login, Profile, Todo CRUD) are **shared via email**, as requested.

---

# 🧩 Bonus Features Implemented

```bash
✓ JWT Authentication
✓ Password Hashing
✓ Rate Limiting
✓ Pagination
✓ Error Handling Middleware
✓ MVC Architecture
```

---

