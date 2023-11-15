import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CSSTransition } from "react-transition-group";
import {
  BoxOpenClose,
  ItemIcon,
  ListItem,
  MenuBox,
  MenuBoxList,
  MenuBoxLogo,
} from "./styles";

import homeIcon from "../../components/Img/home.png";
import configICon from "../../components/Img/configIcon.png";
import letterIcon from "../../components/Img/letter.png";
import questionIcon from "../../components/Img/question.png";
import desconnectIcon from "../../components/Img/desconnect.png";
import Logo from "../../components/Img/Logo.png";

interface MapComponentProps {
  menuActive?: boolean;
  visible?: boolean;
  handleMenu: (isActive: boolean) => void;
}

const MapComponent: React.FC<MapComponentProps> = (props) => {
  useEffect(() => {
    console.log(props?.menuActive);
  }, [props?.menuActive]);

  const [position, setPosition] = useState<[number, number]>([-8.047562, -34.877523]); 

  let [count, setCount] = useState(0);

  const customIcon = new L.Icon({
    iconUrl: "https://www.clker.com/cliparts/R/B/J/Z/k/m/map-marker-hi.png",
    iconSize: [32, 50],
    iconAnchor: [16, 32],
  });

  useEffect(() => {
    console.log(navigator);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (geoPosition) {
        const latitude = geoPosition.coords.latitude;
        const longitude = geoPosition.coords.longitude;
        setPosition([latitude, longitude]);
        setCount((prevCount) => prevCount + 1);
      });
    }
  }, [count]);

  console.log(props);

  return (
    <div id="map-container" style={{ width: "100%" }}>
      {props?.visible && (
        <CSSTransition in={true} appear={true} timeout={2000} classNames="fade">
          <MenuBox>
            <BoxOpenClose onClick={() => props?.handleMenu(false)} className="Botão">
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

            <MenuBoxList>
              <ListItem>
                <ItemIcon src={homeIcon} /> Início
              </ListItem>
              <ListItem>
                <ItemIcon src={configICon} /> Configurações
              </ListItem>
              <ListItem>
                <ItemIcon src={letterIcon} /> Fale Conosco
              </ListItem>
              <ListItem>
                <ItemIcon src={questionIcon} /> Perguntas Frequentes
              </ListItem>
              <hr />
              <ListItem></ListItem>
              <ListItem>
                <ItemIcon src={desconnectIcon} /> Desconectar
              </ListItem>
            </MenuBoxList>

            <MenuBoxLogo src={Logo} />
          </MenuBox>
        </CSSTransition>
      )}
    </div>
  );
};

export default MapComponent;

