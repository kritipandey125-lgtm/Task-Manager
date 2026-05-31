# Task Manager

A full-stack Task Management application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application enables users to create, manage, update, and track tasks through a clean and responsive interface.

## Overview

Task Manager is designed to help users organize their work efficiently by providing task creation, status tracking, and priority management features. The application follows a client-server architecture with a React frontend communicating with a RESTful Express API backed by MongoDB.

## Features

* Create new tasks
* View all tasks in a structured layout
* Update task status (To Do, In Progress, Done)
* Set task priority levels
* Delete tasks
* Real-time UI updates
* RESTful API integration
* MongoDB data persistence
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub
* Nodemon

## Project Architecture

```text
task-manager/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backened/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/tasks     | Fetch all tasks   |
| POST   | /api/tasks     | Create a new task |
| PUT    | /api/tasks/:id | Update a task     |
| DELETE | /api/tasks/:id | Delete a task     |

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/kritipandey125-lgtm/task-manager.git
cd task-manager
```

### Backend Setup

```bash
cd backened
npm install
npm run dev
```

The backend server will start on:

```text
http://localhost:5000
```

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend application will start on:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Screenshots

Add screenshots of your application here after deployment.

Example:

```markdown
![Dashboard](screenshots/dashboard.png)
```

## Future Enhancements

* User Authentication (JWT)
* Task Editing
* Due Date Management
* Search & Advanced Filtering
* Drag-and-Drop Task Board
* Notifications & Reminders
* Dark Mode Support
* Cloud Deployment

## Learning Outcomes

This project demonstrates:

* REST API development with Express.js
* MongoDB database integration using Mongoose
* React state management with Hooks
* Frontend-backend communication using Axios
* CRUD application development
* Git and GitHub version control

## Author

**Kriti Pandey**

GitHub: https://github.com/kritipandey125-lgtm

---

If you found this project useful, consider giving the repository a ⭐ on GitHub.

<img width="1609" height="925" alt="image" src="https://github.com/user-attachments/assets/5ecd90a1-89c1-47c5-9b0e-a1414f79a4aa" />
<img width="1589" height="850" alt="image" src="https://github.com/user-attachments/assets/c25d6fb3-9bd0-4a05-a290-a18636e80d66" />

