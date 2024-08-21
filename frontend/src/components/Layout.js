import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CookieConsentDialog from './CookieConsentDialog';

const Layout = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (token, username) => {
    setToken(token);
    setUsername(username)
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    closeLoginModal();
    closeRegisterModal();
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout', {}, {
        headers: { 'Authorization': `${token}` }
      });
      setToken('');
      setUsername('');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

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
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} handleLogin={handleLogin} />}
      {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} handleLogin={handleLogin} />}
      <CookieConsentDialog /> 
    </div>
  );
};

export default Layout;
