import Relogio from '../../components/Relogio';
import { useNavigate } from 'react-router-dom';
import './marcacao.css'

function MarcarPonto() {
    let navigate = useNavigate();

    const handleMark = () => {
        const dataHoraAtual = new Date();

        navigate('/confirmacao', { state: { pontoMarcado: dataHoraAtual } });
    };

    return (
        <>
        <div className='container'>
            <div className="titulo">
                <h1>Marcação de Ponto</h1>
                <h2>Marque seu ponto</h2>
            </div>
            <div className='outros'>
                <Relogio />
            </div>
            <div className='button'>
                <button className="markButton" onClick={handleMark}>Marcar</button>
            </div>
        </div>
    </>
    );
}

export default MarcarPonto;