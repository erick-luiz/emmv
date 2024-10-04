import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventos" element={<News />} />
        <Route path="/curso/:courseId" element={<Course />} />
        <Route path="/professor/:id" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
