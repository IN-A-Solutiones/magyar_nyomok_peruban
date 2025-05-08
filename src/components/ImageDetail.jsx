import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ImageDetail.css";

const ImageDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const imageDetails = {
    1: {
      title: t("imageDetails.title"),
      description: (
        <div className="image-description">
          <p>{t("imageDetails.description.intro")}</p>
          <p>{t("imageDetails.description.project")}</p>
          <p>{t("imageDetails.description.mural")}</p>
          <p>{t("imageDetails.description.anthem")}</p>
          <p>{t("imageDetails.description.discover")}</p>

          <h3>{t("imageDetails.symbolism.title")}</h3>

          <h4>{t("imageDetails.symbolism.figure.title")}</h4>
          <p>{t("imageDetails.symbolism.figure.description")}</p>

          <h4>{t("imageDetails.symbolism.dress.title")}</h4>
          <p>{t("imageDetails.symbolism.dress.intro")}</p>
          <p>{t("imageDetails.symbolism.dress.peruvian")}</p>
          <p>{t("imageDetails.symbolism.dress.hungarian")}</p>

          <h4>{t("imageDetails.symbolism.birds.title")}</h4>
          <p>{t("imageDetails.symbolism.birds.intro")}</p>
          <p>{t("imageDetails.symbolism.birds.condor")}</p>
          <p>{t("imageDetails.symbolism.birds.turul")}</p>
          <p>{t("imageDetails.symbolism.birds.conclusion")}</p>

          <h4>{t("imageDetails.symbolism.inscription.title")}</h4>
          <p>{t("imageDetails.symbolism.inscription.description")}</p>

          <h3>{t("imageDetails.anthems.title")}</h3>
          <p>{t("imageDetails.anthems.intro")}</p>

          <h4>{t("imageDetails.anthems.peruvian.title")}</h4>
          <p>{t("imageDetails.anthems.peruvian.description")}</p>

          <h4>{t("imageDetails.anthems.hungarian.title")}</h4>
          <p>{t("imageDetails.anthems.hungarian.description")}</p>

          <h4>{t("imageDetails.anthems.parallels.title")}</h4>
          <p>{t("imageDetails.anthems.parallels.description")}</p>
          <p>{t("imageDetails.anthems.parallels.conclusion")}</p>
          <p>{t("imageDetails.anthems.parallels.final")}</p>

          <p className="social-links">{t("imageDetails.social")}</p>
        </div>
      ),
    },
    2: { title: "Image 2", description: "Description for Image 2" },
    3: { title: "Image 3", description: "Description for Image 3" },
    4: { title: "Image 4", description: "Description for Image 4" },
  };

  return (
    <div className="image-detail">
      <div className="image-container">
        <img src={`/images/image${id}.webp`} alt={imageDetails[id].title} />
      </div>
      <div className="image-info">
        <h2>{imageDetails[id].title}</h2>
        {typeof imageDetails[id].description === "string" ? (
          <p>{imageDetails[id].description}</p>
        ) : (
          imageDetails[id].description
        )}
      </div>
    </div>
  );
};

export default ImageDetail;
