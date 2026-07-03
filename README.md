# 🚀 Leapify — Campus Opportunity Hub

Leapify is a full-stack platform designed to centralize campus opportunities such as hackathons, internships, workshops, scholarships, competitions, and club recruitments in one place.

Students can discover and bookmark opportunities relevant to them, while organizers can create and manage opportunity postings through a dedicated dashboard.

---

## 🌐 Live Demo

Frontend: https://leapify-beta.vercel.app

Backend API: https://leapify-api.onrender.com

---

## ✨ Features

### 👨‍🎓 Student Features
- Browse all available opportunities
- Search opportunities by title, organizer, or keyword
- Filter opportunities by category
- View detailed opportunity information
- Bookmark opportunities for later reference
- Authentication and secure access

### 🏢 Organizer Features
- Create new opportunities
- Upload banner images using Cloudinary
- Edit existing opportunities
- Delete opportunities
- Manage all posted opportunities through a dashboard

### 🔒 Authentication
- JWT-based authentication
- Role-based authorization
- Separate permissions for Students and Organizers

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Inline CSS Styling
- Vite

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

### Authentication
- JWT Authentication
- bcrypt Password Hashing

### Media Storage
- Cloudinary

### Deployment
- Vercel (Frontend)
- Render (Backend)
- Neon PostgreSQL (Database)

---

## 🏗️ System Architecture

```text
React Frontend (Vercel)
        │
        │ REST API Requests
        ▼
Node + Express Backend (Render)
        │
        ├── PostgreSQL Database (Neon)
        │
        └── Cloudinary Image Storage
```

---

## 📂 Project Structure

```text
Leapify/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── prisma/
│   ├── src/
│   └── ...
│
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend

```env
VITE_API_URL=
```

### Backend

```env
DATABASE_URL=
JWT_SECRET=

CLIENT_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 🧩 Future Improvements

- Email notifications for upcoming deadlines
- Admin approval system for organizer accounts
- Opportunity analytics dashboard
- Pagination and advanced filtering
- Application tracking system
- Saved search alerts
- Dark mode support

---


- GitHub: https://github.com/rakshaa10
- LinkedIn: Add your LinkedIn profile here

---
