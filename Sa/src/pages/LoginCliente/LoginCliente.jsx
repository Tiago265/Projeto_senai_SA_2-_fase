import React, { useState } from "react";
import "./LoginCliente.css";

function LoginCliente() {
    const [login, setLogin] = useState({
    email: "",
    password: ""
  });

function realizarLogin() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find(
        (user) => user.email === login.email && user.password === login.password
    );

    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha incorretos!");
  }
}

  return (
    <div className="container-login-cliente">
      <div className="container-login-box">
        <div className="cnt-box-login">
          <label htmlFor="Email">Digite seu e-mail:</label>
          <input
            type="text"
            id="Email"
            className="inputs-login"
            value={login.email}
            onChange={(event) =>
              setLogin({ ...login, email: event.target.value })
            }
          />
        </div>

        <div className="cnt-box-login">
          <label htmlFor="Password">Digite sua senha:</label>
          <input
            type="password"
            id="Password"
            className="inputs-login"
            value={login.password}
            onChange={(event) =>
              setLogin({ ...login, password: event.target.value })
            }
          />
        </div>

        <div className="buttons">

        <button onClick={realizarLogin} className="btn-log">
            Login
        </button>

        </div>
      </div>
    </div>
  );
}

export default LoginCliente;
