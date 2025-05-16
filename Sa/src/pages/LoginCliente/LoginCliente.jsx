import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ServicoAutentificacao from "../../common/service/servicoAutentificacao";
import "./LoginCliente.css";

const instanciaServicoAutentificacao = new ServicoAutentificacao();

function LoginCliente() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    if (!email || !senha) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const usuarioLogado = instanciaServicoAutentificacao.login(email, senha);
    if (usuarioLogado) {
      toast.success("Login realizado com sucesso!");
      navigate("/paginainicial");
    } else {
      toast.error("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="container-login-cliente">
      <div className="container-login-box">
                <h2>Login</h2>
        <div className="cnt-box-login">
          <label htmlFor="email">Digite seu e-mail:</label>
          <input
            type="text"
            id="email"
            className="inputs-login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="cnt-box-login">
          <label htmlFor="senha">Digite sua senha:</label>
          <input
            type="password"
            id="senha"
            className="inputs-login"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button onClick={entrar} className="btn-log">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCliente;