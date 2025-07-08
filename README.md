
# 🎓 Student Management App

A fullstack application for managing college student records, built with:

- 💻 **Frontend**: React + Vite + Tailwind CSS
- ⚙️ **Backend**: Java Spring Boot (REST API)
- 🧪 **Database**: H2 (in-memory, auto-reset on restart)

---

## ✨ Features

- Add / View / Delete student data
- Student full name calculated from first + last name
- Age auto-calculated from birth date
- Simple and clean interface using Tailwind CSS

---

## 📁 Project Structure

```
student-app/
├── backend/        # Spring Boot REST API
├── frontend/       # React + Vite + Tailwind frontend
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- Java JDK 17+
- Git
- IntelliJ for backend
- VS Code for frontend

---

## 🧠 Run the Application Locally

### 🔧 1. Clone this Repository

```bash
git clone https://github.com/HaritsDetya/student-app.git
cd student-app
```

---

### ⚙️ 2. Run Backend (Spring Boot)

```bash
cd backend
./gradlew bootRun
```

> REST API available at: `http://localhost:8080/students`  
> H2 Console (for debug): `http://localhost:8080/h2-console`  
> Default DB: H2 (in-memory)

---

### 🎨 3. Run Frontend (React + Vite + Tailwind)

```bash
cd ../frontend
npm install
npm run dev
```

> Web app available at: `http://localhost:5173`

---

## 🔁 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/students`        | Get list of students |
| POST   | `/students`        | Add a new student    |
| DELETE | `/students/{id}`   | Delete student by ID |

---

## 🧪 Sample Payload (POST `/students`)

```json
{
  "id": "22/504159/SV/21598",
  "namaDepan": "Muhammad",
  "namaBelakang": "Harits",
  "tanggalLahir": "1945-07-15"
}
```

---

## 🧩 Tech Stack

- React + Vite (Frontend)
- Tailwind CSS (Styling)
- Spring Boot (REST API)
- H2 Database (for development)
- Axios (HTTP calls)
- Git + GitHub (Version Control)

---

## 📄 License

This project is open source and available under the MIT License.
