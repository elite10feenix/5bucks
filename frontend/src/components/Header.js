import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import headerlogo from '../assets/header-logo.png'; // Adjust the path if necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <header className="w-full bg-custom-purple h-[160px]">
      {/* Desktop View */}
      <div className="hidden md:flex px-6">
        {/* Navigation Bar */}
        <nav className="flex h-[80px] bg-custom-purple2 w-full my-10 rounded-md">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 m-6">
            <img src={headerlogo} alt="Logo" className="h-8" />
          </Link>

          {/* Navigation Links and Buttons */}
          <div className="flex-grow flex items-center justify-end space-x-3 pr-3">
            {/* Navigation Links */}
            <div className="space-x-2 text-white">
              <Link to="/" className="hover:underline text-lg">Home</Link>
              <Link to="/about" className="hover:underline text-lg">About</Link>
              <Link to="/rules" className="hover:underline text-lg">Rules</Link>
              <Link to="/winners" className="hover:underline text-lg">Winners</Link>
            </div>

            {/* Register and Login Buttons */}
            <div className="flex space-x-2">
              <Link to="/register" className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</Link>
              <Link to="/login" className="bg-login text-black px-8 py-2 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile View */}
      <div className="md:hidden flex px-3">
        {/* Navbar */}
        <div className="relative flex items-center justify-between w-full my-10 mx-3 px-3 rounded-md h-[80px] bg-custom-purple2">
          {/* Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <XMarkIcon className="w-6 h-6 text-custom-green" /> : <Bars3Icon className="w-6 h-6 text-custom-green" />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold mx-auto">
            <img src={headerlogo} alt="Logo" className="h-8" />
          </Link>
          
          {/* Register and Login Buttons */}
          <div className="flex space-x-4">
            <Link to="/register" className="bg-register text-white py-2 px-6 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</Link>
            <Link to="/login" className="bg-login text-black py-2 px-8 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bg-custom-purple2 rounded-md w-3/12 mx-8`} style={{ top: '130px', left: '0', zIndex: 50 }}>
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
