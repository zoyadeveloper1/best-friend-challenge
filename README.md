# 💖 Best Friend Challenge

An interactive quiz application where two friends can create a quiz room, share a room code, answer questions, and compare their results.

## 🚀 Features

* 🎮 Create Quiz Room
* 🔑 Generate unique Room Code
* 📋 Copy and share Room Code
* ✏️ Create custom quiz questions
* 🚪 Join Quiz using Room Code
* 👤 Participant management
* ⏱️ 30-second countdown timer
* 🔒 Answer submission and locking
* 📝 Multiple-choice questions
* 🏆 Automatic score calculation
* 📊 Match percentage
* ✅ Correct/Wrong answer review
* 📱 Responsive user interface

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* React Router
* Axios
* Bootstrap
* CSS

### Backend

* Python
* Django
* Django REST Framework
* SQLite

## 📂 Project Structure


best-friend-challenge/
├── backend/
│   ├── manage.py
│   ├── config/
│   └── quiz/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md

⚙️ Backend Setup

Open a terminal:

cd backend

Create a virtual environment:


python -m venv venv


Activate it on Windows:


venv\Scripts\activate


Install dependencies:


pip install -r requirements.txt


Run migrations:


python manage.py migrate


Start the backend server:


python manage.py runserver

Backend:


http://127.0.0.1:8000/


💻 Frontend Setup

Open a second terminal:


cd frontend

Install dependencies:


npm install


Start the frontend:


npm run dev


Frontend:


http://localhost:5173/


 🎯 How to Use

 1. Create a Room

Click **Create Room** to generate a unique room code.

 2. Create Quiz

Add questions, four options, and the correct answer.

 3. Share Room Code

Copy the generated room code and share it with your friend.

 4. Join Room

Enter your name and the room code to join.

 5. Play Quiz

Answer each question before the countdown timer expires.

 6. View Result

The result page displays:

* Total Questions
* Correct Answers
* Match Percentage
* Selected Answers
* Correct Answers

 🔌 API Endpoints

| Method | Endpoint             | Purpose           |
| ------ | -------------------- | ----------------- |
| GET    | `/api/rooms/`        | List rooms        |
| POST   | `/api/rooms/`        | Create room       |
| GET    | `/api/questions/`    | List questions    |
| POST   | `/api/questions/`    | Create question   |
| GET    | `/api/participants/` | List participants |
| POST   | `/api/participants/` | Join room         |
| GET    | `/api/answers/`      | List answers      |
| POST   | `/api/answers/`      | Submit answer     |

 🧪 Testing

The application was tested for:

* Room creation
* Room code generation
* Room code validation
* Quiz question creation
* Participant joining
* Invalid room handling
* Question loading
* Answer submission
* Countdown timer
* Result calculation
* Match percentage
* Responsive UI
* API communication

A detailed QA Testing Report is included separately.

 📌 Requirements

* Python 3.x
* Node.js
* npm
* Git

 

GitHub: https://github.com/zoyadeveloper1

📄 License

This project was developed as a technical assignment/demo project.
