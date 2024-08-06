import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <header className="bg-custom-purple w-full text-white h-[160px] flex items-center justify-center">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center w-full h-full">
        {/* Navigation Bar */}
        <nav className="flex items-center w-full h-[80px] bg-custom-purple2 mx-[40px] rounded-md pr-[20px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 ml-[20px]">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Navigation Links and Buttons */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:underline text-lg">Home</Link>
              <Link to="/about" className="hover:underline text-lg">About</Link>
              <Link to="/rules" className="hover:underline text-lg">Rules</Link>
              <Link to="/winners" className="hover:underline text-lg">Winners</Link>
            </div>

            {/* Register and Login Buttons */}
            <div className="flex-shrink-0 flex space-x-4">
              <Link to="/register" className="bg-register text-white py-2 rounded-full hover:bg-register-400 transition-colors duration-300 w-32 text-center">Register</Link>
              <Link to="/login" className="bg-login text-black py-2 rounded-full hover:bg-login-400 transition-colors duration-300 w-32 text-center">Login</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-center w-full relative">
        {/* Navbar */}
        <div className="relative flex items-center justify-between w-full rounded-md h-[80px] bg-custom-purple2 px-[20px] py-[20px] mx-[40px]">
          {/* Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <XMarkIcon className="w-6 h-6 text-custom-green" /> : <Bars3Icon className="w-6 h-6 text-custom-green" />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold mx-auto">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          
          {/* Register and Login Buttons */}
          <div className="flex space-x-4">
            <Link to="/register" className="bg-register text-white py-2 px-4 rounded-full hover:bg-register-400 transition-colors duration-300 w-24 text-center">Register</Link>
            <Link to="/login" className="bg-login text-black py-2 px-4 rounded-full hover:bg-login-400 transition-colors duration-300 w-24 text-center">Login</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bg-custom-purple2 rounded-md w-3/12 mx-[40px]`} style={{ top: 'calc(100% + 10px)', left: '0', zIndex: 50 }}>
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link to="/" className="py-2 px-4 text-lg rounded-md bg-gradient-purple-pink text-white w-full">Home</Link>
            <Link to="/about" className="py-2 px-4 text-lg rounded-md bg-gradient-purple-pink text-white w-full">About</Link>
            <Link to="/rules" className="py-2 px-4 text-lg rounded-md bg-gradient-purple-pink text-white w-full">Rules</Link>
            <Link to="/winners" className="py-2 px-4 text-lg rounded-md bg-gradient-purple-pink text-white w-full">Winners</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
