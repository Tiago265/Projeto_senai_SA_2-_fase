import './App.css';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Cabecalho from './commom/components/cabecalho/Cabecalho';
import Rodape from './commom/components/rodape/Rodape';
import Body from './commom/components/body/body';

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
