# task-managment-app

Description
The Task Management App is a full-stack web application designed to help users manage their tasks efficiently. Users can create, read, update, and delete (CRUD) tasks, allowing them to stay organized and track their progress. This app is built using the MERN stack (MongoDB, Express, React, Node.js), and it showcases skills in both front-end and back-end development.

Features
Create new tasks with a title and description.
View all tasks in a task list.
Update tasks to mark them as completed or modify details.
Delete tasks from the list.
Responsive user interface built with React.
RESTful API for task management (CRUD operations) built with Node.js and Express.
MongoDB for persistent task storage.

Tech Stack
Front-End: React, HTML, CSS, JavaScript
Back-End: Node.js, Express.js
Database: MongoDB with Mongoose
Other Tools: Axios (for API requests), CORS, dotenv

Installation and Setup
Follow these steps to set up the project locally:

Clone the repository:
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app

Install server dependencies: Navigate to the root directory and install back-end dependencies:
npm install

Install client dependencies: Navigate to the client/ directory and install front-end dependencies:
cd client
npm install

Set up environment variables: Create a .env file in the root directory and add the following:
MONGO_URI=your-mongodb-uri
PORT=5000

Run the application: To run both the server and client together:
npm run dev

Open the app in your browser at http://localhost:3000.

Future Improvements
Add user authentication so users can log in and manage their own tasks.
Implement due dates and priority levels for tasks.
Add real-time notifications using WebSockets or similar technologies.
