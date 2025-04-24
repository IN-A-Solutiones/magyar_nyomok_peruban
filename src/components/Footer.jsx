import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t("footer.embassy")}</h3>
          <p>{t("footer.address")}</p>
          <p>{t("footer.phone")}</p>
        </div>
        <div className="footer-section">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
