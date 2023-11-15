import "leaflet/dist/leaflet.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"; // Importando Link do React Router
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
import alvo from "../../components/Logo/alvo.png";

interface MapComponentProps {
  menuActive?: boolean;
  visible?: boolean;
  handleMenu: (isActive: boolean) => void;
}

const MapComponent: React.FC<MapComponentProps> = (props) => {

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
                <Link to="/marcacao" style={{ color: 'white', textDecoration: 'none' }}> 
                  <ItemIcon src={homeIcon} /> Início
                </Link>
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
              <ListItem>
                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}> 
                  <ItemIcon src={desconnectIcon} /> Desconectar
                </Link>
              </ListItem>
            </MenuBoxList>
            <MenuBoxLogo src={alvo} />
          </MenuBox>
        </CSSTransition>
      )}
    </div>
  );
};

export default MapComponent;

