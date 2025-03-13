import "./Landing.css"

function Landing(){

  return (
    <>
        <div className="container">
            
            <div clasName='imagem'>
                <img className="image" src="./images/blackhole.jpg" />
            </div>

            <div className="titulo">
                <h1>Hello there.</h1>
            </div>

            <div className="subtitulo">
                <h2>May the force be with you</h2>
            </div>
            <div className="botao">
                <button>I'm button</button>
            </div>
       
       </div>
    </>
  );
};

export default Landing;