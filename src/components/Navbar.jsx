import React from "react";
import "../Css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src= "/AI Interview Logo.jpg" alt="Logo" className="logo" />
        <h1 className="brand-name">MOCKMATE AI</h1>
      </div>
      <div className="navbar-center">
        <button className="nav-button">
          <span className="icon">⚙️</span> About
        </button>
        <button className="nav-button">
          <span className="icon">💬</span> Docs
        </button>
        <button className="nav-button">
          <span className="icon">📄</span> Contact
        </button>
      </div>
      <div className="navbar-right">
        <img src= "/Ellipse 2540.png" alt="User" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;