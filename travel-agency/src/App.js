import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Destinations />
              <About />
              <Testimonials />
            </>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;