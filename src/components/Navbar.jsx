import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className="navbar-language">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
