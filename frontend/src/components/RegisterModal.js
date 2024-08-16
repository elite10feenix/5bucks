import React from 'react';

const RegisterModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
