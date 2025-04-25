import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { images } from "../data/images";
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
          {images.map((image) => (
            <Link
              to={`/image/${image.id}`}
              key={image.id}
              className="image-card"
            >
              <img src={image.imageUrl} alt={image.title[currentLanguage]} />
              <div className="image-title">{image.title[currentLanguage]}</div>
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
