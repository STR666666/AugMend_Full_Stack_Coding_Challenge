import React from 'react'
import './Login.css'
import { Logo } from '../Logo/Logo'
import google_icon from '../Assets/google_chrome_logo.png'
// import apple_icon from '../Assets/Apple_logo_black.svg'
import facebook_icon from '../Assets/facebook_logo.jpg'
import { GoogleLogin } from 'react-google-login';

const clientId = "908871574694-acla8nrm33935unr11j8elvid4q6ea5p.apps.googleusercontent.com";

function login(){
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS!", res.profileObj);
  }
  const onFailure = (res) => {
    console.log("LOGIN Failed!", res);
  }

  return(
    <div id="signInButton">
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSIgnedIn={true}
      />

    </div>
  )
}

export default login

export const Login = () => {
  return (
    <div className="page">
      <Logo></Logo>
      <div className="allelements">
        <div className="bigtext">Welcome back!</div>
        <div className="container">
          <div className="left">
            <div className="text">Email address</div>
            <div className="Webshop" id="Webshop">
              <input 
                type="email"
                placeholder='student@ucsb.edu' />
            </div>
            <div className="text">Password</div>
            <div className="Webshop" id="Webshop">
              <input 
                type="password"
                placeholder='Password'
                 />
            </div>
            <div className="Webshop" id="Webshop">
              <button className="button">Let's go!</button>
            </div>
          </div>
          <div className="right">
              <div className="ExtWebshop" id="ExtWebshop">
                <button className="buttonExt">
                  <div className="Webshop" id="Webshop">
                    <img src={google_icon} alt="" width="40" />
                    <text>Continue with Google</text>
                  </div>
                </button>
              </div>
            <div className="ExtWebshop" id="ExtWebshop">
                <button className="buttonExt">
                  <div className="Webshop" id="Webshop">
                    <img src={facebook_icon} alt="" width="40" />
                    <text>Continue with Facebook</text>
                  </div>
                </button>
              </div>
            <div className="noaccques">Don't have an account?</div>
            <div className="Webshop2" id="Webshop2">
              <button className="button" >Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
