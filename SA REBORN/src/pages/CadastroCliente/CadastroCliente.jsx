// src/pages/CadastroCliente/CadastroCliente.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext"; // Usa o UserContext para cadastro
import "./CadastroCliente.css";

function CadastroCliente() {
  const navigate = useNavigate();
  const { registerUser } = useUser(); // Pega a função registerUser do UserContext

  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");

  const cadastrar = async () => {
    if (!nome || !usuario || !senha || !idade) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const idadeNum = parseInt(idade, 10);
    if (isNaN(idadeNum) || idadeNum < 0) {
      toast.error("Idade deve ser um número válido e positivo!");
      return;
    }

    const novoUsuario = { nome, usuario, senha, idade: idadeNum };

    const sucesso = await registerUser(novoUsuario);

    if (sucesso) {
      navigate("/login"); // Navega para a página de login após o sucesso
    }
  };

  return (
    <div className="container-cadastro-cliente">
      <div className="container-cadastro-box">
        <h2>Cadastro de Usuário</h2>
        <div className="input-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </div>
        <div className="input-group">
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Escolha um nome de usuário"
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie uma senha"
          />
        </div>
        <div className="input-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Sua idade"
          />
        </div>
        <button className="btn-cad" onClick={cadastrar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroCliente;