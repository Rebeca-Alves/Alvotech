import { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import {
  ButtonSend,
  CustomFileInput,
  CustomFileInputButton,
  Description,
  File,
  TextButton,
} from "./styles";
import { Link } from "react-router-dom";

interface MapComponentProps {}

const MapComponent: React.FC<MapComponentProps> = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div id="map-container" style={{ height: "100vh", width: "100%", background: "#FFFFFF", textAlign: 'center' }}>
      <Menu handleMenu={setMenuActive} visible={menuActive} />
      <Header
              handleMenu={setMenuActive}
              visible={menuActive}
              title="Justificativa Correção de ponto" menuActive={false}/>

      <CustomFileInput>
        <CustomFileInputButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="35"
            viewBox="0 0 27 35"
            fill="none"
          >
            <path
              d="M0 0V34.2041H26.9307V17.1021H11.5417V0H0ZM15.389 0V12.8265H26.9307L15.389 0Z"
              fill="#46177D"
            />
          </svg>
          <TextButton>Insira o Arquivo</TextButton>
          <div></div>
        </CustomFileInputButton>
        <File type="file" />
      </CustomFileInput>

      <Description>Anexe o arquivo em formato PDF, DOCX</Description>

      <Link to="/confirmacaoajuste"><ButtonSend>Enviar</ButtonSend></Link>
    </div>
  );
};

export default MapComponent;
