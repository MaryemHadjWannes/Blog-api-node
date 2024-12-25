# Node.js Tutorial: Blog API with User Authentication, Posts, and Comments

Welcome to this tutorial on building a Blog API with Node.js, MongoDB, and Express. In this guide, you’ll learn how to create a RESTful API where users can register, log in, create posts, and add comments.

## 🚀 Features
- **User Authentication**: Users can register and log in using their email and password.
- **CRUD Operations**: Users can create, read, update, and delete posts.
- **Comments**: Users can add comments to posts.
- **RESTful API**: The backend follows RESTful principles.

## 💻 Prerequisites
Before starting, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (either locally or using MongoDB Atlas)
- Postman (for testing API endpoints)
- Git (optional, for version control)

## 🛠️ Installation

### Clone the repository:
If you haven’t already, clone the project to your local machine:

```bash
git clone https://github.com/MaryemHadjWannes/Blog-api-node.git
```

### Install dependencies:
Navigate to the project folder and install the required packages:

```bash
cd Blog-api-node
npm install
```

### Create a `.env` file:
In the root of the project, create a `.env` file and add the following environment variables:

```bash
MONGO_URI=mongodb://localhost:27017/blog
JWT_SECRET=your-secret-key
```

- Replace `MONGO_URI` with your MongoDB connection string (local or from MongoDB Atlas).
- Replace `JWT_SECRET` with a secure key for signing JSON Web Tokens.

### Start the project:
After setting up, start the server:

```bash
npm start
```

This will start your Node.js server on `http://localhost:5000` by default.

## 📚 API Endpoints

### Authentication Routes
#### POST `/auth/register`: Register a new user.
**Request body:**
```json
{
    "username": "Maryem",
    "email": "maryem2@gmail.com",
    "password": "1999" 
}
```
![image](https://github.com/user-attachments/assets/05e6d4bf-f8ef-4dc9-8e2c-0bac00ca02ca)


#### POST `/auth/login`: Log in and get a JWT token.
**Request body:**
```json
{
    "email": "maryem2@gmail.com",
    "password": "1999" 
}
```
![image](https://github.com/user-attachments/assets/b2f39ae3-bc5f-468b-82a8-a7ff1bdbfd38)


### Post Routes
#### POST `/posts/create`: Create a new post (requires authentication).
**Request body:**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of the post." 
}
```
![image](https://github.com/user-attachments/assets/0daefc8e-7fd6-4446-8a42-3b425c350413)


#### GET `/posts`: Retrieve all posts.
![image](https://github.com/user-attachments/assets/bc71a513-6137-4777-ab3b-962f95601287)


### Comment Routes
#### POST `/comments/create/:postId`: Add a comment to a specific post (requires authentication).
**Request body:**
```json
{
  "content": "This is a new comment"
}
```
![image](https://github.com/user-attachments/assets/8a10d4be-79ee-43ae-97d3-823abdf6fb10)


## 🧪 Testing the API
You can test the API using Postman or any other API testing tool. Below are the key steps:

1. Register a new user by sending a POST request to `/auth/register`.
2. Login with the new user’s credentials to obtain a JWT token.
3. Use this token to create posts and add comments via the API routes.
