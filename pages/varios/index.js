import Link from 'next/link'
import Imghover from '../components/imghover'
import Googlemapa from '../components/googlemapa'
import BottonGlowing from '../components/bottonglowing'
// import Paginacion from '../components/paginacion'
import ServerSide from '../api/server-side'

export default function Varios() {

  return(
    <>
      <div className="container mt-5">

        <div className="position-relative">
          <div className="position-absolute top-0 start-50 translate-middle">
            <Link href="/">
              <a className="btn btn-info" >
                Volver
              </a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Imghover />
          </div>
          <div className="col">
            <Googlemapa />
          </div>
        </div>

        <div className="row align-item-center d-none d-lg-block ">
          <div className="col p-3 m-5 bg-dark">
            <BottonGlowing texto="boton 1" colorHover="blue" link="/abimar" />
            <BottonGlowing texto="boton 2" colorHover="yellow" />
            <BottonGlowing texto="boton 3" colorHover="#e3ac07" />
            <BottonGlowing texto="boton 4" colorHover="#e5f93c" />
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row align-item-center ">
          <div className="col p-3 m-5 bg-warning ">
          {/***  <Paginacion />
             <ServerSide /> ***/}
          </div>
        </div>
      </div>

      <div className="container mt-1 mb-5 pb-5 ">
        <div className="row align-item-center ">
          <div className="col bg-warning ">

            <div className="position-relative m-4">
              <div className="progress alto" >
                <div className="progress-bar progressbar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" >1</button>
              <button type="button" className="position-absolute top-0 start-30 translate-middle btn btn-sm btn-primary rounded-pill" >2</button>
              <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" >3</button>
              <button type="button" className="position-absolute top-0 start-70 translate-middle btn btn-sm btn-primary rounded-pill" >4</button>
              <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" >5</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
          .alto{
            height: 1px;
          }
          .progressbar{
            width: 70%;
          }
          button{
            width: 2rem;
            height:2rem;
          }
          .start-30 {
              left: 30% !important;
          }
          .start-70 {
              left: 70% !important;
          }
      `}</style>
    </>
  )
}
