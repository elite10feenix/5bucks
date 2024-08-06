import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Winners from './pages/Winners';
import Layout from './components/Layout';
import './App.css'; // Import TailwindCSS styles

function App() {
  return (
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
  );
}

export default App;
