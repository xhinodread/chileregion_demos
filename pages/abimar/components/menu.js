import Link from 'next/Link'
// import styles from '../stylos.css'


export default function Menu(props) {

  const pathHome = '/abimar';
  //<a className="navbar-brand" href="#">{props.titulo}</a>
  return(
    <>
    <nav className="navbar navbar-expand-md navbar-info justify-content-center ">
      <div className="container bg-danger bg-opacity-10 border border-info rounded-3 m-2">
      <Link href="/abimar" >
        <a className="navbar-brand" >
          <img src="/images/abimar/logoAbimar.png"  className="navbar-nav rounded-pill" alt={props.titulo} />
        </a>
      </Link>
        <button className="navbar-toggler custom-toggler bg-info text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon custom-toggler">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-end text-center" id="navbarTogglerDemo02">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item" >
              <Link href="/" >
                <a className="nav-link text-dark" aria-current="page" >Volver</a>
              </Link>
            </li>
            <li className="menu-li nav-item" >
              <Link href={pathHome} >
                <a  id="overlay" className="nav-link active abimar_menu_hover overlay" aria-current="page" >Empresa Abimar Ltda</a>
              </Link>
            </li>
            <li className="menu-li nav-item" >
              <Link href={pathHome+"/servicios"} >
                <a className="nav-link active" aria-current="page" >Servicios</a>
              </Link>
            </li>
            <li className="menu-li nav-item">
              <Link href={pathHome} >
                <a className="nav-link active" aria-current="page" >Compra y venta de algas</a>
              </Link>
            </li>
            <li className="menu-li nav-item">
              <Link href={pathHome} >
                <a className="nav-link active" aria-current="page" >Venta de parcelas</a>
              </Link>
            </li>
            <li className="menu-li nav-item" >
              <Link href={pathHome} >
                <a className="nav-link active" aria-current="page" >Blog</a>
              </Link>
            </li>
            {/** <li className="nav-item"> **/}
            {/** </li>  ***/}
          </ul>
          <form className="d-flex" role="search">
          <div className="input-group input-group-sm mb-3 ">
            <input className="form-control me-2" type="search" placeholder="Repoblamiento, amerb,..." aria-label="Buscar" />
            <button className="btn btn-info" type="submit">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <style jsx>{`
      .menu-li{

      }
      .nav-link  {
        //background-color: red;
        //border: 1px solid #dee2e6 !important;
        height: 100%;
        margin:3px;
        padding:1px;
         /** text-shadow: 1px 2px 2px blue; **/
       }
     .nav-link:hover  {
        text-shadow: 1px 1px 2px black;
        //border: 1px solid #dee2e6 !important;
        border-color: #0dcaf0;
        border-radius: 5px;
      }
    `}
    </style>
  </>
  )
}
