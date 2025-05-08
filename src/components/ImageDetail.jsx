import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./ImageDetail.css";

const ImageDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageDetails = {
    1: {
      title: t("imageDetails.title"),
      description: (
        <motion.div
          className="image-description"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>
            {t("imageDetails.description.intro")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.description.project")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.description.mural")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.description.anthem")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.description.discover")}
          </motion.p>

          <motion.h3 variants={itemVariants}>
            {t("imageDetails.symbolism.title")}
          </motion.h3>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.symbolism.figure.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.figure.description")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.symbolism.dress.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.dress.intro")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.dress.peruvian")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.dress.hungarian")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.symbolism.birds.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.birds.intro")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.birds.condor")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.birds.turul")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.birds.conclusion")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.symbolism.inscription.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.symbolism.inscription.description")}
          </motion.p>

          <motion.h3 variants={itemVariants}>
            {t("imageDetails.anthems.title")}
          </motion.h3>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.intro")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.anthems.peruvian.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.peruvian.description")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.anthems.hungarian.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.hungarian.description")}
          </motion.p>

          <motion.h4 variants={itemVariants}>
            {t("imageDetails.anthems.parallels.title")}
          </motion.h4>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.parallels.description")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.parallels.conclusion")}
          </motion.p>
          <motion.p variants={itemVariants}>
            {t("imageDetails.anthems.parallels.final")}
          </motion.p>

          <motion.div
            className="social-icons-container"
            variants={itemVariants}
          >
            <motion.p className="social-links" variants={itemVariants}>
              {t("imageDetails.social")}
            </motion.p>
            <motion.div className="social-icons">
              <motion.a
                href="https://www.facebook.com/profile.php?id=100064857774925"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/hungriaenlima/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    2: { title: "Image 2", description: "Description for Image 2" },
    3: { title: "Image 3", description: "Description for Image 3" },
    4: { title: "Image 4", description: "Description for Image 4" },
  };

  return (
    <motion.div
      className="image-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="image-container"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={`/images/image${id}.webp`}
          alt={imageDetails[id].title}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="image-info"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>{imageDetails[id].title}</motion.h2>
        {typeof imageDetails[id].description === "string" ? (
          <motion.p variants={itemVariants}>
            {imageDetails[id].description}
          </motion.p>
        ) : (
          imageDetails[id].description
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageDetail;
