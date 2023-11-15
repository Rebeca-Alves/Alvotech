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

