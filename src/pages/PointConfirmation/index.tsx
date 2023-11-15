import React, { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import {
  ButtonSend,
  SubTitle,
  Title,
} from "./styles";

const MapComponent: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div id="map-container" style={{ height: "100vh", width: "100%", background: "#FFFFFF", textAlign: 'center' }}>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="Justificativa Correção de ponto" menuActive={false}      />

      <Title>Arquivo enviado com sucesso!</Title>
      <SubTitle>Aguarde a resposta no seu e-mail.</SubTitle>

      <ButtonSend>Voltar ao menu inicial</ButtonSend>
    </div>
  );
};

export default MapComponent;
