import {useState} from 'react';
import Relogio from '../../components/Relogio';
import { useNavigate} from 'react-router-dom';
import './marcacao.css'
import Menu from '../../components/Menu'
import Header from '../../components/Header';
import {Title} from "../AdjustPoint/styles";

function MarcarPonto() {
    let navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false);

    const handleMark = () => {
        const dataHoraAtual = new Date();
    };

    return (
        <div className='containerMarcacao'>
            <div className="titulo">
                <Menu handleMenu={setMenuActive} visible={menuActive} />
                <Header
                handleMenu={setMenuActive}
                visible={menuActive}
                title="Marcar Ponto" menuActive={false}/>
                 <Title>Marque seu ponto</Title>
            <div className='outros'>
                <Relogio />
            </div>
            <div className='button'>
                <button className="markButton" onClick={handleMark}>Marcar</button>
            </div>
        </div>
    </div>
    );
}

export default MarcarPonto;