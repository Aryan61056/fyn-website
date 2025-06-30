import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu on navigation (optional)
  const handleNavClick = () => setOpen(false);

  return (
    <div className="App">
      <nav className={`navbar${open ? " open" : ""}`}>
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src={require("../images/FYNTransparentLogo.png")} alt="Logo" />
        </Link>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger icon */}
          <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#9776;</span>
        </button>
        <ul className="nav-links" onClick={handleNavClick}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
