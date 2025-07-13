import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCogs, FaBriefcase, FaEnvelope,FaRocket, } from "react-icons/fa";
import logo from "../assets/Yaaraa.jpeg";
import "../App.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const navItems = [
  //   { name: "Home", to: "/", icon: <FaHome /> },
  //   { name: "About", to: "/About", icon: <FaInfoCircle /> },
  //   { name: "Services", to: "/services", icon: <FaCogs /> },
  //   { name: "Careers", to: "/careers", icon: <FaBriefcase /> },
  //   { name: "Contact", to: "/contact", icon: <FaEnvelope /> },
  // ];

  const navItems = [
  { name: "Launchpad", to: "/", icon: <FaRocket /> },
  { name: "Expertise", to: "/services", icon: <FaCogs /> },
  { name: "Our Story", to: "/About", icon: <FaInfoCircle /> },
  { name: "Join Us", to: "/careers", icon: <FaBriefcase /> },
  { name: "Let's Talk", to: "/contact", icon: <FaEnvelope /> },
];


  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 py-2 px-3 text-base font-medium transition-all duration-300
     ${isActive ? "text-pink-600 font-semibold after:w-full" : "text-gray-800 hover:text-pink-600"}
     after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-pink-600 after:w-0 hover:after:w-full after:transition-all after:duration-300`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md py-2" : "bg-white/80 py-4"
      } backdrop-blur-md border-b border-pink-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Yaaraa Technologies Logo"
              className="h-10 w-10 rounded-full shadow-md object-cover"
            />
            <span className="text-pink-700 text-xl font-extrabold tracking-wide">
              Yaaraa Technologies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-pink-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-4 py-4 shadow-lg space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 text-lg font-medium transition duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-800 hover:text-pink-600"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
