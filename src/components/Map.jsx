import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useTranslation } from "react-i18next";

const locations = [
  {
    id: 1,
    name: {
      hu: "Falfestmény Aguas Calientesben",
      es: "Mural en Aguas Calientes",
      qu: "Pintura mural Aguas Calientespi",
    },
    address: {
      hu: "Aguas Calientes, Cusco régió, Peru",
      es: "Aguas Calientes, Región Cusco, Perú",
      qu: "Aguas Calientes, Cusco suyu, Piruw",
    },
    lat: -13.1588,
    lng: -72.5314,
    description: {
      hu: "Magyar utalás egy falfestményen az inkák városánál.",
      es: "Referencia húngara en un mural cerca de la ciudad de los incas.",
      qu: "Hungaruyuq rimay muralpi, inka llaqtap qayllanpi.",
    },
  },
  {
    id: 2,
    name: {
      hu: "Ébneth Lajos szobrai – Lima",
      es: "Esculturas de Ébneth Lajos – Lima",
      qu: "Ébneth Lajospa esculturas – Lima",
    },
    address: {
      hu: "Parque Salazar, Miraflores, Lima, Peru",
      es: "Parque Salazar, Miraflores, Lima, Perú",
      qu: "Salazar parque, Miraflores, Lima, Piruw",
    },
    lat: -12.125,
    lng: -77.0344,
    description: {
      hu: "Szobrok a Miraflores-i Salazar parkban.",
      es: "Esculturas en el Parque Salazar de Miraflores.",
      qu: "Esculturas Miraflores Salazar parquepi.",
    },
  },
  {
    id: 3,
    name: {
      hu: "Katedrális – Lima",
      es: "Catedral – Lima",
      qu: "Catedral – Lima",
    },
    address: {
      hu: "Plaza Mayor, Lima történelmi központja, Peru",
      es: "Plaza Mayor, Centro Histórico de Lima, Perú",
      qu: "Plaza Mayor, Lima historico centro, Piruw",
    },
    lat: -12.0464,
    lng: -77.0301,
    description: {
      hu: "A főtér katedrálisa, magyar vonatkozás említve.",
      es: "La catedral en la Plaza Mayor, con referencia húngara.",
      qu: "Plaza Mayorpi catedral, hungaruyuq rimaywan.",
    },
  },
  {
    id: 4,
    name: {
      hu: "Petőfi tér – La Paz",
      es: "Plaza Petőfi – La Paz",
      qu: "Petőfi plaza – La Paz",
    },
    address: {
      hu: "La Paz, Bolívia",
      es: "La Paz, Bolivia",
      qu: "La Paz, Wuliwya",
    },
    lat: -16.5,
    lng: -68.15,
    description: {
      hu: "Tér, amelyet Petőfi Sándorról neveztek el Bolíviában.",
      es: "Plaza nombrada en honor al poeta húngaro Sándor Petőfi en Bolivia.",
      qu: "Sutichasqa hungaruyuq harawiq Sándor Petőfip sutin, Wuliwyapi.",
    },
  },
];

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
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name[currentLanguage]}</strong>
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
