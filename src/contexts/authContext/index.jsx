import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase"; // Importing the Firebase auth service
// import { GoogleAuthProvider } from "firebase/auth"; // Import commented out for Google auth provider
import { onAuthStateChanged } from "firebase/auth"; // To listen for changes in user auth state

const AuthContext = React.createContext(); // Creating a new React context for auth

export function useAuth() {
  // Custom hook to allow easy use of the context
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // The provider component that wraps part of the app needing auth state
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user object
  const [userLoggedIn, setUserLoggedIn] = useState(false); // State to track if a user is logged in
  const [isEmailUser, setIsEmailUser] = useState(false); // State to check if the user used email/password auth
  const [isGoogleUser, setIsGoogleUser] = useState(false); // State for Google user, currently unused
  const [loading, setLoading] = useState(true); // Loading state to handle async operations

  useEffect(() => {
    // Effect to attach listener for auth state changes
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    // Function to initialize user state upon auth state change
    if (user) {
      setCurrentUser({ ...user }); // Set the current user if logged in

      // Check if the user authenticated via email/password
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      // Code to check for Google sign-in is commented out
      setUserLoggedIn(true); // Indicate that a user is logged in
    } else {
      setCurrentUser(null); // Reset user state if not logged in
      setUserLoggedIn(false); // Indicate no user is logged in
    }

    setLoading(false); // Indicate loading is complete
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} // Render children when not loading
    </AuthContext.Provider>
  );
}
