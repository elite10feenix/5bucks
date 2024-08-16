import React, { useState } from 'react';
import axios from 'axios';

import { XMarkIcon } from '@heroicons/react/24/outline';
import buttonimg from '../assets/auth/button.png'; 
import userimg from '../assets/auth/user.png'; 
import lockimg from '../assets/auth/lock.png'; 
import eyeimg from '../assets/auth/eye.png'; 
import facebookimg from '../assets/auth/facebook.png'; 
import appleimg from '../assets/auth/apple.png'; 
import googleimg from '../assets/auth/google.png'; 

const LoginModal = ({ closeModal, handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To display error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.token;
      handleLogin(token, username); // Call handleLogin with the token and username
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.'); // Set error message
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Close Modal"
        >
          <XMarkIcon className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-semibold mb-6 text-center">User Login</h1>
        <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            <div className="mb-4 flex border border-black rounded">
                <div className="flex items-center bg-custom-pink2 border border-black px-3 rounded">
                <img src={userimg} alt="Username Icon" className="h-4 w-5" />
                </div>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full py-2 px-3 focus:outline-none bg-custom-gray"
                />
            </div>
            <div className="mb-4 flex border border-black rounded">
                <div className="flex items-center bg-custom-pink2 border border-black px-3 rounded">
                <img src={lockimg} alt="Lock Icon" className="h-4 w-6" />
                </div>
                <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full py-2 px-3 focus:outline-none bg-custom-gray"
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center px-3 focus:outline-none bg-custom-gray"
                aria-label="Toggle Password Visibility"
                >
                <img
                    src={eyeimg}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    className="h-5 w-5"
                />
                </button>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            
            <button
                type="submit"
                className="w-full py-2 px-4 mb-4 bg-cover bg-center text-white font-semibold rounded"
                style={{ backgroundImage: `url(${buttonimg})` }}
            >
                Login
            </button>

            <div className="flex items-center mb-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-600">or continue with</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            
            <div className="flex justify-around mb-4">
                <button 
                type="button" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Sign in with Facebook"
                >
                    <img
                        src={facebookimg}
                        alt="Facebook"
                        className="h-8 w-8"
                    />
                </button>
                <button 
                type="button" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Sign in with Apple"
                >
                    <img
                        src={appleimg}
                        alt="Apple"
                        className="h-8 w-8"
                    />
                </button>
                <button 
                type="button" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Sign in with Google"
                >
                    <img
                        src={googleimg}
                        alt="Google"
                        className="h-8 w-8"
                    />
                </button>
            </div>
            <div className="text-center text-gray-600">
                <button href="#" className="text-blue-500 hover:underline">Already have an account?</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
