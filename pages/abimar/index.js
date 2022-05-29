import { useState } from 'react';
import Cabeza from './components/cabeza'
import Carrusel from './components/carrusel'
import Cardhome from './components/cardhome'
import Presentacionhome from './components/presentacionhome'
import Paralaxhome from './components/paralaxhome'
import Hoverhome from './components/hoverhome'
import Pies from './components/pies'

export default function Abimar(props) {

   const [visible, setVisible] = useState("invisible btn-flotante");
  // {url: "/images/abimar/sea-water-hd-800.png", titulo:"Manejo de areas de manejo"},
  /// imagen carrusel ******
  const urlImg=[
    {url: "/images/abimar/sea-water-hd-800.png"},
    {url: "/images/abimar/a5.webp"},
    {url: "/images/abimar/artenzanal.jpg"}
  ]

  const urlImgCards=[
    {url: "/images/abimar/artenzanal.jpg", titulo: "Gubernamental", texto:"Nuestra vinculación profesional con el Estado de Chile se remonta a los comienzos de las operaciones de la empresa en 1998, llevando a cabo un sin número de licitaciones para diversas entidades del gobierno, cuyos objetivos, han sido principalmente, realizar estudios para la evaluación de diferentes recursos hidrobiológicos"},
    {url: "/images/abimar/a2.webp", titulo: "Sector privado", texto:"La empresa Abimar realiza trabajos para otras entidades privadas. Entre ellos estudios ambientales como INFA, EIA, DIA, entre otros. Colaboracion con empresas ligadas al sectos pesquero y de cultivo marino."},
    {url: "/images/abimar/a6.webp", titulo: "Pesca artesanal", texto:"Desarrollo de situación base, Seguimientos, Protocolos de Repoblamientos, Repoblamientos experimentales y Masivos, Acuicultura de Pequeña Escala de Individuos (recursos hidrobiológicos) en áreas de manejo y explotación de recursos bentónicos (AMERBs). Además de lo anterior, Proyectos sociales, postulaciones a fondos concursables gubernamentales y privados."}
  ]

  const textoPresentacion = {
    titulo: "Le damos bienvenida",
    texto:"Abimar Ltda. es una empresa que empezó sus actividades en el año 2003 especializándose en el ámbito de las Ciencias del Mar en Áreas Marinas Protegidas (Reserva Marina Isla Chañaral, Reserva marina Pingüino de Humboldt, Áreas de Manejo Y Explotación de ´Recursos Bentónicos) con un total de 60 AMERBs aprox. Ademas de incluimos los estudios de Seguimientos y ESBAs (Estudio de Situación Base) en todo Chile."
  }

  const getOffset=( el )=> {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  let elDiv=null;
  if (typeof window !== "undefined") {
    elDiv=document.getElementById('una-id')
    window.addEventListener('scroll', function(e) {
      window.requestAnimationFrame(function() {
        // console.log('elDiv: ', elDiv.getBoundingClientRect().top  );
        // console.log('scrollY: ', window.scrollY  );
        (window.scrollY <= 250)? setVisible("invisible btn-flotante"): setVisible("btn-flotante")
      })
    })
  }

  // <div className="carousel-caption " style={{"top":"-10px"}}>
  return(
    <>
      <div id="una-id" />
      <Cabeza titulo="Abimar" />
      <div className="container">
        <Carrusel urlImg={urlImg} />
        <Presentacionhome {...textoPresentacion} />
        <Cardhome {...[urlImgCards]} />
        <Paralaxhome />
        <Hoverhome />
        <a id="bntVolver" href="#una-id" className={visible} >
          <i className="bi bi-arrow-up-circle-fill h1"></i>
        </a>
        <Pies />
      </div>
      <style jsx>{`
        .invisible{
          transition: opacity 500ms, transform 500ms;
          transform: translateY(7px);
          opacity:0;
        }

        .btn-flotante {
          opacity:1;
          font-size: 16px; /* Cambiar el tamaño de la tipografia */
          text-transform: uppercase; /* Texto en mayusculas */
          font-weight: bold; /* Fuente en negrita o bold */
          color: #ffffff; /* Color del texto */
          border-radius: 9px; /* Borde del boton */
          letter-spacing: 2px; /* Espacio entre letras */
          background-color: #475ba3c2; /* Color de fondo */
          padding: 10px 10px; /* Relleno del boton */
          //margin:0 auto;
          position: fixed;
          bottom: 20px;
          right: 20px;
          //transition: all 300ms ease 0ms;
          transition: transform 300ms, opacity 500ms;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          z-index: 99;
        }
        .btn-flotante:hover {
          background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
          box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(-7px);
          //transition: translateY 300ms;
          //transition: opacity 500ms, transform 500ms;
        }
        @media only screen and (max-width: 600px) {
          .btn-flotante {
          font-size: 14px;
          padding: 10px 10px;
          bottom: 20px;
          right: 20px;
          }
        }

        `}</style>
    </>
  )
}
