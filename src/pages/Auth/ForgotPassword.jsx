import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password Reset Email send Successfully");
                const interval = setTimeout(() => {
                    navigate('/login')
                }, 5000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage);
            });
        setSubmitted(true);
    };
    return (
        <div className=''>
            <ToastContainer />
            <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Forgot Your Password?</h2>
                <p className="text-gray-600 mb-4">
                    Enter your email address below and we'll send you a link to reset your password.
                </p>
                {submitted ? (
                    <p className="text-green-600 mb-4">A password reset email has been sent to {email}.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Reset Password
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ForgotPassword


