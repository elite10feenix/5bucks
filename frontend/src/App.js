import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';  // Import the NotFound component
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About';
import Rules from './pages/Rules';
import Winners from './pages/Winners';
import User from './pages/User';
import Layout from './components/Layout';
import Loading from './components/Loading';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import NewCardModal from './components/NewCardModal';
import axios from 'axios';
import './App.css';
import { data } from 'autoprefixer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [fullname, setFullname] = useState(localStorage.getItem('fullname') || '');

  const updateToken = (newToken, newUsername, newFullname) => {
    setToken(newToken);
    setUsername(newUsername);
    setFullname(newFullname);
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', newUsername);
    localStorage.setItem('fullname', newFullname);
  }

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [isNewCardModalOpen, setNewCardModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const openForgotPasswordModal = () => setForgotPasswordModalOpen(true);
  const closeForgotPasswordModal = () => setForgotPasswordModalOpen(false);


  const handleLogin = (newToken, newUsername, newFullname) => {
    updateToken(newToken, newUsername, newFullname);
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
      setFullname('');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('fullname');

      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const openNewCardModal = () => setNewCardModalOpen(true);
  const closeNewCardModal = () => setNewCardModalOpen(false);

  const handleNewCard = () => {
    openNewCardModal();
  };

  const [cards, setCards] = useState([]);

  const fetchAllCards = useCallback(async () => {
    try {
      const response = await axios.get('/card/', {
        headers: { Authorization: token },
      });
      setCards(response.data.cards);
    } catch (error) {
      console.error('Failed to fetch user details:', error);
    }
  }, [token]); // Only change when token changes

  const handleNewCardRequest = async (cardtype, cardnumber, cardname, MM, YY, CVV) => {
    try {
      // Handle forgot password request (e.g., send a reset link to the email)
      await axios.post('/card/new', { 
        username,
        cardtype,
        cardnumber,
        cardname,
        MM,
        YY,
        CVV
       });
       fetchAllCards(); 
      // Optionally, show a success message or redirect
    } catch (error) {
      console.error('New Card creating failed:', error);
      // Optionally, show an error message
    } finally {
      closeNewCardModal();
    }
  };

  const handleRemoveCard = async (cardID) => {
    try {
      const response = await axios.delete(`/card/remove/${cardID}`, {
        headers: {
          Authorization: `${token}`, // Adjust the token variable if needed
        },
      });
      fetchAllCards();
    } catch (error) {
      console.error('Failed to remove card:', error);
    }
    console.log(cardID);
  }

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
              <Route path="/user" element={token ? 
                <User 
                  token={token} 
                  username={username}
                  fullname={fullname}
                  cards={cards}
                  handleLogout={handleLogout} 
                  updateToken={updateToken}
                  handleNewCard={handleNewCard}
                  handleRemoveCard={handleRemoveCard}
                  fetchAllCards={fetchAllCards} // Pass fetchAllCards as a prop
                /> 
                : <NotFound />} 
              />
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
           {isNewCardModalOpen && (
            <NewCardModal
              handleNewCardRequest={handleNewCardRequest}
            />
          )}
        </Router>
      )}
    </>
  );
}

export default App;
