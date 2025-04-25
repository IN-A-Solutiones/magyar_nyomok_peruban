import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useTranslation } from "react-i18next";
import { locations } from "../data/locations";

export default function Map() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="map-container">
      <MapContainer
        center={[-14.5, -70]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.coordinates.lat, loc.coordinates.lng]}
          >
            <Popup>
              <strong>{loc.title[currentLanguage]}</strong>
              <br />
              <em>{loc.address[currentLanguage]}</em>
              <br />
              {loc.description[currentLanguage]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
