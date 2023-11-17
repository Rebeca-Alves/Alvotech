import React, { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { useNavigate} from 'react-router-dom';

import {
  SubTitle,
  Title,
} from "./styles";

const MapComponent: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/HomeOficial');
  };

  return (
    <div id="map-container" style={{ height: "100vh", width: "100%", background: "#FFFFFF", textAlign: 'center' }}>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="Justificativa Correção de ponto" menuActive={false}/>

      <Title>Arquivo enviado com sucesso!</Title>
      <SubTitle>Aguarde a resposta no seu e-mail.</SubTitle>
      <button className="backButton" onClick={handleBack}>
        Voltar para tela inicial
      </button>
    </div>
  );
};

export default MapComponent;
