import "./Landing.css"
import React from "react";
import { Link } from "react-router-dom";

function Landing(){

  return (
    <>
        <div id="container">
            
            <div id="picture">
                <img id='imagem' src="./images/blackhole.jpg" />
            </div>

            <div id="titulo">
                <h1>Hello there.</h1>
            </div>

            <div id="subtitulo">
                <h2>May the force be with you</h2>
            </div>
            <div id="botao">
                <button>I'm button</button>
            </div>
                <Link to="/">retornar a página inicial</Link>
       
       </div>
    </>
  );
};

export default Landing;