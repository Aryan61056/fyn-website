import React from "react";
import "./Footer.css";
const LOGO_SRC = require("../images/FYNTransparentLogo.png");

function Footer() {
  return (
    <footer className="fyn-footer">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <img src={LOGO_SRC} alt="FYN Logo" className="footer-logo" />
          <p className="footer-desc">
            A student-led startup that prepares students for the future of tech.
            Our courses are designed to help students learn efficiently and
            effectively.
          </p>
        </div>
        <div className="footer-col">
          <h3>Projects</h3>
          <ul>
            <li>Python</li>
            <li>Website Development</li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/fyn.academy",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Stay Updated!
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>Bootcamps</li>
            <li>Blog</li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() => (window.location.href = "/about")}
              >
                The Team
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>Email</li>
            <li>Phone</li>
            <li>
              <button
                className="footer-link-btn"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/fyn.academy",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Instagram
              </button>
            </li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
