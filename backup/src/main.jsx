import React from 'react';
import { ClientesProvider } from './commom/service/context.jsx';

import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import router from './commom/service/router';
import './App.css';

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);


function App() {
  return (
    <React.StrictMode>
    <ClientesProvider>
      <RouterProvider router={router} />
    </ClientesProvider>
    </React.StrictMode>
  );
}

export default App;
