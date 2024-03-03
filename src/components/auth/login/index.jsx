import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import './login.css'; // Make sure this path is correct
import { Logo } from '../../Logo/Logo';
import googleIcon from '../../Assets/google_chrome_icon.png'; // Update with the correct path

export const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
            }
            setIsSigningIn(false);
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
            }
            setIsSigningIn(false);
        }
    };

    if (userLoggedIn) {
        return <Navigate to={'/home'} replace={true} />;
    }

    return (
        <div className="login-wrapper">
            <Logo> </Logo>

            <main className="login-main">
                <div className="login-box">
                    <h3 className="login-title">Welcome Back</h3>
                    <form onSubmit={onSubmit} className="login-form">
                        <label className="login-label">Email</label>
                        <input
                            type="email"
                            autoComplete='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />

                        <label className="login-label">Password</label>
                        <input
                            type="password"
                            autoComplete='current-password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />

                        {errorMessage && (
                            <div className="login-error">{errorMessage}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="login-submit"
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="login-signup-link">Don't have an account? <Link to={'/register'}>Sign up</Link></p>
                    <div className="login-divider">
                        <span className="login-or">OR</span>
                    </div>
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

export default Login;
