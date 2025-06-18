import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Cabecalho from './commom/components/cabecalho/Cabecalho';
import Body from './commom/components/body/body';
import Rodape from './commom/components/rodape/Rodape';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
    <Cabecalho />
    <Body />
    <ToastContainer />
    <Rodape />
    </>
  )
}
export default App;
