// src/context/UserDataContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import api from "../common/services/api/api";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Lista de todos os usuários
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar todos os usuários
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setError("Erro ao carregar a lista de usuários.");
      toast.error("Erro ao carregar a lista de usuários.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Função para adicionar um novo usuário (além do cadastro inicial no UserContext)
  // Este pode ser usado para adicionar usuários por um admin, por exemplo.
  // Para cadastro inicial, use registerUser do UserContext.
  const addUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/usuarios", userData);
      setUsers((prevUsers) => [...prevUsers, response.data]); // Adiciona o novo usuário à lista
      toast.success("Usuário adicionado com sucesso!");
      return true;
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
      setError("Erro ao adicionar usuário.");
      toast.error(err.response?.data?.error || "Erro ao adicionar usuário.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Função para editar um usuário existente
  const updateUser = async (id, userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put(`/usuarios/${id}`, userData);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? response.data : user))
      );
      toast.success("Usuário atualizado com sucesso!");
      return true;
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      setError("Erro ao atualizar usuário.");
      toast.error(err.response?.data?.error || "Erro ao atualizar usuário.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar um usuário por ID
  const getUserById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/usuarios/${id}`);
      return response.data;
    } catch (err) {
      console.error("Erro ao buscar usuário por ID:", err);
      setError("Usuário não encontrado.");
      toast.error("Usuário não encontrado.");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função para excluir um usuário
  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success("Usuário excluído com sucesso!");
      return true;
    } catch (err) {
      console.error("Erro ao excluir usuário:", err);
      setError("Erro ao excluir usuário.");
      toast.error("Erro ao excluir usuário.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Carrega os usuários quando o componente é montado
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // Dependência para re-executar se fetchUsers mudar (o que não deve acontecer com useCallback)

  return (
    <UserDataContext.Provider
      value={{
        users,
        loading,
        error,
        fetchUsers,
        addUser,
        updateUser,
        getUserById,
        deleteUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserDataContext);
};