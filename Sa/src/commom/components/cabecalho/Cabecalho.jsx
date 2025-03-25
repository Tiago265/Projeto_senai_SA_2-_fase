import "./Cabecalho.css";
import Navbar from "../navbar/navbar";
import Avatar from "../avatar/Avatar";

function Cabecalho() {
    
    return (
        <header className="cabecalho_root">
            {/* <img src="icon-profile-3.jpg" height={40} /> */}
            <Avatar nome="Nome Sobrenome" />
            <h1 className="cabecalho-title">Autism Aid Game</h1>
            <Navbar />
        </header>
    );
}

export default Cabecalho;