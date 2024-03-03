import React from 'react';
import './Login.css';
import { Logo } from '../Logo/Logo';
import google_icon from '../Assets/google_chrome_logo.png';
import facebook_icon from '../Assets/facebook_logo.jpg';
import { GoogleLogin } from 'react-google-login';

const clientId = "908871574694-acla8nrm33935unr11j8elvid4q6ea5p.apps.googleusercontent.com";

export const Login = () => {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! User:", res.profileObj);
    // Here, handle successful login (e.g., update state, redirect, etc.)
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! Res:", res);
    // Handle login failure
  };

  return (
    <div className="page">
      <Logo />
      <div className="allelements">
        <div className="bigtext">Welcome back!</div>
        <div className="container">
          <div className="left">
            <div className="text">Email address</div>
            <div className="webshop-input">
              <input type="email" placeholder='student@ucsb.edu' />
            </div>
            <div className="text">Password</div>
            <div className="webshop-input">
              <input type="password" placeholder='Password' />
            </div>
            <div className="webshop-input">
              <button className="button">Let's go!</button>
            </div>
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
              <button className="button-ext">
                <span>
                  <img src={facebook_icon} alt="Facebook logo" width="40" />
                  Continue with Facebook
                </span>
              </button>
            </div>
            <div className="noaccques">Don't have an account?</div>
            <div className="webshop-signup">
              <button className="button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
