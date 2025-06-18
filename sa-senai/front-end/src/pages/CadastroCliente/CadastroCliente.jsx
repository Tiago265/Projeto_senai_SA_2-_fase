import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./CadastroCliente.css";

function CadastroCliente() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastrar = async () => {
    if (!nome || !email || !senha || !endereco || !telefone) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      // Verifica se o usuário já está cadastrado
      const checkResponse = await axios.get(
        `http://localhost:3001/verificarUsuario?email=${email}`
      );

      if (checkResponse.data.exists) {
        toast.error("Um usuário com este e-mail já foi cadastrado!");
        return;
      }
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      toast.error("Erro ao verificar usuário!");
      return;
    }

    try {
      // Se não existe, cadastra o novo cliente
      const novoCliente = { nome, email, senha, endereco, telefone };
      const cadastroResponse = await axios.post(
        "http://localhost:3001/clientes",
        novoCliente
      );

      if (cadastroResponse.status === 201) {
        toast.success("Cadastro realizado com sucesso! Faça login.", {
          onClose: () => navigate("/login"),
          autoClose: 1500,
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      toast.error("Erro ao cadastrar cliente!");
    }
  };

  return (
    <div className="container-cadastro-cliente">
      <div className="container-cadastro-box">
        <h2>Cadastro</h2>
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          />
        </div>
        <div className="input-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Endereço"
          />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
        </div>
        <button className="btn-cad" onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default CadastroCliente;
