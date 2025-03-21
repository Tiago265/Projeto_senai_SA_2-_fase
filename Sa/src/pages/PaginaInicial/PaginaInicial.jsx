import './PaginaInicial.css';
import { useNavigate } from 'react-router-dom';
import Principal from '../../commom/components/principal/Principal';
import CustomButton from '../../commom/components/button/CustomButton';

const PaginaInicial = () => {
    const navigate = useNavigate();

    return(
        <Principal titulo="Página Inicial">
            <CustomButton
             cor="primaria"
             aoClicar={() => navigate('/landing')}>
                Landing
             </CustomButton>
        </Principal>
    );
};

export default PaginaInicial;