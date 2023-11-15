import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { ButtonChangePage, ButtonIcon, Title } from "./styles";
import clockIcon from "../../components/Img/clock.png";
import { Link } from "react-router-dom";

const MapComponent: React.FC = () => {
  const [, setPosition] = useState([-8.047562, -34.877523]);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setPosition([-8.047562, -34.877523]);
  }, []); 

  return (
    <div
      id="map-container"
      style={{ height: "100vh", width: "100%", background: "#FFFFFF", textAlign: 'center' }}
    >
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="Justificativa Correção de ponto" menuActive={false}/>

      <Title>Central de ajuste de ponto</Title>

      <Link to="/edit-point">
        <ButtonChangePage>
          <ButtonIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="68"
              viewBox="0 0 61 68"
              fill="none"
            >
              <path
                d="M0 0V67.4728H60.8919V33.7364H26.0965V0H0ZM34.7954 0V25.3023H60.8919L34.7954 0Z"
                fill="#46177D"
              />
            </svg>
          </ButtonIcon>
          Justificativa de correção de ponto
          <div></div>
        </ButtonChangePage>
      </Link>

      <ButtonChangePage>
        <ButtonIcon>
          <img src={clockIcon} alt="Clock Icon" />
        </ButtonIcon>
        Histórico de entradas e saídas
        <div></div>
      </ButtonChangePage>
    </div>
  );
};

export default MapComponent;
