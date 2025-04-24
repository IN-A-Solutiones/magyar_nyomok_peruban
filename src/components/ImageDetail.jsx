import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ImageDetail.css";

const ImageDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // This would typically fetch the image details from an API
  const imageDetails = {
    1: { title: "Image 1", description: "Description for Image 1" },
    2: { title: "Image 2", description: "Description for Image 2" },
    3: { title: "Image 3", description: "Description for Image 3" },
    4: { title: "Image 4", description: "Description for Image 4" },
  };

  return (
    <div className="image-detail">
      <Link to="/" className="back-button">
        {t("home")}
      </Link>
      <div className="image-container">
        <img src={`/images/image${id}.jpg`} alt={imageDetails[id].title} />
      </div>
      <div className="image-info">
        <h2>{t("imageDetails.title")}</h2>
        <p>{imageDetails[id].description}</p>
      </div>
    </div>
  );
};

export default ImageDetail;
