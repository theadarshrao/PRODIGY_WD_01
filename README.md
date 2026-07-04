# PRODIGY_WD_01
🔐 Secure User Authentication System built with HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, JWT, and bcrypt. Features secure user registration, login, password hashing, protected routes, and a responsive, modern interface. 

# 🔐 Secure User Authentication System

A modern and secure user authentication web application developed as part of the **Prodigy InfoTech Web Development Internship – Task 1**.

This project enables users to **register**, **log in securely**, and **access protected pages** only after successful authentication. Passwords are securely hashed using **bcrypt**, while **JWT (JSON Web Token)** is used for authentication and authorization.

---

## 🚀 Features

* 👤 User Registration
* 🔑 Secure Login
* 🔒 Password Hashing with bcrypt
* 🛡️ JWT Authentication
* 🚪 Logout Functionality
* 🔐 Protected Routes
* 📱 Responsive Design
* 🎨 Modern & Colorful User Interface
* ⚡ Fast and Lightweight

---

## 🛠️ Tech Stack

### Frontend

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript

### Backend

* 🟢 Node.js
* 🚂 Express.js

### Database

* 🍃 MongoDB
* 📦 Mongoose

### Security

* 🔐 bcrypt
* 🛡️ JWT (JSON Web Token)
* 🔑 dotenv

---

## 📂 Project Structure

```text
Secure-User-Authentication/
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── models/
├── routes/
├── controllers/
├── middleware/
├── config/
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 📌 Project Flow

```text
        👤 User
           │
           ▼
    📝 Register Account
           │
           ▼
    ✅ Validate Input
           │
           ▼
 🔒 Hash Password (bcrypt)
           │
           ▼
   🍃 Store in MongoDB
           │
           ▼
      🔑 User Login
           │
           ▼
   🔍 Verify Credentials
           │
           ▼
   🛡️ Generate JWT Token
           │
           ▼
     💾 Save Token
           │
           ▼
   🔐 Access Dashboard
           │
           ▼
        🚪 Logout
```

---

## ⚙️ Installation

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/secure-user-authentication.git
```

2️⃣ Open the project

```bash
cd secure-user-authentication
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5️⃣ Start the server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

This project helped in understanding:

* 🔐 Authentication & Authorization
* 🔑 JWT Implementation
* 🔒 Password Encryption
* 🌐 REST APIs
* 🍃 MongoDB Integration
* ⚡ Express.js Routing
* 🧩 Middleware
* 📱 Responsive Web Design

---

## 📸 Screens

* 🏠 Landing Page
* 🔑 Login Page
* 📝 Register Page
* 📊 Dashboard

---

## 🌟 Future Improvements

* 📧 Email Verification
* 🔄 Forgot Password
* 👤 User Profile
* 📷 Profile Picture Upload
* 🌙 Dark Mode
* 🔔 Toast Notifications
* 🔑 Google Authentication
* 🐙 GitHub Authentication
* 👑 Admin Dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Adarsh Rao**

⭐ If you found this project useful, don't forget to **Star ⭐ the repository** and share it with others!
