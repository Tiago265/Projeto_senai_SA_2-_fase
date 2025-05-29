import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // Certifique-se que o caminho está correto
import Landing from "./pages/Landing/Landing";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import LoginCliente from "./pages/LoginCliente/LoginCliente";
import VerificarAutenticacao from "./common/components/verificarAutentificacao/verificarAutentificacao.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "landing", element: <Landing /> },
      {
        path: "", // Rota raiz para o conteúdo autenticado
        element: <VerificarAutenticacao />,
        children: [{ path: "paginainicial", element: <PaginaInicial /> }]
      },
      { path: "cadastro", element: <CadastroCliente /> },
      { path: "login", element: <LoginCliente /> },
      { path: "*", element: <div>404 - Página não encontrada</div> },
    ],
  },
]);

export default router;