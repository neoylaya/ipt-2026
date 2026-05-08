# IPT-2026 Full Stack Project

A full-stack web application built with **Angular** (frontend) and **Node.js/TypeScript** (backend), featuring user authentication, role-based access control, and account management.

---

## Project Structure
ipt-2026/
├── frontend/   # Angular 21 client-side application
├── backend/    # Node.js + TypeScript REST API
└── README.md
---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm
- Angular CLI

---

## Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Open your browser and go to `http://localhost:4200/`

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Features

- User registration and login
- JWT-based authentication
- Role-based access control (Admin / User)
- Email verification and password reset
- Admin dashboard for account management
- Profile management

---

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | Angular 21, TypeScript  |
| Backend   | Node.js, TypeScript     |
| Auth      | JWT, Refresh Tokens     |
| Docs      | Swagger / OpenAPI       |