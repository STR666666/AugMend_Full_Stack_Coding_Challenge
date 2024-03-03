import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import './login.css'; // Ensure this path is correct
import { Logo } from '../../Logo/Logo';
import google_icon from '../../Assets/google_chrome_icon.png'; // Ensure this path is correct
import facebook_icon from '../../Assets/facebook_icon.jpg'; // Ensure this path is correct

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
        <div className="page">
            <Logo></Logo>
            <div className="allelements">
                <div className="bigtext">Welcome back!</div>
                <div className="container">
                    <form onSubmit={onSubmit} className="left">
                        <div className="text">Email address</div>
                        <div className="webshop-input">
                            <input
                                type="email"
                                placeholder="student@gmail.edu"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text">Password</div>
                        <div className="webshop-input">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="webshop-signup">
                            <button type="submit" disabled={isSigningIn} className="button">
                                {isSigningIn ? 'Signing In...' : 'Let\'s go!'}
                            </button>
                        </div>
                    </form>
                    <div className="right">
                        <button onClick={onGoogleSignIn} disabled={isSigningIn} className="button-ext">
                            <img src={google_icon} alt="Continue with Google" width="40" />
                            <span>Continue with Google</span>
                        </button>
                        <button className="button-ext">
                            <img src={facebook_icon} alt="Continue with Facebook" width="40" />
                            <span>Continue with Facebook</span>
                        </button>
                        <div className="noaccques">
                            Don't have an account? <Link to={'/register'}>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
