# User Management API (Node.js + TypeScript + MVC)

A simple CRUD REST API built using **Node.js, Express, TypeScript, and MySQL** following the **MVC architecture pattern**.

---

# Features

* Create user
* Read all users
* Read user by ID
* Update user
* Delete user
* MVC structure (Model, Controller, Service, Route)
* MySQL database integration
* TypeScript support

---

# Tech Stack

* Node.js
* Express.js
* TypeScript
* MySQL
* mysql2

---

# 📁 Project Structure

```
src/
│
├── config/        # Database connection
├── models/        # Interfaces (User model)
├── services/      # Business logic (DB queries)
├── controllers/   # Request/Response handling
├── routes/        # API routes
├── app.ts         # Express app setup
└── server.ts      # Server entry point
```

---

# ⚙️ Installation

## 1. Clone project

```bash
git clone https://github.com/tolatim/user_management.git
cd user_management
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Setup database

Create MySQL database:

```sql
CREATE DATABASE test_db;

USE test_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  email VARCHAR(200)
);
```

---

## 4. Configure environment

Create `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=users_db
PORT=3000
```

---

## 5. Run project

### Development mode

```bash
npm run dev
```

---

# 📡 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Get all users   |
| GET    | /users/:id | Get user by ID  |
| POST   | /users     | Create new user |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

# 📦 Example Request

### Create User

```json
POST /users
Content-Type: application/json

{
  "name": "tola",
  "age": 20,
  "email": "tola@gmail.com"
}
```

---

# 📤 Example Response

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "tola",
    "age": 20,
    "email": "tola@gmail.com"
  }
}
```

---

# 🧠 MVC Architecture

* **Model** → Data structure (User interface)
* **Service** → Database logic (SQL queries)
* **Controller** → Handles request/response
* **Route** → API endpoints

---

# 📌 Notes

* `node_modules/` and `dist/` are ignored in `.gitignore`
* TypeScript compiles to JavaScript in `dist/`
* Express must use `express.json()` middleware

---

# 👨‍💻 Author

Made by **Tola**
