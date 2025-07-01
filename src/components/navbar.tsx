import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./navbar.css";


const Navbar = () => {
 const [open, setOpen] = useState(false);


 // Close menu on navigation (optional)
 const handleNavClick = () => setOpen(false);


 // Helper to detect desktop (no hamburger)
 const isDesktop = () => {
   if (typeof window !== "undefined") {
     return window.innerWidth > 768; // adjust breakpoint as needed
   }
   return false;
 };


 // Track window size for responsive rendering
 const [desktop, setDesktop] = useState(isDesktop());
 React.useEffect(() => {
   const handleResize = () => setDesktop(isDesktop());
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);


 return (
   <div className="App">
     <nav className={`navbar${open ? " open" : ""}`}>
       <a
         href="http://app.fynacademy.org/"
         className="logo"
         onClick={handleNavClick}
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={require("../images/FYNTransparentLogo.png")} alt="Logo" />
       </a>
       {/* Only show Sign Up here on mobile/collapsed (when hamburger is open or not desktop) */}
       {(!desktop || open) && (
         <a
           href="http://app.fynacademy.org/signup"
           className="signup-btn"
           target="_blank"
           rel="noopener noreferrer"
         >
           Sign Up
         </a>
       )}
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
         {/* Only show Sign Up here on desktop/expanded and menu not open */}
         {desktop && !open && (
           <li>
             <a
               href="http://app.fynacademy.org/signup"
               className="signup-btn signup-btn-compact"
               target="_blank"
               rel="noopener noreferrer"
             >
               Sign Up
             </a>
           </li>
         )}
       </ul>
     </nav>
   </div>
 );
};


export default Navbar;



