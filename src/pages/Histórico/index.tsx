import {useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import {Title} from "../AdjustPoint/styles";
import { useNavigate } from 'react-router-dom';
import './style.css'

const MapComponent: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();

    const handleVerificarClick = () => {
      navigate('/entradasaida');
    };

    return (
      <>
          <Menu handleMenu={setMenuActive} visible={menuActive} />
          <Header
                  handleMenu={setMenuActive}
                  visible={menuActive}
                  title="" menuActive={false}/>
                    <Title>Histórico de entradas e saídas</Title>
          <div className="data">
            <div className="data__div">
              <div className="data__inicio">
                <p className="data__inicio">Insira a data desejada</p>
                  <input className="data__input" type="date" />
              </div>
            </div>
          </div>
        <div className="button">
          <button className="buttonVerificar"
          onClick={handleVerificarClick}>
            Verificar histórico
          </button>
        </div>
      </>
    );
  };
  
export default MapComponent;