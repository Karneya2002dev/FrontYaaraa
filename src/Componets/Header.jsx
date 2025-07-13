import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-blue-600">YaaRaa Technologies</h1>
    <nav>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/about" className="mx-2">About</Link>
      <Link to="/services" className="mx-2">Services</Link>
      <Link to="/contact" className="mx-2">Contact</Link>
    </nav>
  </header>
);

export default Header;
