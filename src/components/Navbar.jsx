import React, { useState, useEffect, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { locations } from "../data/locations";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLocationsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomeActive = location.pathname === "/" && !location.hash;

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="" />
        </Link>

        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        <div
          className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}
          ref={mobileMenuRef}
        >
          <Link
            to="/"
            className={`nav-link ${isHomeActive ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <div className="dropdown" ref={dropdownRef}>
            <button
              className={`nav-link ${isLocationsOpen ? "active" : ""}`}
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
            >
              {t("nav.locations")}
            </button>
            {isLocationsOpen && (
              <div className="dropdown-content">
                {locations.map((location) => (
                  <Link
                    key={location.id}
                    to={`/location/${location.id}`}
                    className="dropdown-item"
                    onClick={() => {
                      setIsLocationsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {location.title[currentLanguage]}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/#map"
            onClick={() => scrollToSection("map")}
            className={`nav-link ${location.hash === "#map" ? "active" : ""}`}
          >
            {t("nav.map")}
          </Link>
          <Link
            to="/#about"
            onClick={() => scrollToSection("about")}
            className={`nav-link ${location.hash === "#about" ? "active" : ""}`}
          >
            {t("nav.about")}
          </Link>
        </div>
        <div className="navbar-language">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
