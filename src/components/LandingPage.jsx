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

  // Title animation variants - more dramatic
  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
      },
    },
  };

  // Word animation for title
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Split title into words for animation
  const titleText = t("title");
  const splitTitle = titleText.split(/(\s+)/).map((word, index) => {
    if (word === "\n") {
      return <br key={index} />;
    }
    if (!word.trim()) {
      return <span key={index}>{word}</span>;
    }
    return (
      <motion.span
        key={index}
        variants={wordVariants}
        style={{ display: "inline-block", marginRight: "0.3em" }}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <main className="landing-page">
      <section className="hero-section" aria-labelledby="main-title">
        <motion.h1
          id="main-title"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {splitTitle}
        </motion.h1>
        <motion.article
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              },
            },
          }}
        >
          <div className="corner-top-right"></div>
          <div className="corner-bottom-left"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t("about.description")}
          </motion.p>
        </motion.article>
        <motion.p
          className="select-image-text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.2,
              },
            },
          }}
        >
          {t("selectImage")}
        </motion.p>
        <nav className="image-grid" aria-label="Location selection">
          {locations.filter(loc => loc.id === "5" || loc.id === "1").map((location, index) => (
            <motion.div
              key={location.id}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9, rotateX: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 1.4 + index * 0.15,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
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
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.8,
            },
          },
        }}
      >
        <motion.h2
          id="map-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          {t("nav.map")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <Map />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default LandingPage;
