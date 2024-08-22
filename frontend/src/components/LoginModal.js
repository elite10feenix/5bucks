import React, { useState } from 'react';
import axios from 'axios';

import { XMarkIcon } from '@heroicons/react/24/outline';
import loginbutton from '../assets/auth/loginbutton.png'; 
import userimg from '../assets/auth/user.png'; 
import lockimg from '../assets/auth/lock.png'; 
import eyebutton from '../assets/auth/eyebutton.png'; 
import facebookbutton from '../assets/auth/facebookbutton.png'; 
import applebutton from '../assets/auth/applebutton.png'; 
import googlebutton from '../assets/auth/googlebutton.png'; 

const LoginModal = ({ closeModal, handleLogin, handleSwitchToRegister, handleForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(''); // Username error
  const [passwordError, setPasswordError] = useState(''); // Password error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    try {
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.token;
      handleLogin(token, username); // Call handleLogin with the token and username
    } catch (error) {
      if (error.response && error.response.data) {
        const { error: errorMessage } = error.response.data;

        // Check specific error messages
        if (errorMessage === 'Wrong username') {
          setUsernameError('Wrong username.');
        } else if (errorMessage === 'Wrong password') {
          setPasswordError('Wrong password.');
        } else {
          setUsernameError('Login failed. Please check your credentials and try again.');
        }
      } else {
        setUsernameError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-custom-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Close Modal"
        >
          <XMarkIcon className="h-6 w-6 text-custom-black" />
        </button>
        <h1 className="text-2xl font-semibold mb-6 text-center text-custom-black">User Login</h1>
        <form onSubmit={handleSubmit}>
            <div className={`mb-4 flex border rounded ${usernameError ? 'border-red-500' : 'border-custom-black'}`}>
                <div className="flex items-center bg-custom-pink2 border border-black px-3 rounded">
                  <img src={userimg} alt="Username Icon" className="h-4 w-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className={`w-full py-2 px-3 focus:outline-none ${usernameError ? 'bg-red-50 border-red-500' : 'bg-custom-gray border-custom-black'}`}
                />
            </div>
            {usernameError && <p className="text-red-500 mb-2 text-sm">{usernameError}</p>}

            <div className={`mb-4 flex border rounded ${passwordError ? 'border-red-500' : 'border-black'}`}>
                <div className="flex items-center bg-custom-pink2 border border-black px-3 rounded">
                  <img src={lockimg} alt="Lock Icon" className="h-4 w-6" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full py-2 px-3 focus:outline-none ${passwordError ? 'bg-red-50 border-red-500' : 'bg-custom-gray border-custom-black'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center px-3 focus:outline-none bg-custom-gray"
                  aria-label="Toggle Password Visibility"
                >
                  <img
                    src={eyebutton}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    className="h-5 w-5"
                  />
                </button>
            </div>
            {passwordError && <p className="text-red-500 mb-2 text-sm">{passwordError}</p>}

            <div className="flex items-center justify-between mb-4 text-custom-black">
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
            
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className="w-1/2 py-2 px-4 text-custom-black font-semibold rounded flex items-center justify-center"
              >
                <img src={loginbutton} className="w-full h-auto" alt="Submit Button" />
              </button>
            </div>

            <div className="flex items-center mb-4">
                <hr className="flex-grow" />
                <span className="mx-4 text-custom-black">or continue with</span>
                <hr className="flex-grow" />
            </div>
            
            <div className="flex justify-around mb-4">
                <button 
                  type="button" 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Sign in with Facebook"
                >
                    <img
                        src={facebookbutton}
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
                        src={applebutton}
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
                        src={googlebutton}
                        alt="Google"
                        className="h-8 w-8"
                    />
                </button>
            </div>
            <div className="text-center">
                <button onClick={handleSwitchToRegister} className="text-custom-black hover:underline">Already have an account?</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;