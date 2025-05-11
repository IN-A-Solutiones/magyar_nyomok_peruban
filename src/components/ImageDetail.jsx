import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./ImageDetail.css";

const ImageDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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

          <div className="social-icons-container">
            <p className="social-links">{t("imageDetails.social")}</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/HungriaenLima"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/hungriaenlima/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    2: { title: "Image 2", description: "Description for Image 2" },
    3: { title: "Image 3", description: "Description for Image 3" },
    4: { title: "Image 4", description: "Description for Image 4" },
  };

  return (
    <div className="image-detail">
      <motion.div
        className="image-container"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={`/images/image${id}.webp`}
          alt={imageDetails[id].title}
        />
      </motion.div>
      <div className="image-info">
        <div className="corner-top-left"></div>
        <div className="corner-top-right"></div>
        <div className="corner-bottom-left"></div>
        <div className="corner-bottom-right"></div>
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
