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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventos" element={<News />} />
        <Route path="/cursos/:courseId" element={<Course />} />
        <Route path="/cursos" element={<Course />} />
        <Route path="/equipe" element={<EquipePage />} />
        <Route path="/mentes-musicais-2024" element={<MentesMusicais2024 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
