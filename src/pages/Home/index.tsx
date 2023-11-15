import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Menu from "../../components/Menu";
import Search from "../../components/Search";
import { ButtonBox, ButtonConfirm } from "./styles";

interface MapComponentProps {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ visible }) => {
  const [position, setPosition] = useState<[number, number]>([-8.047562, -34.877523]);
  const [menuActive, setMenuActive] = useState(false);

  let [, setCount] = useState(0);

  const customIcon = new L.Icon({
    iconUrl: "https://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [32, 50],
    iconAnchor: [16, 32],
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition([latitude, longitude]);
        setCount((prevCount) => prevCount + 1);
      });
    }
  }, []);

  return (
    <div id="map-container" style={{ height: "100vh", width: "100%" }}>
      <Menu handleMenu={setMenuActive} visible={menuActive} />

      <Search handleMenu={setMenuActive} visible={visible} />

      <MapContainer center={position} zoom={19} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
        <Marker position={position} icon={customIcon}>
          <Popup>Localização do usuário</Popup>
        </Marker>
      </MapContainer>
      <ButtonBox>
        <ButtonConfirm>Confirmar localização</ButtonConfirm>
      </ButtonBox>
    </div>
  );
};

export default MapComponent;
