
# 🎓 Aplikasi Manajemen Mahasiswa

Aplikasi fullstack untuk mengelola data mahasiswa perguruan tinggi, dibangun dengan:

- 💻 **Frontend**: React + Vite + Tailwind CSS
- ⚙️ **Backend**: Java Spring Boot (REST API)
- 📝 **Database**: H2 (in-memory, otomatis reset setiap restart)

---

## ✨ Fitur

- Tambah / Edit / Lihat / Hapus data mahasiswa
- Nama lengkap dihitung dari nama depan + nama belakang
- Usia dihitung otomatis dari tanggal lahir
- Antarmuka sederhana dan bersih menggunakan Tailwind CSS

---

## 📁 Struktur Proyek

```
student-app/
├── backend/        # REST API dengan Spring Boot
├── frontend/       # Frontend React + Vite + Tailwind
└── README.md
```

---

## 🚀 Memulai Proyek

### ✅ Prasyarat

- Node.js (versi 18 ke atas)
- Java JDK 17+
- Git
- IntelliJ untuk backend
- VS Code untuk frontend

---

## 🧠 Menjalankan Aplikasi Secara Lokal

### 🔧 1. Clone Repository

```bash
git clone https://github.com/HaritsDetya/student-app.git
cd student-app
```

---

### ⚙️ 2. Jalankan Backend (Spring Boot)

```bash
cd backend
./gradlew bootRun
```

> REST API tersedia di: `http://localhost:8080/students`  
> H2 Console (untuk debugging): `http://localhost:8080/h2-console`  
> Database default: H2 (in-memory)

---

### 🎨 3. Jalankan Frontend (React + Vite + Tailwind)

```bash
cd ../frontend
npm install
npm run dev
```

> Web app tersedia di: `http://localhost:5173`

---

## 🔁 API Endpoint

| Method | Endpoint           | Deskripsi             |
|--------|--------------------|------------------------|
| GET    | `/students`        | Menampilkan daftar mahasiswa |
| POST   | `/students`        | Menambahkan mahasiswa baru   |
| DELETE | `/students/{id}`   | Menghapus mahasiswa berdasarkan ID |

---

## 🧪 Contoh Data (POST `/students`)

```json
{
  "id": "22/504159/SV/21598",
  "namaDepan": "Muhammad",
  "namaBelakang": "Harits",
  "tanggalLahir": "1945-07-15"
}
```

---

## 🧩 Teknologi yang Digunakan

- React + Vite (Frontend)
- Tailwind CSS (Styling)
- Spring Boot (REST API)
- H2 Database (untuk pengembangan)
- Git + GitHub (Kontrol versi)
