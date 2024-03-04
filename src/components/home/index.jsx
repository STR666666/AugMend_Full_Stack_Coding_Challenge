import React from 'react';
import { useAuth } from '../../contexts/authContext'; // Custom hook to access the authentication context
import SurveyComponent from '../../survey/SurveyComponent'; // Importing a custom SurveyComponent

// Home component definition
const Home = () => {
    const { currentUser } = useAuth(); // Destructuring to get currentUser from the auth context
    // currentUser could be used to conditionally render content or perform actions
    // based on the user's authentication status, but it's not directly used in this snippet.

    // Component's return statement rendering UI
    return (
        <div className='text-2xl font-bold pt-14'>
            <SurveyComponent />
        </div>
    );
}

export default Home;