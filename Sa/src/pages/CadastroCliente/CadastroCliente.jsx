import React, { useEffect, useState } from "react";
import "./CadastroCliente.css";


function CadastroCliente(){
    const [usuarios, setUsuarios] = useState([])
    const [inputUsuario, setInputUsuario] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')


useEffect(() => {
    const UsersCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(UsersCadastrados);
    }, []);
    
const [cadastro, setCadastro] = useState({
    id: "",
    email: "",
    password: ""
});

function Cadastrar(){
    const formulario = {
    id: Date.now(),
    email: cadastro.email,
    password: cadastro.password
};
            // setUsuarios([...usuarios,formulario])
            
const UsersCadastradosAtualizados = [...usuarios, formulario];
    setUsuarios(UsersCadastradosAtualizados);
    localStorage.setItem("usuarios", JSON.stringify(UsersCadastradosAtualizados));

    alert("Usuário cadastrado com sucesso!");
}

    return(
        <div className="container-cadastro-cliente">
          <div className="container-cadastro-box"> 
            <div className="cnt-box-cad-um">
            <label htmlFor="Usuario">Digite seu nome de Usuário: </label>
            <input 
            type="text" 
            id="usuario"
            className="inputs-cadastro"
            value={inputUsuario}
            onChange={(event) => setInputUsuario(event.target.value)}/>
            <label htmlFor="Email">Digite seu e-mail: </label>    
            <input
            type="text"
            id="Email"
            className="inputs-cadastro"
            value={cadastro.email}
            onChange={(event) => setCadastro({...cadastro, email: event.target.value})}
            />
            
            </div>

            <div className="cnt-box-cad-dois">
            
            <label htmlFor="Password">Digite sua senha: </label>
            <input
            type="password"
            id="Password"
            className="inputs-cadastro"
            value={cadastro.password}
            onChange={(event) => setCadastro({...cadastro, password: event.target.value})}
            />
            <label htmlFor="Confirmacao">Digite novamente sua senha: </label>
            <input type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)} />
            
            </div>
            
            <div className="buttons">
           
            <button onClick={Cadastrar} className="btn-cad">Cadastrar</button>
            {console.log(usuarios)}

            </div>
          </div>
        </div>
    )
    
}
export default CadastroCliente;