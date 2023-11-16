import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

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
              title="SEJA BEM VINDO!" menuActive={false}/>
    </div>
 );
};

export default MapComponent;
