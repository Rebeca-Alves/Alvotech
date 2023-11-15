import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CadastroPage from '../pages/Cadastro/Cadastro';
import LoginPage from '../pages/Login/Login';
import MarcacaoPonto from './MarcacaoPonto';
import ConfirmacaoPonto from './ConfirmacaoPonto';
import EditPoint from "./EditPoint";
import PointConfirmation from "./PointConfirmation";
import AdjustPoint from "./AdjustPoint";
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/'element={<CadastroPage/>} />
        <Route path = '/login'element={<LoginPage/>} />
        <Route path="/marcacao" element={<MarcacaoPonto />} />
        <Route path="/confirmacao" element={<ConfirmacaoPonto />} />
        <Route path="/ajusteponto" element={<AdjustPoint />} />
        <Route path="/edicaoponto" element={<EditPoint />} />
        <Route path="/confirmacaoajuste" element={<PointConfirmation />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
