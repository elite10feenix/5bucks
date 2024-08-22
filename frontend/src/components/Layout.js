// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsentDialog from './CookieConsentDialog';

const Layout = ({ children, token, username, handleLogout, openLoginModal, openRegisterModal }) => {
  return (
    <div>
      <Header 
        openLoginModal={openLoginModal} 
        openRegisterModal={openRegisterModal} 
        token={token} 
        username={username} 
        handleLogout={handleLogout} 
      />
      {children}
      <Footer />
      <CookieConsentDialog /> 
    </div>
  );
};

export default Layout;
