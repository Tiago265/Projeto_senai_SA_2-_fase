import './PaginaInicial.css';
import { useNavigate } from 'react-router-dom';
import Principal from '../../commom/components/principal/Principal';
import CustomButton from '../../commom/components/button/CustomButton';



const PaginaInicial = () => {
   const navigate = useNavigate();

    return(
        
            <div class="grid-container">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
            <div class="grid-item">Item 7</div>
            <div class="grid-item">Item 8</div>
            <div class="grid-item">Item 9</div>
            <div class="grid-item">Item 10</div>
            <div class="grid-item">Item 11</div>
            <div class="grid-item">Item 12</div>
            </div>
        
    );
};

export default PaginaInicial;