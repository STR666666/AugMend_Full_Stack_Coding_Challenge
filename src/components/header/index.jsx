// Import statements
import React from 'react'
import { Link, useNavigate } from 'react-router-dom' // React Router hooks for navigation and linking
import { useAuth } from '../../contexts/authContext' // Custom hook to access authentication context
import { doSignOut } from '../../firebase/auth' // Firebase authentication function to sign out

// Header component definition
const Header = () => {
    const navigate = useNavigate() // Hook to programmatically navigate users
    const { userLoggedIn } = useAuth() // Destructuring to get the userLoggedIn state from the auth context

    // Navigation bar UI
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            {
                // Conditional rendering based on user authentication status
                userLoggedIn
                    ? // If the user is logged in, show the logout button
                    <>
                        <button onClick={() => { 
                            doSignOut().then(() => { 
                                navigate('/login') // Navigate to login page after signing out
                            }) 
                        }} className='text-sm text-blue-600 underline'>Logout</button>
                    </>
                    : // If the user is not logged in, show login and registration links
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }
        </nav>
    )
}

export default Header
