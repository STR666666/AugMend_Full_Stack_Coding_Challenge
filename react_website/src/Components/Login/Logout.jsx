import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "908871574694-acla8nrm33935unr11j8elvid4q6ea5p.apps.googleusercontent.com";

function LogoutButton() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out successfully', res);
    };

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    );
}

export default LogoutButton;
