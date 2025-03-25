import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/paginainicial" className="navbar-link">Início</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/landing" className="navbar-link">Jogos Educacionais</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/comunicacao" className="navbar-link">Comunicação</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/atividades" className="navbar-link">Atividades</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/configuracoes" className="navbar-link">Configurações</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
