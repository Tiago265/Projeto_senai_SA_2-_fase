import "./Landing.css"
import React from "react";
import { Link } from "react-router-dom";

function Landing(){

  return (
    <>
        <div className="container">
          <img src="" alt="" />
          
          <div className="title-landing">
          <span className="vermelho">Autism </span> <span className="amarelo"> Aid </span> <span className="roxo">Game</span>
          </div>

          <div className="descricao-landing">


            <p>Um site de auxílio para educadores, pais e/ou responsáveis de crianças com TEA.
              de maneira prática e rápida você adpta uma rotina de acordo com suas necessidades. O site 
              também conta com auxílio na área de comunicação através de sons e imagens, que você mesmo pode
              escolher e adaptar.
            </p>
            </div>
          <div className="botao-landing">

            <button className="btn-rotina"><span className="vermelho">Crie </span><span className="amarelo">sua ro</span> <span className="roxo">tina ag</span> <span className="vermelho">ora</span></button>
            
          </div>


       </div>
    </>
  );
};

export default Landing;