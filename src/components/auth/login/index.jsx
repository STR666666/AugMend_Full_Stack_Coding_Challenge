// Import statements
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom'; // Navigate for redirection, Link for routing
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'; // Firebase authentication functions
import { useAuth } from '../../../contexts/authContext';
import './login.css';
import { Logo } from '../../Logo/Logo'; // Logo component
import googleIcon from '../../Assets/google_chrome_icon.png'; // Google icon for the sign-in button

// Login component definition
export const Login = () => {
    const { userLoggedIn } = useAuth(); // Destructuring to get the userLoggedIn state from the auth context

    // State hooks for managing email, password, signing-in status, and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Handler for submitting the email/password form
    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!isSigningIn) { // Check if not already signing in
            setIsSigningIn(true); // Set signing-in status to true
            try {
                await doSignInWithEmailAndPassword(email, password); // Attempt to sign in with email and password
            } catch (error) {
                setErrorMessage(error.message); // Set error message if sign-in fails
            }
            setIsSigningIn(false); // Reset signing-in status
        }
    };

    // Handler for Google sign-in button click
    const onGoogleSignIn = async (e) => {
        e.preventDefault(); // Prevent default button click behavior
        if (!isSigningIn) { // Check if not already signing in
            setIsSigningIn(true); // Set signing-in status to true
            try {
                await doSignInWithGoogle(); // Attempt to sign in with Google
            } catch (error) {
                setErrorMessage(error.message); // Set error message if sign-in fails
            }
            setIsSigningIn(false); // Reset signing-in status
        }
    };

    // Redirect to the home page if the user is already logged in
    if (userLoggedIn) {
        return <Navigate to={'/home'} replace={true} />;
    }

    // Login form UI
    return (
        <div className="login-wrapper">
            <Logo /> {/* Logo component */}

            <main className="login-main">
                <div className="login-box">
                    <h3 className="login-title">Welcome Back</h3>
                    <form onSubmit={onSubmit} className="login-form">
                        {/* Email input field */}
                        <label className="login-label">Email</label>
                        <input
                            type="email"
                            autoComplete='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />

                        {/* Password input field */}
                        <label className="login-label">Password</label>
                        <input
                            type="password"
                            autoComplete='current-password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />

                        {/* Error message display */}
                        {errorMessage && (
                            <div className="login-error">{errorMessage}</div>
                        )}

                        {/* Sign-in button */}
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="login-submit"
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    {/* Link to the registration page */}
                    <p className="login-signup-link">Don't have an account? <Link to={'/register'}>Sign up</Link></p>
                    <div className="login-divider">
                        <span className="login-or">OR</span>
                    </div>
                    {/* Google sign-in button */}
                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className="login-google-btn"
                    >
                        <img src={googleIcon} alt="Google" className="google-icon" />
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login; // Export the Login component for use in other parts of the application
