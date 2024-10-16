import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import News from './pages/News';
import NotFound from './pages/NotFound';
import MentesMusicais2024 from './pages/MentesMusicais2024';
import EquipePage from './pages/EquipePage/EquipePage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentes-musicais-2024" element={<MentesMusicais2024 />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
