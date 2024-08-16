import React from 'react';
import logo from '../assets/logo.png'; // Ensure the path to the logo is correct

const LoadingScreen = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1B0535] z-50">
        <div className="text-center">
          <img src={logo} alt="Logo" className="mb-4 mx-auto" />
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-custom-green'} animate-pulse`}
              />
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default LoadingScreen;  