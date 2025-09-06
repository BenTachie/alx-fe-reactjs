# 📘 Fundamentals and Core Concepts of React

This project introduces the fundamentals of React by guiding learners through the creation and modification of basic React applications and components. It is designed as part of the ALX Frontend React program to provide a solid foundation in building dynamic and reusable UI components with React.

## 🚀 Project Overview

- By working on this project, you will gain practical experience in:
- Setting up a React application using Vite
- Understanding JSX and ReactDOM
- Creating and managing React components
- Passing and displaying data through props
- Assembling multiple components into a functional application

## 📂 Repository Structure
```
alx-fe-reactjs/
└── alx-react-app/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── WelcomeMessage.jsx
    │   │   ├── Header.jsx
    │   │   ├── MainContent.jsx
    │   │   ├── Footer.jsx
    │   │   └── UserProfile.jsx
    │   └── assets/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🛠️ Getting Started
```
1. Clone the repository
git clone https://github.com/<your-username>/alx-fe-reactjs.git
cd alx-fe-reactjs/alx-react-app

2. Install dependencies
npm install

3. Run the development server
npm run dev

Visit the app in your browser at: http://localhost:5173
```

## 📚 Implemented Tasks

### ✅ 1. Setup React App
- Scaffolded a new React project using Vite
- Verified development server on port 5173

### ✅ 2. JSX Fundamentals
- Created WelcomeMessage component
- Modified JSX to include:
- Hello everyone, I am learning React at ALX!
- Added a paragraph: I am learning about JSX!

### ✅ 3. Creating Specific Components
- Built and integrated:
- Header.jsx
- MainContent.jsx
- Footer.jsx
- Rendered in order within App.jsx

### ✅ 4. User Profile Card with Props
- Created UserProfile.jsx
-Displayed:Name, Age, Bio
- Integrated into App.jsx with sample props:
```
<UserProfile 
  name="Alice" 
  age="25" 
  bio="Loves hiking and photography" 
/>
```

## 🧪 How to Test
- Run the dev server: npm run dev
- Confirm the following are visible:
 ```
   Welcome message with JSX updates

  Header, Main content, and Footer

  User profile card showing Name, Age, Bio
```

## 🌟 Learning Outcomes
- By completing this project, you will:
- Understand how React components work
- Use JSX to structure UI elements
- Pass data using props
- Build a small but functional React application

>✨ “Every great app begins with a single component.”
