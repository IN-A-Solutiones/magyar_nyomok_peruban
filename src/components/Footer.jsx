import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="footer-content">
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>{t("footer.embassy")}</h3>
          <p>{t("footer.address")}</p>
          <p>{t("footer.phone")}</p>
        </motion.div>
        <motion.div className="footer-section" variants={itemVariants}>
          <div className="social-links">
            <h3>{t("footer.followUs")}</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/HungriaenLima"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/hungriaenlima/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="footer-section" variants={itemVariants}>
          <p className="design-credit">
            {t("footer.design")}:{" "}
            <a
              href="https://inasolutionssac.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              IN-A Solutions S.A.C.
            </a>
          </p>
        </motion.div>
      </div>
      <motion.div className="copyright-section" variants={itemVariants}>
        <p className="copyright">
          &copy; {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
