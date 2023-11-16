import React, { useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import StyledQuadro from '../../components/Quadro';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const MapComponent: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);


  return (
    <>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="SEJA BEM VINDO!" menuActive={false}/>
      <StyledQuadro titulo="Marcar ponto" to="/marcacao"  icon={<SearchIcon />} />
      <StyledQuadro titulo="Corrigir Ponto" to="/ajusteponto" icon={<HomeIcon />} />
      <StyledQuadro titulo="Localização" to="/home" icon={<HomeIcon />} />
      <StyledQuadro titulo="Notificações" to="/second" icon={<HomeIcon />} />
    </>
   );
  };

export default MapComponent;
