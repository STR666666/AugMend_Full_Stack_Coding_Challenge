// Imports
import React from 'react';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  // Route definitions
  const routesArray = [
    { path: "*", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
  ];
  
  // Use the useRoutes hook to dynamically render routes
  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider> {/* Context provider for auth state */}
      <Header /> {/* Static header component */}
      <div className="w-full h-screen flex flex-col"> {/* Main content container */}
        {routesElement} {/* Rendered routes */}
      </div>
    </AuthProvider>
  );
}

export default App;