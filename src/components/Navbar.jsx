import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { locations } from "../data/locations";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const languages = [
    { code: "hu", label: "Magyar", fullLabel: "Magyar" },
    { code: "es", label: "Español", fullLabel: "Español" },
    { code: "qu", label: "Runa Simipi", fullLabel: "Runa Simipi" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    // Get the current path without the language prefix
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, "");

    // Navigate to the new language path
    navigate(`/${lng}${currentPath || ""}${location.search}${location.hash}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsLocationsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLocationsOpen(false);
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
      setIsLocationsOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setIsLocationsOpen(false);
    }
  };

  const isHomeActive =
    location.pathname === `/${currentLanguage}` || location.pathname === "/";

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to={`/${currentLanguage}`} className="navbar-logo">
          <img src="/images/logo.png" alt="" />
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
        >
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
            to={`/${currentLanguage}`}
            className={`nav-link ${isHomeActive ? "active" : ""}`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLocationsOpen(false);
            }}
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
                {locations.filter(loc => loc.id === "5" || loc.id === "1").map((location) => (
                  <Link
                    key={location.id}
                    to={`/${currentLanguage}/location/${location.id}`}
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
            to={`/${currentLanguage}#map`}
            onClick={() => scrollToSection("map")}
            className={`nav-link ${location.hash === "#map" ? "active" : ""}`}
          >
            {t("nav.map")}
          </Link>
          <div className="mobile-language-selector-in-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-button ${
                  i18n.language === lang.code ? "active" : ""
                }`}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsMobileMenuOpen(false);
                }}
              >
                {lang.fullLabel}
              </button>
            ))}
          </div>
        </div>
        <div className="desktop-language-selector">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-button ${
                i18n.language === lang.code ? "active" : ""
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
