import Image from 'next/image'

export default function Carrusel(){

  const anchoImg = 1024
  const altoImg = 512

  return(
    <>
      <div className="container" >
        <div className="row align-item-center">
          <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/** <img src="/images/planetasol/banner2.png" className="d-block w-80" alt="..." /> **/}
                  <Image
                    src="/images/planetasol/banner1.jpg"
                    alt="Cristales bluefilter"
                    width={anchoImg}
                    height={altoImg}
                  />
                </div>
                <div className="carousel-item">
                  {/*** <img src="/images/planetasol/banner1.jpg" className="d-block w-80" alt="..." /> ***/}
                  <Image
                    src="/images/planetasol/banner2.png"
                    alt="Cristales bluefilter"
                    width={anchoImg}
                    height={altoImg}
                  />
                </div>
                <div className="carousel-item">
                  {/*** <img src="/images/planetasol/banner3.png" className="d-block w-80" alt="..." /> ***/}
                  <Image
                    src="/images/planetasol/banner3.png"
                    alt="Cristales bluefilter"
                    width={anchoImg}
                    height={altoImg}
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Proximo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{` `}</style>
    </>
  )
}
