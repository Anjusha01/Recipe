import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function LogReg() {
    // State to manage whether the user sees the login or register form
    const [showLogin, setShowLogin] = useState(true);

    // Toggle between Login and Register
    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className='container-fluid w-50 bg-light py-3 rounded shadow-lg px-5 mt-5'>
            <div className='w-75 mx-auto d-flex flex-column align-items-center justify-content-center'> 
                {showLogin ? <Login /> : <Register />}
            </div>
            <div className="mb-3 text-center w-75 mx-auto">
                {showLogin ? (
                    <>
                        <p>Not registered yet? Create an account:</p>
                        <button className="btn btn-danger form-control rounded-pill" onClick={toggleForm}>
                            Register
                        </button>
                    </>
                ) : (
                    <>
                        <p>Already have an account? Log in:</p>
                        <button className="btn btn-danger form-control rounded-pill" onClick={toggleForm}>
                            Login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
