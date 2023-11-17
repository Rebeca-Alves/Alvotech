import './confirmacao.css';
import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import {Title} from "../AdjustPoint/styles";


interface PontoMarcadoState {
  pontoMarcado?: Date;
}

function ConfirmacaoMarcacao() {
  let navigate = useNavigate();
  let location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const { pontoMarcado } = location.state as PontoMarcadoState || {};

  const handleBack = () => {
    navigate('/HomeOficial');
  };

  return (
    <div className="containerConfirmacao">
      <div className="titulo">
                <Menu handleMenu={setMenuActive} visible={menuActive} />
                <Header
                handleMenu={setMenuActive}
                visible={menuActive}
                title="Marcar Ponto" menuActive={false}/>

                 <Title>Marcação Realizada!</Title>
      <div className="confirmationBox">
        {pontoMarcado && (
          <p>
            Data da marcação: {pontoMarcado.toLocaleDateString()}
            <p>
              Horário da marcação: {pontoMarcado.toLocaleTimeString()}
            </p>
          </p>
        )}
      </div>
      <button className="backButton" onClick={handleBack}>
        Voltar para tela inicial
      </button>
    </div>
    </div>
  );
}

export default ConfirmacaoMarcacao;