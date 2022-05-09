import Head from 'next/head'
//import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import HomeBanner from './components/HomeBanner'
import CardPortafolio from './components/CardPortafolio'
import Container from 'react-bootstrap/Container';
// import {Navbar, Nav, NavDropdown, Card} from 'react-bootstrap/'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css'


 // import bootstrap from 'bootstrap'

const json_demos=[
  {id:1, titulo:"Demo 1", texto:"Contenido para supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"},
  {id:2, titulo:"Demo 2", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"},
  {id:3, titulo:"Demo 3", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"},
  {id:4, titulo:"Demo 4", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"},
  {id:5, titulo:"Demo 5", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"},
  {id:6, titulo:"Demo 6", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg"}
];


export default function Home() {

  //console.log("json_demos ", json_demos[2] );

  return (
  <>
    <Head>
      <title>~ Chileregión ~</title>
    </Head>
      <div className="bg-inicio">
        <Navbar />

        <div className="card-stilo" >
          <HomeBanner />
        </div>
      </div>

    <div className="container-flex cuerpo">
      <div className="row align-items-center " >
        <div className="col">
          <div className="card border-light ">
            <div className="card-body">
              <div className="container-flex">
                <div className="row m-2">
                {
                  json_demos.map(datos=>{
                    return  <CardPortafolio key={datos.id} {...datos} />
                  })
                }
                </div>
                <div className="row m-2 ">
                  <CardPortafolio {...json_demos[2]} />
                  <CardPortafolio {...json_demos[5]} />
                  <CardPortafolio {...json_demos[1]} />
                </div>
                <div className="row m-2">
                  <CardPortafolio />
                  <CardPortafolio />
                  <CardPortafolio />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container pies">
      <div className="row justify-content-center text-center">
        <div className="col-md-2 ms-md-auto ">
          <h6>Mi Pime</h6>
          <p className="bg-info p-3">
            <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/aj-logo-light.svg" alt="Authentic Jobs" width="107"  />
          </p>
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Redes</h6>
          <p>
            <i className="bi bi-whatsapp"></i> +56 9 999999999
          </p>
          <p>
            <i className="bi bi-facebook"></i> Diseños 2022
          </p>
          <p>
            <i className="bi bi-twitter"></i> #Diseños_2022
          </p>
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Infos</h6>
          <p><i className="bi bi-patch-question"></i> Preguntas frecuentes</p>
          <p><i className="bi bi-chat"></i> Asistencia Online</p>
          <p><i className="bi bi-blockquote-left"></i> Blog</p>
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Contactos</h6>
          <p><i className="bi bi-envelope"></i> email@email.com</p>
          <p><i className="bi bi-telephone-forward"></i> +56 9 02020202</p>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-5">
        <div className="col-md-12">
          © 2022<br/>
          Chileregión<br/>
          Coquimbo - Chile<br/>
          Todos los derechos reservados
        </div>
      </div>
    </div>
  </>
  )
}
