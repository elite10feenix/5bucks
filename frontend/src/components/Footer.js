import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/footer/logo.png'; // Adjust the path if necessary
import facebookIcon from '../assets/footer/facebook.png'; // Adjust the path if necessary
import instagramIcon from '../assets/footer/instagram.png'; // Adjust the path if necessary
import tiktokIcon from '../assets/footer/tiktok.png'; // Adjust the path if necessary

// Array of payment icon objects
const paymentIcons = [
  { name: 'PayU', url: 'www.payment1.com' },
  { name: 'Eway', url: 'www.payment2.com' },
  { name: 'Visa', url: 'www.payment3.com' },
  { name: 'MasterCard', url: 'www.payment4.com' },
  { name: 'Maestro', url: 'www.payment5.com' },
  { name: 'Cirrus', url: 'www.payment6.com' },
  { name: 'Paypal', url: 'www.payment7.com' },
  { name: 'iDeal', url: 'www.payment8.com' },
  { name: 'Discover', url: 'www.payment9.com' },
  { name: 'Bitcoin', url: 'www.payment10.com' },
  { name: 'Amex', url: 'www.payment11.com' },
  { name: 'JCB', url: 'www.payment12.com' },
  { name: 'Stripe', url: 'www.payment13.com' },
  { name: 'GooglePay', url: 'www.payment14.com' },
  { name: 'Klarna', url: 'www.payment15.com' },
  { name: 'Skrill', url: 'www.payment16.com' },
  { name: 'Bilk', url: 'www.payment17.com' },
  { name: 'Payoneer', url: 'www.payment18.com' },
  { name: 'PayU', url: 'www.payment19.com' },
  { name: 'ApplePay', url: 'www.payment20.com' },
  { name: 'AmazonPay', url: 'www.payment21.com' },
];

const paymentIconsWithSrc = paymentIcons.map(icon => ({
  ...icon,
  src: require(`../assets/footer/${icon.name}.png`) // Adjust the path as needed
}));

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-white w-full">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto relative">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start p-4 md:p-6 md:border-r border-custom-pink">
            {/* Logo */}
            <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
              <img src={logo} alt="Logo" className="h-8 md:h-10" />
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 mb-4 md:mb-6 text-custom-pink text-sm md:text-base">
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-bold mb-2 md:mb-4">Policies</h4>
                <ul className="space-y-1 md:space-y-2">
                  <li><Link to="/term-of-use" className="hover:underline">Term of Use</Link></li>
                  <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
                  <li><Link to="/privacy-notice" className="hover:underline">Privacy Notice</Link></li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-bold mb-2 md:mb-4">About Us</h4>
                <ul className="space-y-1 md:space-y-2">
                  <li><Link to="/about" className="hover:underline">About Us</Link></li>
                  <li><Link to="/affiliates" className="hover:underline">5bucks Affiliates</Link></li>
                  <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <p className="text-custom-green2 font-bold text-xs md:text-sm">Follow Us</p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center">
            {/* Pay With Text */}
            <div className="mb-4 md:mb-6 text-center text-custom-green2 text-xs md:text-lg">
              <p className="font-bold">Pay with</p>
            </div>

            {/* Payment Images */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
              {paymentIconsWithSrc.map((icon, index) => (
                <a href={icon.url} key={index} className="flex justify-center">
                  <img src={icon.src} alt={icon.name} className="h-6 md:h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="flex justify-center p-4">
          <a 
              href="https://www.5bucks.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-custom-green text-xs md:text-base hover:underline"
            >
              www/5bucks.io
            </a>
        </div>
      </footer>

      {/* Blank Red Div */}
      <div className="w-full h-10 bg-custom-purple"></div>
    </div>
  );
};

export default Footer;
