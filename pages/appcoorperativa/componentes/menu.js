import Link from 'next/link'

export default function Menu(props) {

  //console.log('props: ', props);
  const {clasesCss} = props;
  //console.log('clasesCss: ', clasesCss);

  return(
    <>
      <nav className={clasesCss + ' navbar navbar-expand-md fixed-top'}>
        <div className="container-fluid">
          <Link href="#"><a className="navbar-brand">AppSmith</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AppSmith</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link href="#"><a className="nav-link active" aria-current="page" >Dashboard</a></Link>
                </li>
                <li className="nav-item text-center_">
                  <Link href="#"><a className="nav-link" href="#">Orden de Trabajo</a></Link>
                </li>
                <li className="nav-item">
                  <Link href="#"><a className="nav-link" href="#">Informes</a></Link>
                </li>
                <li className="nav-item dropdown">
                  <Link href="#"><a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Configuración
                  </a></Link>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><Link href="#"><a className="dropdown-item" href="#">Usuario</a></Link></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><Link href="#"><a className="dropdown-item" href="#">General</a></Link></li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex" >
                <button className="btn btn-outline-success" type="submit">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

/***
<nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
<div className="container-fluid">
<a className="navbar-brand" href="#">Offcanvas navbar</a>
<button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false">
<span className="navbar-toggler-icon"></span>
</button>

<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<a className="nav-link active" aria-current="page" href="#">Dashboard</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Notifications</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Profile</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Switch account</a>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
<ul className="dropdown-menu" aria-labelledby="dropdown01">
<li><a className="dropdown-item" href="#">Action</a></li>
<li><a className="dropdown-item" href="#">Another action</a></li>
<li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
</li>
</ul>
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
</div>
</nav>
***/
