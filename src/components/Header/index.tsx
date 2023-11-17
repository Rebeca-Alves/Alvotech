import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { BoxOpenClose, HeaderBox, MenuBoxLogo, Title } from "./styles";
import alvo from "../../components/Logo/alvo.png";
import "../../pages/animation.css";

interface MapComponentProps {
  menuActive: boolean;
  title?: string;
  handleMenu: (isActive: boolean) => void;
  visible?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = (props) => {
  const [position, setPosition] = useState<[number, number]>([-8.047562, -34.877523]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(navigator);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (geoPosition) {
        const latitude = geoPosition.coords.latitude;
        const longitude = geoPosition.coords.longitude;
        setPosition([latitude, longitude]);
        setCount(count + 1);
      });
    }
  }, [count]);

  console.log("Position:", position);
  console.log(props);

  return (
    <div id="map-container" style={{ width: "100%" }}>
      <HeaderBox>
        <MenuBoxLogo src={alvo} />
        <Title>{props.title}</Title>
        {!props.menuActive && (
          <BoxOpenClose onClick={() => props.handleMenu(true)}>
            <svg
              width="37"
              height="33"
              viewBox="0 0 37 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V4.625H37V0H0ZM0 13.7362V18.3612H37V13.7362H0ZM0 27.6112V32.2362H37V27.6112H0Z"
                fill="white"
              />
            </svg>
          </BoxOpenClose>
        )}
      </HeaderBox>
    </div>
  );
};

export default MapComponent;
