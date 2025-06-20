import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="navbar-list">
            <li className="navbar-item">
                    <Link to="/home" className="navbar-link">HomePage</Link>
            </li>

            <li className="navbar-item">
                    <Link to="/landing" className="navbar-link">Landing</Link>
            </li>

            <li className="navbar-item">
                    <Link to="/cadastro" className="navbar-link">Cadastrar</Link>
            </li>
            <li className="navbar-item">
                    <Link to="/login" className="navbar-login">Login</Link>
            </li>
            <li className="navbar-item">
            </li>
            </ul>
        </nav>

    );
};

export default Navbar;