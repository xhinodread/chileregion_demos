import Link from 'next/link'

export default function Navbar(){

  return(
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/aj-logo-light.svg" alt="Authentic Jobs" width="215" height="54"
          className="navbar-nav me-auto mb-2 mb-lg-0 " />
          <button className="navbar-toggler custom-toggler border border-light border-3 rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-toggler ">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Hogar</a>
              </li>
              <li className="nav-item ">
                <Link href="./posts/first-post" as="/out/posts/first-post.html">
                  <a className="nav-link text-light" >Post</a>
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Blog</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
