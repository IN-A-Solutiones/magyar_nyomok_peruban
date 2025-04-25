import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";
import { motion } from "framer-motion";
import "./LandingPage.css";
import Map from "./Map";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="landing-page">
      <section className="hero-section">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("title")}
        </motion.h1>
        <motion.div
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p>{t("about.description")}</p>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {t("selectImage")}
        </motion.p>
        <div className="image-grid">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.4 + index * 0.1,
              }}
            >
              <Link to={`/location/${location.id}`} className="image-card">
                <img
                  src={location.image}
                  alt={location.title[currentLanguage]}
                />
                <div className="image-title">
                  {location.title[currentLanguage]}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        id="map"
        className="map-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2>{t("nav.map")}</h2>
        <Map />
      </motion.section>
    </div>
  );
};

export default LandingPage;
