import { useState } from 'react';
import Seleccion from './seleccion';


export default function LogoUno(){
  const [estado, setEstado] = useState("'Special Elite', cursive")
  const [fuente, setFuente] = useState("'Special Elite', cursive")

  return(
    <>
      <div className="traingulo" />
      <div className="mt-5 mb-5 trapecio" />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mt-2 estrella6 ">
              <div className="texto_logo text-center" >CR</div>
              <div className="texto_logo texto_cmpleto_logo text-center" >CHILE REGION</div>
              <div className="curved-corner-bottomleft" />
            </div>
          </div>
          <div className="col mt-5">
          <Seleccion estado={fuente} setEstado={setFuente} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .traingulo {
          width: 0;
          height: 0;
          border-right: 100px solid transparent;
          border-top: 100px solid transparent;
          border-left: 100px solid transparent;
          border-bottom: 100px solid #f0ad4e;
          /** background: #428bca; ***/
          margin: 0 auto;

        }
        .trapecio {
          width: 250px;
          height: 0px;
          border-right: 60px solid transparent;
          border-left: 60px solid transparent;
          border-bottom: 100px solid #428bca;
          margin: 0 auto;

        }

        .estrella6{
          width:2px;
          /** width:90%; **/
          height:2px;
          border-bottom:130px solid #f0ad4e;
          border-left:85px solid transparent;
          border-right:85px solid transparent;
          margin: 0 auto;
        }
        .estrella6:before{
          content:"";
          display:block;
          width:2px;
          height:2px;
          border-top:40px solid #f0ad4e;
          border-left:40px solid transparent;
          border-right:40px solid transparent;
          position:relative;
          bottom:-115px/* 30% */;
          left:-40px/*55%*/;
        }
        .texto_logo{
          font-family: ${fuente};
          /*** font-family: 'Special Elite', cursive; **/
          position: relative;
          width: 170px;
          left: -85px;
          font-size: 40px;
        }
        .texto_cmpleto_logo{
          position: relative;
          width: 170px;
          top: -2px;
          left: -85px;
          font-size: 12px;
        }
        .icono_logo{
          position: relative;
          width: 10px;
          height: 10px;
          background: black;
        }

.curved-corner-bottomleft,
.curved-corner-bottomright,
.curved-corner-topleft,
.curved-corner-topright {
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  top: -16px;
  left: -20px;
  transform: rotate(-45deg);
}
.curved-corner-bottomleft:before,
.curved-corner-bottomright:before,
.curved-corner-topleft:before,
.curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}
.curved-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -50px 50px 0 0 black;
}
.curved-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 50px 50px 0 0 black;
}
.curved-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -50px -50px 0 0 black;
}
.curved-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 50px -50px 0 0 black;
}
      `}</style>
    </>
  )
}
/***

font-family: 'Blaka', cursive;
font-family: 'Lemon', cursive;
font-family: 'Merienda One', cursive;
font-family: 'New Rocker', cursive;
font-family: 'Peralta', cursive;
font-family: 'Press Start 2P', cursive;
font-family: 'Sanchez', serif;
font-family: 'Sansita', sans-serif;
font-family: 'Sedgwick Ave Display', cursive;
font-family: 'Special Elite', cursive;
font-family: 'Train One', cursive;
font-family: 'Zen Antique', serif;


****/
