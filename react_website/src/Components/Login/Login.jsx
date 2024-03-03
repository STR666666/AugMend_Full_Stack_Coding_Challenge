import React, { useState } from 'react';
import './Login.css';
import { Logo } from '../Logo/Logo';
import google_icon from '../Assets/google_chrome_logo.png';
import facebook_icon from '../Assets/facebook_logo.jpg';
import { GoogleLogin } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import { doSignInWithGoogle, doSignWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from '../../../contexts/authContext';

const clientId = "908871574694-acla8nrm33935unr11j8elvid4q6ea5p.apps.googleusercontent.com";

export const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      await doSignWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      await doSignInWithGoogle();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! User:", res.profileObj);
    // Optionally, handle successful login
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! Res:", res);
    setErrorMessage("Failed to log in with Google.");
  };

  return (
    <div className="page">
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}
      <Logo />
      <div className="allelements">
        <div className="bigtext">Welcome back!</div>
        <div className="container">
          <div className="left">
            <form onSubmit={onSubmit}>
              <div className="text">Email address</div>
              <div className="webshop-input">
                <input type="email" placeholder='student@ucsb.edu' onChange={onEmailChange} />
              </div>
              <div className="text">Password</div>
              <div className="webshop-input">
                <input type="password" placeholder='Password' onChange={onPasswordChange} />
              </div>
              <div className="webshop-input">
                <button type="submit" className="button">Let's go!</button>
              </div>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
          <div className="right">
            <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="button-ext">
                  <span>
                    <img src={google_icon} alt="Google" width="40" />
                    Continue with Google
                  </span>
                </button>
              )}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
            <div className="ext-webshop">
              <button className="button-ext" onClick={onGoogleSignIn}>
                <span>
                  <img src={facebook_icon} alt="Facebook logo" width="40" />
                  Continue with Facebook
                </span>
              </button>
            </div>
                       {/* Existing code */}
                       <div className="noaccques">Don't have an account?</div>
            <div className="webshop-signup">
              <button className="button" onClick={() => {/* Implement navigation to sign up page */}}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

