import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Footer from './Componets/Footer';
import Contact from './Pages/Contact';
import ThankYou from './Componets/ThankYou';
import Careers from './Pages/Carriers';
import WhatsAppButton from './Componets/WhatsAppButton';
import CourseRegister from './CourseRegister';
import AdminDashboard from './Admin/AdminDashBoard';

const App = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/686f8ed7fd0b7e1914ed091a/1ivpsbv4v';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/register" element={<CourseRegister />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <WhatsAppButton />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
