import React from 'react';
import { useAuth } from '../../contexts/authContext';
import SurveyComponent from '../../survey/SurveyComponent';

const Home = () => {
    const { currentUser } = useAuth();
    return (
        <div className='text-2xl font-bold pt-14'>
            <SurveyComponent />
            <div>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
        </div>
    );
}

export default Home;
