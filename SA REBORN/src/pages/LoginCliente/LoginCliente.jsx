// src/pages/LoginCliente/LoginCliente.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext"; // Usa o UserContext para login
import "./LoginCliente.css"; // Se você tiver um CSS para este componente

function LoginCliente() {
  const navigate = useNavigate();
  const { loginUser, user } = useUser(); // Pega a função loginUser e o estado 'user'

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  // Redireciona se já estiver logado
  // useEffect(() => {
  //   if (user) {
  //     navigate("/paginainicial"); // Ou para onde o usuário logado deve ir
  //   }
  // }, [user, navigate]);

  const handleLogin = async () => {
    if (!usuario || !senha) {
      toast.error("Preencha usuário e senha!");
      return;
    }

    const sucesso = await loginUser({ usuario, senha });

    if (sucesso) {
      navigate("/paginainicial"); // Redireciona para a página inicial após o login
    }
    // As mensagens de erro já são tratadas no UserContext
  };

  return (
    <div className="container-login-cliente">
      <div className="container-login-box">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Seu nome de usuário"
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
          />
        </div>
        <button className="btn-login" onClick={handleLogin}>Entrar</button>
        <p>
          Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>
        </p>
      </div>
    </div>
  );
}

export default LoginCliente;