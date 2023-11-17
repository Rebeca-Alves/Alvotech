import {useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import {Title} from "../AdjustPoint/styles";
import './style.css'


const MapComponent: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
      <>
          <Menu handleMenu={setMenuActive} visible={menuActive} />
          <Header
                  handleMenu={setMenuActive}
                  visible={menuActive}
                  title="" menuActive={false}/>
                    <Title>Histórico de entradas e saídas</Title>
          <div className="entrada">
            <h2 className="div__entrada">Entrada</h2>
              <input type="time" value="" className="horario__entrada" readOnly />
            </div>
          <div className="intervalo">
            <h2 className="div__intervalo">Intervalo</h2>
              <input type="time" value="" className="horario__intervalo" readOnly />
            </div>
          <div className="retorno">
            <h2 className="div__retorno">Retorno</h2>
              <input type="time" value="" className="horario__retorno" readOnly />
            </div>
          <div className="saida">
            <h2 className="div__saida">Saída</h2>
              <input type="time" value="" className="horario__saida" readOnly />
            </div>
        </>
    );
  };
  
export default MapComponent;