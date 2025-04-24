import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
          <p className="copyright">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
