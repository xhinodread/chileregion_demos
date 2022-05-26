import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {


  return(
    <>
      <nav className="navbar fixed-top navbar-expand-md bg-home item-align-center">
        <div className="container-fluid">
          <img src="/images/planetasol/logo.jpg" className="imgInvisible" width="60" height="60" />
          <Link href="#" >
            <a className="navbar-brand tutilo" >Planeta Sol</a>
          </Link>
          <button className="navbar-toggler bg-warning text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <Image src="/images/planetasol/logo.jpg" className="rounded" width="50" height="50" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link href="#" >
                  <a className="nav-link active btn btn-menu" aria-current="page" >Inicio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" >
                  <a className="nav-link btn btn-menu">Galeria</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" >
                  <a className="nav-link btn btn-menu">Contacto</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" >
                  <a className="nav-link btn btn-menu">Como Llegar</a>
                </Link>
              </li>
            </ul>
            <div className="container" >
              <div className="row" >
                <div className="col" >
                  <div className="d-flex justify-content-end">
                    {/*** <p className="text-center texto me-3 elinvisible" >Taller Optico<br/>Optica Coquimbo</p> ***/}
                    <img src="/images/planetasol/cartelTienda.png" className="imgInvisible" height="70px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .tutilo{
            font-family: "Satisfy", cursive;
            font-size:25px;
        }
        .texto{
          //box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
          text-shadow: 2px 1px 2px #ffa707ff;
          font-weight: bold; /* Fuente en negrita o bold */

        }
        .bg-home{
          background-color: #e3f2fd;
        }
        .imgInvisible{
          margin-left: 15px;
        }
        .elinvisible{}
        div a{
          margin-left: 10px;
        }
        .btn-menu{
          transition: all 300ms ease 0ms;
          //box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        }
        .btn-menu:hover {
          background-color: #2c2fa5; /* Color de fondo al pasar el cursor */
          color: #FFF;
          box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(-7px);
        }
        @media only screen and (max-width: 768px) {
          .imgInvisible{
            display: none;
          }
          .elinvisible{
            display: none;
          }
        }
      `}</style>
    </>
  )
}
