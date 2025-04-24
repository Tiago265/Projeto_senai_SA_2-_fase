import React, { useState } from "react";
import "./CadastroCliente.css";

function CadastroCliente(){
const [usuarios, setUsuarios] = useState([])
    const [cadastro, setCadastro] = useState({
        nome: "",
        idade: 0,
        email: "",
        password: ""
    })

    function Cadastrar(){
        let formulario = {
            id: Date.now(),
            nome: cadastro.nome,
            idade: cadastro.idade,
            email: cadastro.email,
            password: cadastro.password
        }
            setUsuarios([...usuarios,formulario])
    }
    return(
        <div className="container-cadastro-cliente">
        <div className="container-cadastro-box">
            <label htmlFor="Nome">Digite seu nome: </label>
            <input
            type="text"
            placeholder="Digite seu nome aqui"
            id="Nome"
            className="inputs-cadastro"
            value={cadastro.nome}
            onChange={(event) => setCadastro({...cadastro, nome: event.target.value})}
            ></input><br/>
                        <label htmlFor="Nome">Digite seu nome: </label>
            <input
            type="text"
            placeholder="Digite sua idade aqui"
            id="Idade"
            className="inputs-cadastro"
            value={cadastro.idade}
            onChange={(event) => setCadastro({...cadastro, idade: event.target.value})}
            ></input><br/>
                        <label htmlFor="Idade">Digite sua idade: </label>
            <input
            type="text"
            placeholder="Digite seu e-mail aqui"
            id="Email"
            className="inputs-cadastro"
            value={cadastro.email}
            onChange={(event) => setCadastro({...cadastro, email: event.target.value})}
            ></input><br/>
                        <label htmlFor="Email">Digite seu e-mail: </label>
            <input
            type="text"
            placeholder="Digite sua senha aqui"
            id="Password"
            className="inputs-cadastro"
            value={cadastro.password}
            onChange={(event) => setCadastro({...cadastro, password: event.target.value})}
            ></input><br/>
            <button onClick={Cadastrar}>Cadastrar</button>
                {console.log(usuarios)}
            </div>
        </div>
    )
    
}
export default CadastroCliente;