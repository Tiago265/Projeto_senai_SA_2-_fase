import React, { useEffect } from 'react'; // Remova useState, pois o status virá do contexto
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate
import { useUser } from "../../../context/UserContext.jsx";
import './Navbar.css';

const Navbar = () => {
    // Pegamos o 'user' (que indica se alguém está logado ou null) e a função 'logoutUser' do contexto
    const { user, logoutUser } = useUser();
    const navigate = useNavigate(); // Para redirecionar após o logout

    // O status 'online' agora é diretamente derivado do 'user' do contexto
    const online = !!user; // '!!user' transforma o objeto user (se não for null) em true, e null em false

    // Não precisamos mais de um useEffect para 'statusOnline' nem de um estado 'online' separado,
    // pois o 'user' do contexto já é reativo.
    // O efeito abaixo é apenas um exemplo se você quisesse fazer algo quando o user muda.
    useEffect(() => {
        // console.log("Status de login na Navbar:", online ? "Online" : "Offline");
    }, [online]); // Dependência em 'online' para reagir a mudanças

    const handleLogout = () => { // Renomeado para seguir convenção
        logoutUser(); // Chama a função de logout do contexto
        navigate('/login'); // Redireciona para a página de login após o logout
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {/* Mostra HomePage apenas se estiver online */}
                {online && (
                    <li className="navbar-item">
                        <Link to="/paginainicial" className="navbar-link">HomePage</Link>
                    </li>
                )}

                {/* Landing page sempre visível */}
                <li className="navbar-item">
                    <Link to="/landing" className="navbar-link">Landing</Link>
                </li>

                {/* Mostra Cadastrar e Login apenas se NÃO estiver online */}
                {!online && (
                    <>
                        <li className="navbar-item">
                            <Link to="/cadastro" className="navbar-link">Cadastrar</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="navbar-login">Login</Link>
                        </li>
                    </>
                )}

                {/* Mostra Logout apenas se estiver online */}
                {online && (
                    <li className="navbar-item">
                        <button onClick={handleLogout} className="btn-logout">Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;