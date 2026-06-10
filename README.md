# JobSpring
# Job Portal

A full-stack MERN Job Portal application that connects job seekers and recruiters. Users can register, log in, post jobs, browse available opportunities, and manage their job listings through an intuitive web interface.

## FEATURES

### User Features

* User Registration and Login
* Secure Authentication
* Browse Available Jobs
* View Job Details
* Search and Filter Jobs
* Manage Personal Job Listings

### Recruiter Features

* Post New Job Openings
* View Posted Jobs
* Manage Job Listings
* Track Posted Opportunities

### System Features

* MongoDB Atlas Database
* RESTful API Architecture
* React Frontend with Vite
* Express.js Backend
* Responsive User Interface
* Environment Variable Configuration
* Render Deployment Support

## PROJECT STRUCTURE

```plaintext
jobportal/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Pages/
│   │   ├── Components/
│   │   ├── Router/
│   │   ├── context/
│   │   └── assets/
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── README.md
```

## TECHNOLOGIES USED

### Frontend

* React.js
* React Router DOM
* Vite
* Tailwind CSS
* React Hook Form

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

## SETUP INSTRUCTIONS

### 1. Clone Repository

```bash
git clone https://github.com/shivanianajipuram/jobportal.git
cd jobportal
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Backend Environment Setup

Create:

```plaintext
backend/.env
```

Add:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
```

### 4. Start Backend

```bash
npm start
```

Expected:

```plaintext
MongoDB connected
Server running on 5000
```

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Frontend Environment Setup

Create:

```plaintext
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:5000
```

For production:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### 7. Start Frontend

```bash
npm run dev
```

Frontend URL:

```plaintext
http://localhost:5173
```

## USER FLOW

### Registration

* Open Signup Page
* Enter Email and Password
* Create Account
* User stored in MongoDB

### Login

* Enter Credentials
* Authenticate User
* Redirect to Dashboard

### Job Posting

* Login as Recruiter
* Fill Job Details
* Submit Job Form
* Job stored in MongoDB

### Browse Jobs

* View Available Jobs
* Search Opportunities
* Access Job Information

### My Jobs

* View Jobs Posted By Current User
* Manage Existing Listings
# MERN Job Portal Deployment Guide

## 1. Clone Repository

```bash
git clone https://github.com/shivanianajipuram/jobportal.git
cd jobportal
```

Repository structure:

```plaintext
backend/
frontend/
README.md
```

---

# BACKEND DEPLOYMENT (RENDER)

## 2. Create Web Service

Render Dashboard

New +
→ Web Service

Connect GitHub Repository

Select:

```plaintext
jobportal
```

## 3. Backend Configuration

Root Directory:

```plaintext
backend
```

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

## 4. Environment Variables

Render Dashboard
→ Environment

Add:

```env
MONGO_URI=<mongodb atlas connection string>
PORT=5000
```

## 5. Important Backend Fixes

### package.json must contain:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```
## deploy it

## 6. Verify Backend

Open:

```plaintext
https://backend-url.onrender.com/
```
copy the url

Open:

```plaintext
https://backend-url.onrender.com/all-jobs
```

Expected:

```json
[]
```

or 
[] some data inside it 

job data.

---

# FRONTEND DEPLOYMENT (RENDER)

## 7. Create Static Site

Render Dashboard

New +
→ Static Site

Repository:

```plaintext
jobportal
```

## 8. Frontend Configuration

Root Directory:

```plaintext
frontend
```

Build Command:

```bash
npm install && npm run build
```

Publish Directory:

```plaintext
dist
```

## 9. Frontend Environment Variable- create .env file and then 

Add:

```env
VITE_API_URL=https://backend-url.onrender.com
```
---


# IMPORTANT CODE CHANGES

Create:

```plaintext
src/config.js
```

```js
const BASE_URL = import.meta.env.VITE_API_URL;

export default BASE_URL;
```

Use everywhere:

```js
import BASE_URL from "../config";
```

Examples:

```js
fetch(`${BASE_URL}/login`)
fetch(`${BASE_URL}/signup`)
fetch(`${BASE_URL}/post-job`)
fetch(`${BASE_URL}/all-jobs`)
fetch(`${BASE_URL}/my-jobs/${email}`)
```

Never use:

```js
http://localhost:5000
```

in deployed code.

---

# BEFORE DEPLOYING FRONTEND

Search entire project:

```plaintext
localhost:5000
```

Replace every occurrence.

Search:

```plaintext
BASE_URL
```

Ensure every file:
defines:

```js
const BASE_URL = import.meta.env.VITE_API_URL;
```

---
if frontend is deployed separately.

---

## Error

```plaintext
Cannot GET /login
```

Normal.

Login route accepts POST requests only.

---

# FINAL TESTING

After deployment:

1. Signup
2. Login
3. Post Job
4. View All Jobs
5. View My Jobs
6. Refresh Pages
7. Check MongoDB Atlas collections

Expected collections:

```plaintext
users
jobs
```

If all work, deployment is successful.



## LIVE DEMO

Frontend:

https://jobportal-0xvg.onrender.com

Backend API:

https://jobportal-backend-ibpj.onrender.com

