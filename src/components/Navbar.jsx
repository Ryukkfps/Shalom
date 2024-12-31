import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/Shalom Hotels.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light"
    style={{backgroundColor: '#FFC56E'}}>
    <div className="container">
      <Link className="navbar-brand mr-auto" to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "auto", height: "70px", borderRadius: '10px'}}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-center ml-auto ${
          isOpen ? "show" : ""
        }`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Services" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
