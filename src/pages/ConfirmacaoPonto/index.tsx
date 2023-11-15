import './confirmacao.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Botao from '../../components/RedondoBotao';


interface PontoMarcadoState {
  pontoMarcado?: Date;
}

function ConfirmacaoMarcacao() {
  let navigate = useNavigate();
  let location = useLocation();

  const { pontoMarcado } = location.state as PontoMarcadoState || {};

  const handleBack = () => {
    navigate('/marcacao');
  };

  const handleVoltarClick = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <h1 className="title"></h1>
      <div className="confirmationBox">
        <div className="confirmationMessage">Marcação Realizada!</div>
        <Botao
          onClick={handleVoltarClick} 
          label={'<'}/>
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
        Voltar para tela de marcação
      </button>
    </div>
  );
}

export default ConfirmacaoMarcacao;