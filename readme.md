# HealthTech Prescription Management System

## Overview
A backend-based prescription management system built using Node.js, Express.js, SQLite3, JWT Authentication, and MVC architecture.

## Features
- User Registration
- User Login
- JWT Authentication
- Role-Based Authorization
- Prescription Creation
- Prescription Update
- Doctor Prescription View
- Patient Prescription View
- SQLite3 Database Integration

## Technologies Used
- Node.js
- Express.js
- SQLite3
- JWT
- bcryptjs
- dotenv

## Folder Structure
controllers/
models/
routes/
middleware/
database/

## Installation

npm install
npm run dev

## API Endpoints

### Auth Routes
POST /api/auth/register
POST /api/auth/login

### Prescription Routes
POST /api/prescriptions
PUT /api/prescriptions/:id
GET /api/prescriptions/doctor
GET /api/prescriptions/patient

## Screenshots
(Add screenshots here)