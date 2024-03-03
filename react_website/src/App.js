import React from 'react';
import './App.css';
import { Login } from './Components/Login/Login'; // Corrected import for Login
// import LoginButton from './Components/Login/Login.jsx'
import LogoutButton from './Components/Login/Logout.jsx'
import { useEffect } from 'react';
import { gapi } from 'gapi-script'
// import LogoutButton from './Components/Login/Logout'; // Imported but not used
// import { Signup } from './Components/Signup/Signup'; // Commented out

const clientId = "908871574694-acla8nrm33935unr11j8elvid4q6ea5p.apps.googleusercontent.com";

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };

    gapi.load('client:auth2', start);
  });
  return (
    <div className="App">
      <Login/>
      {/* <LoginButton /> */}
      {/* <LogoutButton />  */}
      {/* <Signup/> Uncomment if you want to use the Signup component */}
    </div>
  );
}

export default App;
