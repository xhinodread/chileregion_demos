import Head from 'next/head';
//import Image from 'next/image'
import Link from 'next/link';
import Navbar from './components/navbar';
import HomeBanner from './components/homeBanner';
import Portafolio from './components/portafolio';
import CardPortafolio from './components/cardPortafolio'
import Container from 'react-bootstrap/Container';
// import {Navbar, Nav, NavDropdown, Card} from 'react-bootstrap/'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import Pies from './components/pies'

import Imghover from './components/imghover'
import Googlemapa from './components/googlemapa'
import BottonGlowing from './components/bottonglowing'
import Paginacion from './components/paginacion'
import ServerSide from './api/server-side'

 // import bootstrap from 'bootstrap'

const json_demos=[
  {id:1, titulo:"Abimar", texto:"La empresa abimar, posee un amplio registro de servicios requeridos por el sector pesquero artesanal, gubernamental y privado, vinculado al ámbito marino...", txt_extra:"Ultima actualización 3 mins ...", imagen:"./images/portadaPortafoliosAbimar.jpg", url:"/abimar"},
  {id:2, titulo:"Planeta Sol", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg", url:"/planetasol"},
  {id:3, titulo:"App Coorperativa", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg", url:"/appcoorperativa"},
  {id:4, titulo:"Efectos varios", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg", url:"/varios"},
  {id:5, titulo:"Sliders", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg", url:"/sliders"},
  {id:6, titulo:"Paginación", texto:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", txt_extra:"Last updated 3 mins ago", imagen:"./images/portadaPortafolios.jpg", url:"/paginacion"}
];


export default function Home() {

  //console.log("json_demos ", json_demos[2] );

  return (
  <>
    <Head>
      <title>~ Chile Región ~</title>
    </Head>
    <div className="bg-inicio">
      <Navbar />

      <div className="card-stilo" >
        <HomeBanner />
      </div>
    </div>

    <Portafolio json_demos={json_demos} />

    <div className="container mt-5 pies">
      <Pies />
    </div>

    <style jsx>{` `}</style>
  </>
  )
}
