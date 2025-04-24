import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const { t } = useTranslation();

  const images = [
    { id: 1, path: "/images/image1.jpg", alt: "Image 1" },
    { id: 2, path: "/images/image2.jpg", alt: "Image 2" },
    { id: 3, path: "/images/image3.jpg", alt: "Image 3" },
    { id: 4, path: "/images/image4.jpg", alt: "Image 4" },
  ];

  return (
    <div className="landing-page">
      <h1>{t("title")}</h1>
      <p>{t("selectImage")}</p>
      <div className="image-grid">
        {images.map((image) => (
          <Link to={`/image/${image.id}`} key={image.id} className="image-card">
            <img src={image.path} alt={image.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
