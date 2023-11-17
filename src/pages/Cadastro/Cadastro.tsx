import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/FormCadastro';
import './cadastro.css';
import alvo from '../../components/Logo/alvo.png';

function CadastroPage() {
  const navigate = useNavigate();

  const handleEntrarClick = () => {
    navigate('/login');
  };

  return (
     <div className='container'>
       <div className="Cadastro">
        <img src={alvo} alt="alvo.png" />
          <h2>SEJA BEM VINDO(A)!</h2>
          <h4>Já tem uma conta?</h4>
        <div style={{ marginLeft: '200px' }}>
          <Button
           texto = "Entrar"
           onClick={handleEntrarClick}/>
            </div>
          </div>
        <Form/>
        
      </div>
    );
  } 
  
export default CadastroPage;