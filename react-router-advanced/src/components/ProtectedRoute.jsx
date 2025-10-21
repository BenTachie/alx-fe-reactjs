import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated auth check 
const isAuthenticated = false; // Change to true to simulate logged-in user

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    alert('You must be logged in to access this page!');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
