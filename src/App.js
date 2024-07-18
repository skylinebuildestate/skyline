import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Career  from './pages/Career.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
      </Routes>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
