import './App.css';
import Cabecalho from './commom/components/cabecalho/Cabecalho';
import Rodape from './commom/components/rodape/Rodape';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  
  return (
    <>
    

    <Cabecalho />
    <Outlet />
    <ToastContainer />
    <Rodape />

    </>
  )
}
export default App;
