import React, { useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import StyledQuadro from '../../components/Quadro';
import Banner from '../../components/Img/banner.png'
import './style.css'

const MapComponent: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);


  return (
    <>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="SEJA BEM VINDO!" menuActive={false}/>
        <img src={Banner} alt="" className="banner" />
      <div className="quadros">
        <StyledQuadro titulo="Marcar ponto" to="/marcacao" />
        <StyledQuadro titulo="Corrigir Ponto" to="/ajusteponto" />
        <StyledQuadro titulo="Localização" to="/home" />
        <StyledQuadro titulo="Histórico" to="/historico"/>
      </div>
    </>
   );
  };

export default MapComponent;
