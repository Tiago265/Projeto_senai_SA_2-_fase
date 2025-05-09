import React, { useState } from "react";
import "./CadastroCliente.css";
import BotaoCustomizado from "../../commom/components/BotaoCustomizado/BotaoCustomizado";

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
<<<<<<< HEAD
            
            <div className="cnt-box-cad-um">
            <label htmlFor="Email">Digite seu e-mail: </label>    
            <input
            type="text"
=======
        <div className="label1">
                <label htmlFor="Email">Digite seu e-mail: </label>
        </div>
            <input
            type="text"
            id="Password"
            className="inputs-cadastro"
            value={cadastro.password}
            onChange={(event) => setCadastro({...cadastro, password: event.target.value})}
            ></input>
                <label htmlFor="Idade">Digite sua senha: </label>
            <input
            type="text"
>>>>>>> 7a272f60d9f42cd7a8b4934481325f67617a9bf2
            id="Email"
            className="inputs-cadastro"
            value={cadastro.email}
            onChange={(event) => setCadastro({...cadastro, email: event.target.value})}
            ></input>
            </div>

            <div className="cnt-box-cad-dois">
            <label htmlFor="Idade">Digite sua senha: </label>
            <input
            type="passa"
            id="Password"
            className="inputs-cadastro"
            value={cadastro.password}
            onChange={(event) => setCadastro({...cadastro, password: event.target.value})}
            ></input>
            </div>
            <div className="buttons">
           

            <button onClick={Cadastrar} className="btn-cad">Cadastrar</button>
                {console.log(usuarios)}
            <button className="btn-can">Cancelar</button>

            </div>
            </div>
        </div>
    )
    
}
export default CadastroCliente;