import "./Landing.css"
import React from "react";

function Landing(){

  return (
    <>
        <div className="container">
          <img src="" alt="" />
          
          <div className="title-landing">
          <span className="vermelho">Easy </span> <span className="amarelo"> Routines </span>
          {/* <img src="Frame_4-removebg-preview.png" alt="" /> */}
          </div>

          <div className="descricao-landing">


            <p>Um aplicativo de criação de rotinas para crianças autistas pode ter um impacto profundamente positivo na sociedade, promovendo inclusão, autonomia e bem-estar tanto para as crianças quanto para suas famílias. Ao oferecer recursos visuais, lembretes personalizados e atividades estruturadas, o app facilita a compreensão do dia a dia por parte das crianças com transtorno do espectro autista (TEA), que frequentemente se beneficiam de previsibilidade e organização. Além disso, ao reduzir crises de ansiedade e melhorar a comunicação entre pais, cuidadores e educadores, o aplicativo contribui para um ambiente mais acolhedor e colaborativo. A longo prazo, esse tipo de tecnologia pode auxiliar no desenvolvimento da independência dessas crianças, diminuir a sobrecarga familiar e fomentar uma sociedade mais empática e preparada para lidar com a diversidade.
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