import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { locations } from "../data/locations";
import "./Locations.css";

const Locations = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="locations-page">
      <h1>{t("locations.title")}</h1>
      <div className="locations-grid">
        {locations.map((location) => (
          <Link
            to={`/location/${location.id}`}
            key={location.id}
            className="location-card"
          >
            <div className="location-info">
              <h2>{location.name[currentLanguage]}</h2>
              <p className="location-address">
                {location.address[currentLanguage]}
              </p>
              <p className="location-description">
                {location.description[currentLanguage]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Locations;
