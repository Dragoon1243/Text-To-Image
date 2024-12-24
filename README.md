# Text-To-Image

## Description

Text-To-Image is a full-stack AI SaaS application that enables users to generate images from text prompts using the ClipDrop API. The application incorporates user authentication, a credit system for image generation, and is built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Authentication**: Secure registration and login functionality.
- **Image Generation**: Convert text prompts into images using the ClipDrop API.
- **Credit System**: Users have a credit balance to generate images; additional credits can be purchased (payment gateway integration pending).

## Tech Stack

- **Frontend**: React, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: ClipDrop API

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

### Frontend Setup

1. **Initialize Project with Vite**:
   ```bash
   npm create vite@latest
   ```
   - Select framework: React
   - Select variant: JavaScript

2. **Navigate to Project Directory**:
   ```bash
   cd your_project_name
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

5. **Configure Tailwind CSS**:
   - In `tailwind.config.js`, set the `content` paths:
     ```javascript
     module.exports = {
       content: [
         "./index.html",
         "./src/**/*.{js,jsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
   - In `src/index.css`, include:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

6. **Install React Router DOM**:
   ```bash
   npm install react-router-dom
   ```

7. **Install Framer Motion**:
   ```bash
   npm install framer-motion
   ```

### Backend Setup

1. **Navigate to Server Directory**:
   ```bash
   cd server
   ```

2. **Initialize Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:
   ```bash
   npm install express cors dotenv nodemon form-data jsonwebtoken mongoose axios bcrypt
   ```

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
```

### Running the Application

1. **Start the Backend Server**:
   ```bash
   npm run server
   ```

2. **Start the Frontend**:
   ```bash
   npm start
   ```

## Usage

- **Register/Login**: Create a new account or log in with existing credentials.
- **Generate Images**: Input text prompts to generate images.
- **Manage Credits**: Monitor and purchase credits for image generation (payment gateway integration pending).

## Project Structure

```
Text-To-Image/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.jsx
│       └── index.jsx
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
