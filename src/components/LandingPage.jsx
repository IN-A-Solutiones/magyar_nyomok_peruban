import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";
import "./LandingPage.css";
import Map from "./Map";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1>{t("title")}</h1>
        <p>{t("selectImage")}</p>
        <div className="image-grid">
          {locations.map((location) => (
            <Link
              to={`/location/${location.id}`}
              key={location.id}
              className="image-card"
            >
              <img src={location.image} alt={location.title[currentLanguage]} />
              <div className="image-title">
                {location.title[currentLanguage]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="map" className="map-section">
        <h2>{t("nav.map")}</h2>
        <Map />
      </section>

      <section id="about" className="about-section">
        <h2>{t("nav.about")}</h2>
        <div className="about-content">
          <p>{t("about.description")}</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
