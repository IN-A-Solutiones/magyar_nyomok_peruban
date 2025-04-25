import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const locations = [
  {
    id: 1,
    name: "Falfestmény Aguas Calientesben",
    lat: -13.1588,
    lng: -72.5314,
    description: "Magyar utalás egy falfestményen az inkák városánál.",
  },
  {
    id: 2,
    name: "Ébneth Lajos szobrai – Lima",
    lat: -12.125,
    lng: -77.0344,
    description: "Szobrok a Miraflores-i Salazar parkban.",
  },
  {
    id: 3,
    name: "Katedrális – Lima",
    lat: -12.0464,
    lng: -77.0301,
    description: "A főtér katedrálisa, magyar vonatkozás említve.",
  },
  {
    id: 4,
    name: "Petőfi tér – La Paz",
    lat: -16.5,
    lng: -68.15,
    description: "Tér, amelyet Petőfi Sándorról neveztek el Bolíviában.",
  },
];

export default function Map() {
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
              <strong>{loc.name}</strong>
              <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
