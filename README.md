# Modern Portfolio

A modern portfolio website built with FastAPI and React.

## Project Structure

- `backend/`: FastAPI backend
- `frontend/`: React frontend

## Setup Instructions

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.

2. Build and run the containers:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

To stop the containers:
```bash
docker-compose down
```

### Manual Setup

#### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
.\venv\Scripts\activate
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the backend server:
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

#### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Features

- Modern, responsive design
- Project showcase
- About me section
- Skills and technologies
- Contact information
- API documentation (available at `/docs` endpoint)

## Technologies Used

- Backend:
  - FastAPI
  - Pydantic
  - SQLAlchemy (ready for database integration)
  - CORS middleware

- Frontend:
  - React
  - Vite
  - React Router
  - Tailwind CSS
  - Framer Motion (for animations)
  - Axios

## Docker Configuration

The project uses Docker and Docker Compose for containerization:

- Backend container:
  - Python 3.11 slim image
  - FastAPI application
  - Hot-reload enabled for development

- Frontend container:
  - Multi-stage build with Node.js and Nginx
  - Production-ready build
  - Nginx configuration for SPA and API proxy 