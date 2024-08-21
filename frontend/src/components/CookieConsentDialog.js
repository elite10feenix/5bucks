import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Import the close icon

const CookieConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const cookieName = '5bucks_cookies';

  useEffect(() => {
    if (!getCookie(cookieName)) {
      setShowDialog(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(cookieName, 'true', 365);
    setShowDialog(false);
  };

  const handleReject = () => {
    setCookie(cookieName, 'false', 365);
    setShowDialog(false);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  };

  const getCookie = (name) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  return (
    showDialog && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 text-custom-black">
        <div className="bg-white rounded-lg shadow-lg relative w-full max-w-4xl mx-6 p-4 flex px-8">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          {/* Dialog Content */}
          <div className="flex w-full">
            {/* Left Section: 60% Width */}
            <div className="w-2/3">
              <h2 className="text-2xl font-bold mb-2">Cookies Notice</h2>
              <p className="mb-4 jst text-xl text-justify">
                We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking "Accept All Cookies," you agree to our use of cookies as described in our{' '}
                <a href="/cookies-policy" className="underline" target="_blank" rel="noopener noreferrer">
                  Cookies Policy
                </a>. You can also choose to manage your preferences or decline non-essential cookies.
              </p>
            </div>
            {/* Right Section: 40% Width */}
            <div className="w-1/3 flex flex-col items-center justify-center text-xl">
              <button
                onClick={handleAccept}
                className="mb-2 bg-custom-green py-2 px-10 ml-4 rounded border border-custom-black"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="bg-custom-green py-2 px-10 ml-4 rounded border border-custom-black"
              >
                Reject All&nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsentDialog;