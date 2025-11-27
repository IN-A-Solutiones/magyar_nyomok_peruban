import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { locations } from "../data/locations";
import "./ImageDetail.css";

const ImageDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const location = locations.find((loc) => loc.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxImage) {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent body scroll when lightbox is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

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

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Family names list for location 5
  const familyNames = [
    { id: "schoffer", key: "schoffer" },
    { id: "kadar", key: "kadar" },
    { id: "david", key: "david" },
    { id: "vajda", key: "vajda" },
    { id: "szabo", key: "szabo" },
    { id: "csorgey", key: "csorgey" },
    { id: "ternyik", key: "ternyik" },
    { id: "bajak", key: "bajak" },
    { id: "orsos", key: "orsos" },
    { id: "krauss", key: "krauss" },
  ];

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
    5: {
      title: t("hungarianCommunity.title"),
      inlineImage: "/images/MuralApellidosF.webp",
      description: (
        <div className="image-description">
          <div className="family-names-list">
            {familyNames.map((family) => (
              <button
                key={family.id}
                className="family-name-link"
                onClick={() => scrollToSection(`family-${family.id}`)}
              >
                {t(`hungarianCommunity.personalStories.${family.key}.title`)}
              </button>
            ))}
          </div>

          <h3>{t("hungarianCommunity.historical.title")}</h3>
          <p>{t("hungarianCommunity.historical.intro1")}</p>
          <p>{t("hungarianCommunity.historical.intro2")}</p>
          <p>{t("hungarianCommunity.historical.intro3")}</p>
          <p>{t("hungarianCommunity.historical.intro4")}</p>
          <p>{t("hungarianCommunity.historical.intro5")}</p>
          <p>{t("hungarianCommunity.historical.intro6")}</p>
          <p>{t("hungarianCommunity.historical.intro7")}</p>
          <p>{t("hungarianCommunity.historical.intro8")}</p>
          <p>{t("hungarianCommunity.historical.intro9")}</p>
          <p>{t("hungarianCommunity.historical.intro10")}</p>
          <p>{t("hungarianCommunity.historical.intro11")}</p>
          <p>{t("hungarianCommunity.historical.intro12")}</p>
          <p>{t("hungarianCommunity.historical.intro13")}</p>
          <p>{t("hungarianCommunity.historical.intro14")}</p>
          <p>{t("hungarianCommunity.historical.intro15")}</p>

          <h3>{t("hungarianCommunity.personalStories.title")}</h3>

          <h4 id="family-schoffer">{t("hungarianCommunity.personalStories.schoffer.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.schoffer.description")}</p>

          <h4 id="family-kadar">{t("hungarianCommunity.personalStories.kadar.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.kadar.description")}</p>

          <h4 id="family-david">{t("hungarianCommunity.personalStories.david.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.david.description")}</p>

          <h4 id="family-vajda">{t("hungarianCommunity.personalStories.vajda.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.vajda.description")}</p>

          <h4 id="family-szabo">{t("hungarianCommunity.personalStories.szabo.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.szabo.description")}</p>

          <h4 id="family-csorgey">{t("hungarianCommunity.personalStories.csorgey.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.csorgey.description")}</p>

          <h4 id="family-ternyik">{t("hungarianCommunity.personalStories.ternyik.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.ternyik.description")}</p>

          <h4 id="family-bajak">{t("hungarianCommunity.personalStories.bajak.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.bajak.description")}</p>

          <h4 id="family-orsos">{t("hungarianCommunity.personalStories.orsos.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.orsos.description")}</p>

          <h4 id="family-krauss">{t("hungarianCommunity.personalStories.krauss.title")}</h4>
          <p>{t("hungarianCommunity.personalStories.krauss.description")}</p>
        </div>
      ),
    },
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
          src={location?.image || `/images/image${id}.webp`}
          alt={imageDetails[id]?.title || location?.title[currentLanguage] || ""}
          onClick={() => setLightboxImage(location?.image || `/images/image${id}.webp`)}
          style={{ cursor: "pointer" }}
        />
      </motion.div>
      <div className="image-info">
        <div className="corner-top-left"></div>
        <div className="corner-top-right"></div>
        <div className="corner-bottom-left"></div>
        <div className="corner-bottom-right"></div>
        <h2>{imageDetails[id]?.title || location?.title[currentLanguage]}</h2>
        {imageDetails[id]?.inlineImage && (
          <img 
            src={imageDetails[id].inlineImage} 
            alt={imageDetails[id]?.title || location?.title[currentLanguage]}
            className="inline-image"
            onClick={() => setLightboxImage(imageDetails[id].inlineImage)}
            style={{
              width: "50%",
              maxWidth: "400px",
              height: "auto",
              margin: "2rem auto",
              display: "block",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
          />
        )}
        {typeof imageDetails[id]?.description === "string" ? (
          <p>{imageDetails[id]?.description}</p>
        ) : (
          imageDetails[id]?.description
        )}
      </div>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightboxImage(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <img
                src={lightboxImage}
                alt={imageDetails[id]?.title || location?.title[currentLanguage] || ""}
                className="lightbox-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageDetail;
