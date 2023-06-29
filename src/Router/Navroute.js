import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Footer from '../Components/Footer';

const Navroute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navroute;
