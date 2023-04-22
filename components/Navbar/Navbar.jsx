import React, { useState, useEffect, useRef } from "react";

// importing smaller component
import NavbarUl from "./NavbarUl";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="navbar" ref={navbarRef}>
      <h1 className="h1-home">
        <a href="index.html">Cory Cox</a>
      </h1>
      <nav className="site-nav">
        <div
          className={`navbar-toggle ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${isActive ? "active" : ""}`}>
          <NavbarUl />
        </div>
      </nav>
    </div>
  );
}

// exporting navbar to app.jsx
export default Navbar;
