// src/pages/PaginaInicial/PaginaInicial.js
import React, { useEffect, useState } from 'react';
import { useUserData } from '../../context/UserDataContext'; // Importa o UserDataContext
import { useUser } from '../../context/UserContext'; // Para mostrar o usuário logado
import { toast } from 'react-toastify';
import './PaginaInicial.css'; // Se você tiver um CSS para esta página

function PaginaInicial() {
  const { users, loading, error, fetchUsers, deleteUser, updateUser } = useUserData();
  const { user, logoutUser } = useUser(); // Pega o usuário logado e a função de logout

  const [editingUser, setEditingUser] = useState(null); // Usuário sendo editado
  const [editedName, setEditedName] = useState('');
  const [editedUsuario, setEditedUsuario] = useState('');
  const [editedIdade, setEditedIdade] = useState('');

  useEffect(() => {
    fetchUsers(); // Busca os usuários ao carregar a página
  }, [fetchUsers]);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      const sucesso = await deleteUser(id);
      if (sucesso) {
        toast.success("Usuário excluído com sucesso!");
      }
    }
  };

  const handleEdit = (userToEdit) => {
    setEditingUser(userToEdit);
    setEditedName(userToEdit.nome);
    setEditedUsuario(userToEdit.usuario);
    setEditedIdade(userToEdit.idade);
  };

  const handleSaveEdit = async () => {
    if (!editingUser) return;

    const idadeNum = parseInt(editedIdade, 10);
    if (isNaN(idadeNum) || idadeNum < 0) {
      toast.error("Idade deve ser um número válido e positivo!");
      return;
    }

    const updated = {
      nome: editedName,
      usuario: editedUsuario,
      idade: idadeNum,
    };

    const sucesso = await updateUser(editingUser.id, updated);
    if (sucesso) {
      setEditingUser(null); // Sai do modo de edição
      toast.success("Usuário atualizado com sucesso!");
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="container-pagina-inicial">
      <div className="header-pagina-inicial">
        <h1>Bem-vindo, {user ? user.nome : 'Usuário'}!</h1>
        <button onClick={logoutUser} className="btn-logout">Sair</button>
      </div>

      <h2>Lista de Usuários Cadastrados</h2>
      {loading && <p>Carregando usuários...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && users.length === 0 && <p>Nenhum usuário cadastrado.</p>}

      {!loading && !error && users.length > 0 && (
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>
                  {editingUser && editingUser.id === u.id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    u.nome
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === u.id ? (
                    <input
                      type="text"
                      value={editedUsuario}
                      onChange={(e) => setEditedUsuario(e.target.value)}
                    />
                  ) : (
                    u.usuario
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === u.id ? (
                    <input
                      type="number"
                      value={editedIdade}
                      onChange={(e) => setEditedIdade(e.target.value)}
                    />
                  ) : (
                    u.idade
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === u.id ? (
                    <>
                      <button onClick={handleSaveEdit} className="btn-save">Salvar</button>
                      <button onClick={handleCancelEdit} className="btn-cancel">Cancelar</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(u)} className="btn-edit">Editar</button>
                      <button onClick={() => handleDelete(u.id)} className="btn-delete">Excluir</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PaginaInicial;