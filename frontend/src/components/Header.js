import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const Header = ({ openLoginModal, openRegisterModal, token, username, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-custom-purple h-[160px]">
      {/* Desktop View */}
      <div className="hidden md:flex px-6">
        <nav className="flex h-[80px] bg-custom-purple2 w-full my-10 rounded-md">
          <Link to="/" className="flex-shrink-0 m-6">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          <div className="flex-grow flex items-center justify-end space-x-3 pr-3">
            <div className="space-x-4 text-white">
              <Link to="/about" className="hover:underline text-lg">About</Link>
              <Link to="/rules" className="hover:underline text-lg">Rules</Link>
              <Link to="/winners" className="hover:underline text-lg">Winners</Link>
            </div>

            {token ? (
              <div onClick={handleLogout} className="flex items-center space-x-2 cursor-pointer">
                <h2 className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">{username}</h2>
                <img src={profile} className="py-2" />
              </div>
            ) : (
              <div className="flex space-x-2">
                <button onClick={openRegisterModal} className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</button>
                <button onClick={openLoginModal} className="bg-login text-black px-8 py-2 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex px-3">
        <div className="relative flex items-center justify-between w-full my-10 mx-3 px-3 rounded-md h-[80px] bg-custom-purple2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <XMarkIcon className="w-6 h-6 text-custom-green" /> : <Bars3Icon className="w-6 h-6 text-custom-green" />}
          </button>

          <Link to="/" className="text-xl font-bold mx-auto">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {token ? (
            <div className="flex items-center space-x-2">
              <h2 className="bg-register text-white px-6 py-2 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">{username}</h2>
              <img src={profile} className="h-8" />
            </div>
          ) : (
            <div className="flex space-x-4">
              <button onClick={openRegisterModal} className="bg-register text-white py-2 px-6 rounded-full hover:bg-register-400 transition-colors duration-300 text-center">Register</button>
              <button onClick={openLoginModal} className="bg-login text-black py-2 px-8 rounded-full hover:bg-login-400 transition-colors duration-300 text-center">Login</button>
            </div>
          )}
        </div>

        <div className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bg-custom-purple2 rounded-md w-3/12 mx-8`} style={{ top: '130px', left: '0', zIndex: 50 }}>
          <nav className="flex flex-col items-start p-4 space-y-2">
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
