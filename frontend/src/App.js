import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Winners from './pages/Winners';
import Layout from './components/Layout';
import Loading from './components/Loading';
import './App.css'; // Import TailwindCSS styles

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : 
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/winners" element={<Winners />} />
          </Routes>
        </Layout>
      </Router>
      }
    </>
  );
}

export default App;
