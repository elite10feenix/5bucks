import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Adjust the path if necessary
import facebookIcon from '../assets/footer/facebook.png'; // Adjust the path if necessary
import instagramIcon from '../assets/footer/instagram.png'; // Adjust the path if necessary
import tiktokIcon from '../assets/footer/tiktok.png'; // Adjust the path if necessary
import visa from '../assets/footer/visa.png';
import mastercard from '../assets/footer/mastercard.png';
import maestro from '../assets/footer/maestro.png'; // Fixed typo here

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="flex flex-row px-6">
        {/* Left Side */}
        <div className="flex-1 flex flex-col p-4 mt-4 md:p-6 md:border-r border-custom-pink">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center flex-grow text-custom-pink">
            <div className="flex flex-row justify-center gap-16 mb-4">
              {/* Policies Section */}
              <div className="flex flex-col items-start">
                <h4 className="font-bold mb-2 text-2xl ">Policies</h4>
                <ul className="space-y-1 text-xl">
                  <li><Link to="/term-of-use" className="hover:underline">Term of Use</Link></li>
                  <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
                  <li><Link to="/privacy-notice" className="hover:underline">Privacy Notice</Link></li>
                </ul>
              </div>
              {/* About Us Section */}
              <div className="flex flex-col items-start">
                <h4 className="font-bold mb-2 text-2xl">About Us</h4>
                <ul className="space-y-1 text-xl">
                  <li><Link to="/about" className="hover:underline">About Us</Link></li>
                  <li><Link to="/affiliates" className="hover:underline">5bucks Affiliates</Link></li>
                  <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-4 flex flex-col items-center">
          {/* Pay With Text */}
          <div className="w-full flex flex-col items-center mb-4 mt-10">
            <p className="font-bold text-custom-green2 text-2xl mb-4">Pay with</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.visa.com" className="flex justify-center">
                <img src={visa} alt="Visa" className="h-120" />
              </a>
              <a href="https://www.mastercard.com" className="flex justify-center">
                <img src={mastercard} alt="MasterCard" className="h-120" />
              </a>
              <a href="https://www.maestro.com" className="flex justify-center">
                <img src={maestro} alt="Maestro" className="h-120" />
              </a>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="w-full flex justify-end">
            <div className="flex items-center md:space-x-4 mb-4">
              <p className="text-custom-green2 font-bold text-2xl md:mr-4">Follow Us</p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="flex justify-center p-4 text-2xl">
        <a 
            href="https://www.5bucks.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-custom-green hover:underline"
          >
            www.5bucks.io
          </a>
      </div>

      <div className="w-full h-10 bg-custom-purple"></div>
    </footer>
  );
};

export default Footer;
