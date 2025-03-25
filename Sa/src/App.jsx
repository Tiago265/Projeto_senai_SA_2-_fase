import './App.css';
import React from 'react';
import Cabecalho from './commom/components/cabecalho/Cabecalho';
import Rodape from './commom/components/rodape/Rodape';
import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Cabecalho />
    <Outlet />
    <Rodape />
    </>
  )
}
export default App;
