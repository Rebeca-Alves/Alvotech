import React, { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { ButtonChangePage, Title } from "./styles";
import { Link } from "react-router-dom";

const MapComponent: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="Justificativa Correção de ponto" menuActive={false}/>

      <Title>Central de ajuste de ponto</Title>

      <Link to="/edicaoponto" style={{ textDecoration: 'none' }}>
        <ButtonChangePage>
          Justificativa de correção de ponto
        </ButtonChangePage>
        </Link>

    <Link to="/historico" style={{ textDecoration: 'none' }}>
      <ButtonChangePage>
        Histórico de entradas e saídas
      </ButtonChangePage>
      </Link>
    </>
  );
};

export default MapComponent;
