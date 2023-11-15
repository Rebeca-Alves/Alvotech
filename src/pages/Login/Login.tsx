import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import FormLogin from '../../components/FormLogin';
import './login.css'
import alvo from '../../components/Logo/alvo.png';

function LoginPage() {
  const navigate = useNavigate();

  const handleCadastrarClick = () => {
    navigate('/');
  };

    return(
        <div className="Container">
        <div className="Login">
          <img src={alvo} alt="alvo.png" />
            <h2>SEJA BEM VINDO(A)!</h2>
            <h4>Não tem uma conta?</h4>
            <div style={{ marginLeft: '160px' }}>
            <Button
            texto = 'Cadastre-se'
            onClick={handleCadastrarClick}/>
             </div>
          </div>
          <FormLogin/>
      </div>
    )
  }

export default LoginPage;