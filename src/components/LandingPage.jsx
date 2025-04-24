import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { images } from "../data/images";
import "./LandingPage.css";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="landing-page">
      <h1>{t("title")}</h1>
      <p>{t("selectImage")}</p>
      <div className="image-grid">
        {images.map((image) => (
          <Link to={`/image/${image.id}`} key={image.id} className="image-card">
            <img src={image.imageUrl} alt={image.title[currentLanguage]} />
            <div className="image-title">{image.title[currentLanguage]}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
