# Medical Report Analyzer

A full-stack web application for uploading, managing, and analyzing medical reports. Built with a modern React frontend and a Node.js/Express backend, with MongoDB for data storage. Includes authentication, file uploads, and a professional UI/UX.

## Features
- User authentication (Sign Up, Login, Profile management)
- Upload and manage medical reports (PDF, images)
- Dashboard for users to view and manage their reports
- Interactive FAQ and chatbot
- Responsive, modern UI with Tailwind CSS
- Dockerized for easy deployment

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express, Mongoose, JWT, Multer
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- Docker & Docker Compose (for containerized setup)
- MongoDB (if running locally without Docker)

### Local Development

#### 1. Clone the repository
```sh
git clone https://github.com/m0emEn/Medical-report-.git
cd Medical-report-
```

#### 2. Backend Setup
```sh
cd backend
npm install
# Create a .env file with the following variables:
# MONGO_URI=mongodb://localhost:27017/medreport
# JWT_SECRET=your_jwt_secret
npm run dev
```

#### 3. Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

#### 4. Access the app
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Dockerized Setup

1. Build and start all services:
   ```sh
   docker-compose up --build
   ```
2. Access the app:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Environment Variables
- Backend: Set in `docker-compose.yml` or `.env` file
- Frontend: (if needed) set in `.env` and rebuild

### File Uploads
- Uploaded files are stored in `backend/uploads/` (mounted as a Docker volume)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

**Repository:** [https://github.com/m0emEn/Medical-report-.git](https://github.com/m0emEn/Medical-report-.git) 