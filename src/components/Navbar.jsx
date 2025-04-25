import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from "../data/images";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className="navbar-menu">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            {t("nav.home")}
          </Link>
          <div className="dropdown">
            <button
              className={`nav-link ${isLocationsOpen ? "active" : ""}`}
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
            >
              {t("nav.locations")}
            </button>
            {isLocationsOpen && (
              <div className="dropdown-content">
                {images.map((image) => (
                  <Link
                    key={image.id}
                    to={`/image/${image.id}`}
                    className="dropdown-item"
                    onClick={() => setIsLocationsOpen(false)}
                  >
                    {image.title[currentLanguage]}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/"
            onClick={() => scrollToSection("map")}
            className="nav-link"
          >
            {t("nav.map")}
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("about")}
            className="nav-link"
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
