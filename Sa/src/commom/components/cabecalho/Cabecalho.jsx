import Avatar from "../avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header className="cabecalho_root">
            <img src="profile-icon.png" height={40} />
            <Avatar nome="Nome Sobrenome" />
        </header>
    );
}

export default Cabecalho;