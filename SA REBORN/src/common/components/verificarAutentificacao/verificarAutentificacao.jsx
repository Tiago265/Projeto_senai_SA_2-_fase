// src/components/VerificarAutenticacao/VerificarAutentificacao.js
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Importa o hook do UserContext

const VerificarAutenticacao = () => {
  const { user } = useUser(); // Pega o estado 'user' do contexto
  const navigate = useNavigate();

  useEffect(() => {
    // Se o usuário não está logado (user é null), redireciona para o login
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Dependências: user e navigate

  // Se o usuário estiver logado, renderiza o Outlet (componentes filhos)
  return <Outlet />;
};

export default VerificarAutenticacao;