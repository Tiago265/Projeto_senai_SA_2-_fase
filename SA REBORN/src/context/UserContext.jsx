import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../common/services/api/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Armazena o usuário logado

  // Função de Login
  const loginUser = async (credentials) => {
    try {
      const response = await api.post("/login", credentials);
      if (response.status === 200) {
        setUser(response.data.user); // Define o usuário logado
        toast.success("Login bem-sucedido!");
        // Você pode armazenar um token JWT aqui no localStorage/sessionStorage
        // para persistência do login, mas a validação real seria no backend.
        // Ex: localStorage.setItem('token', response.data.token);
        return true;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Usuário ou senha inválidos.");
      } else if (error.request) {
        toast.error("Erro de conexão com o servidor. Verifique se o backend está rodando.");
      } else {
        toast.error("Erro inesperado no login.");
      }
      console.error("Erro no login:", error);
      return false;
    }
  };

  // Função de Logout
  const logoutUser = () => {
    setUser(null);
    toast.info("Você foi desconectado.");
    // Limpar qualquer token de autenticação ou dados de sessão
    // Ex: localStorage.removeItem('token');
  };

  // Função de Cadastro (mantida aqui por conveniência, pois é o primeiro passo do usuário)
  const registerUser = async (userData) => {
    try {
      const response = await api.post("/usuarios", userData); // Chama o endpoint de cadastro de usuários
      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso! Faça login.");
        return true;
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("Nome de usuário já cadastrado!");
        } else if (error.response.status === 400) {
          toast.error(error.response.data.error || "Dados de cadastro inválidos.");
        } else {
          toast.error(`Erro no servidor: ${error.response.status} - ${error.response.data.error || 'Erro desconhecido'}`);
        }
      } else if (error.request) {
        toast.error("Erro de conexão com o servidor. Verifique se o backend está rodando.");
      } else {
        toast.error("Erro inesperado ao enviar dados.");
      }
      console.error("Erro no cadastro:", error);
      return false;
    }
  };

  // Efeito para verificar o status de login inicial (se houver token, etc.)
  // Por enquanto, apenas um placeholder. Em um app real, você validaria um token aqui.
  useEffect(() => {
    // Ex: const token = localStorage.getItem('token');
    // if (token) {
    //   // Validar token com o backend e definir o usuário
    //   // api.get('/me', { headers: { Authorization: `Bearer ${token}` } })
    //   //   .then(res => setUser(res.data.user))
    //   //   .catch(() => logoutUser());
    // }
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};