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
    <main className="landing-page">
      <section className="hero-section" aria-labelledby="main-title">
        <motion.h1
          id="main-title"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("title")}
        </motion.h1>
        <motion.article
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p>{t("about.description")}</p>
        </motion.article>
        <motion.p
          className="select-image-text"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {t("selectImage")}
        </motion.p>
        <nav className="image-grid" aria-label="Location selection">
          {locations.slice(0, 1).map((location, index) => (
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
              <Link
                to={`/${currentLanguage}/location/${location.id}`}
                className="image-card"
              >
                <img
                  src={location.image}
                  alt={location.title[currentLanguage]}
                  className={`location-image location-image-${location.id}`}
                  loading="eager"
                />
                <div className="image-title">
                  {location.title[currentLanguage]}
                </div>
              </Link>
            </motion.div>
          ))}
        </nav>
      </section>

      <motion.section
        id="map"
        className="map-section"
        aria-labelledby="map-title"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 id="map-title">{t("nav.map")}</h2>
        <Map />
      </motion.section>
    </main>
  );
};

export default LandingPage;
