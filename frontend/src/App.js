import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';  // Import the NotFound component
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About';
import Rules from './pages/Rules';
import Winners from './pages/Winners';
import Layout from './components/Layout';
import Loading from './components/Loading';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', newUsername);
    closeLoginModal();
    closeRegisterModal();
    closeForgotPasswordModal();
  };

  const handleSwitchToLogin = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const handleSwitchToRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  const handleForgotPassword = () => {
    closeLoginModal();
    openForgotPasswordModal();
  };

  const handleForgotPasswordRequest = async (email) => {
    try {
      // Handle forgot password request (e.g., send a reset link to the email)
      await axios.post('/api/forgot-password', { email });
      // Optionally, show a success message or redirect
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Forgot password request failed:', error);
      // Optionally, show an error message
    } finally {
      closeForgotPasswordModal();
    }
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
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openForgotPasswordModal = () => setForgotPasswordModalOpen(true);
  const closeForgotPasswordModal = () => setForgotPasswordModalOpen(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Layout
            token={token}
            username={username}
            handleLogout={handleLogout}
            openLoginModal={openLoginModal}
            openRegisterModal={openRegisterModal}
          >
            <Routes>
              <Route
                path="/"
                element={token ? 
                  <Main /> 
                  : 
                  <Home 
                    openLoginModal={openLoginModal}
                    openRegisterModal={openRegisterModal}
                    handleLogin={handleLogin} 
                  />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/winners" element={<Winners />} />
              <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
            </Routes>
          </Layout>

          {isLoginModalOpen && (
            <LoginModal
              closeModal={closeLoginModal}
              handleLogin={handleLogin}
              handleSwitchToRegister={handleSwitchToRegister}
              handleForgotPassword={handleForgotPassword}
            />
          )}
          {isRegisterModalOpen && (
            <RegisterModal
              closeModal={closeRegisterModal}
              handleLogin={handleLogin}
              handleSwitchToLogin={handleSwitchToLogin}
            />
          )}
          {isForgotPasswordModalOpen && (
            <ForgotPasswordModal
              closeModal={closeForgotPasswordModal}
              handleForgotPasswordRequest={handleForgotPasswordRequest}
            />
          )}
        </Router>
      )}
    </>
  );
}

export default App;
