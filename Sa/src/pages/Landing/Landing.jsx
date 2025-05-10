import "./Landing.css"
import React from "react";
import { Link } from "react-router-dom";

function Landing(){

  return (
    <>
        <div id="container">
            <div className="container-login">
                <label htmlFor="email">Digite seu Email: </label>
                <input type="email" /> 
                <label htmlFor="senha">Digite sua senha: </label>
                <input type="password" />
                <button>Logar</button>
            </div>
       </div>
    </>
  );
};

export default Landing;