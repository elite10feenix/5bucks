import React, { useState } from 'react';

const ForgotPasswordModal = ({ closeModal, handleForgotPasswordRequest }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password request here
    handleForgotPasswordRequest(email);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Forgot Password?</h2>
        <label htmlFor="email" className="block text-sm font-semibold text-custom-gray2 mb-4">Please enter your email to rset the password.</label>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-custom-black">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-custom-purple rounded py-2 px-3 text-custom-black text-semibold focus:ring-blue-500 focus:border-custom-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-custom-purple text-white rounded-3xl hover:bg-custom-purple2 transition-colors"
          >
            Reset Password
          </button>
          <div className="text-center mt-4">
            <p>
              Remembered your password?{' '}
              <button
                type="button"
                onClick={() => closeModal()}
                className="text-blue-500 underline"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
