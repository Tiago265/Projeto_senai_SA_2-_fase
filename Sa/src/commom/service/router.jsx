import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Landing from "../../pages/Landing/Landing";
import PaginaInicial from "../../pages/PaginaInicial/PaginaInicial";
import CadastroCliente from "../../pages/CadastroCliente/CadastroCliente";
import LoginCliente from "../../pages/LoginCliente/LoginCliente";

// Configuração das rotas

const router = createBrowserRouter([
    {
        path: "/", // Rota raiz
        element: <App />, // Componente principal
        children: [
            { path: "paginainicial", element: <PaginaInicial/> }, // Subrota "home"
            { path: "landing", element: <Landing /> },
            { path: "cadastro", element: <CadastroCliente /> },
            { path: "login", element: <LoginCliente /> },
            { path: "*", element: <div>404 - Página não encontrada</div> }, // Rota para erro 404
        ],
    },
]);

export default router;
