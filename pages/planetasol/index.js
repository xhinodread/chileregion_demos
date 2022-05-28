import Head from 'next/head'
import Link from 'next/link'
import Menu from './components/menu'
import Carrusel from './components/carrusel'
import Categorias from './components/categorias'
import Carteles from './components/carteles'
import Paralaxhome from './components/paralaxhome'
import Ubicacion from './components/ubicacion'
import Pies from './components/pies'

export default function Index(){


  return(
    <>
      <Head>
        <title>~ Planeta Sol ~</title>
      </Head>
      <Link href="/" ><a className="nav-link btn-flotante" aria-current="page" >Volver</a></Link>
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col ">
            <Menu />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col mt-5">
            <Carrusel />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Categorias />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Paralaxhome />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Carteles />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Ubicacion />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Pies />
          </div>
        </div>

      </div>
      <style jsx>{`

        .btn-flotante {
          font-size: 5px; /* Cambiar el tamaño de la tipografia */
          text-transform: uppercase; /* Texto en mayusculas */
          // font-weight: bold; /* Fuente en negrita o bold */
          color: #ffffff; /* Color del texto */
          border-radius: 9px; /* Borde del boton */
          letter-spacing: 2px; /* Espacio entre letras */
          background-color: #475ba3c2; /* Color de fondo */
          padding: 5px 5px; /* Relleno del boton */
          position: fixed;
          top:5px;
          //bottom: 20px;
          //right: 20px;
          left: 3px;
          transition: all 300ms ease 0ms;
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          z-index: 1099;
        }
      `}</style>
    </>
  )
}


//
// <div className="ms-5 row justify-content-center text-primary" >
// <i className="col bi bi-emoji-sunglasses"></i>
// <i className="col bi bi-emoji-sunglasses-fill"></i>
// <i className="col bi bi-eyeglasses"></i>
// <i className="col bi bi-sunglasses"></i>
// </div>
