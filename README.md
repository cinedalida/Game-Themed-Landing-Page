# Game-Themed Landing Page

**Technologies:**  
HTML, CSS, JavaScript, React.js, MySQL Workbench

---

## Functionality

- Login and Signup
- Responsive Design
- Animation

---

## Project Setup Instructions

### Frontend (React)

```bash
cd basic-login-signup/frontend
npm install     # Only if you haven't installed packages yet
npm run dev     # Starts the React development server
```

### Backend (Express + MySQL)

Create a .env file inside the backend folder and add your database connection details:

```Sql
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=your_password
DB_NAME=user_auth
PORT=3000
```

Run the backend server:

```bash
cd basic-login-signup/backend
npm install mysql2 dotenv     # Run only if you haven't already
node server.js                # Starts the backend server
```
