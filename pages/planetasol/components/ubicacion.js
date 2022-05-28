import Image from 'next/image'

export default function Ubicacion(){

  return(
    <>
      <div className="container" >
        <div className="row align-item-center">

          <div className="col-12 col-md-6 col-lg-6 ">
          <div className="card border-primary mb-3" >
              <div className="card-header ">
                <h5 className="card-title text-uppercase text-center">ubicación</h5>
              </div>
              <div className="card-body text-primary">
                <div>
                  <Image
                    src="/images/planetasol/mapa.png"
                    alt="Cristales bluefilter"
                    width={850}
                    height={430}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="card border-primary mb-3 " >
              <div className="card-header">
                <h5 className="card-title text-uppercase text-center">Horario</h5>
              </div>
              <div className="card-body text-primary">
                <p className="card-text text-center">Lunes a Viernes - 10:30 a 16:30</p>
                <p className="card-text text-center">Sabados - Cerrado</p>
                <p className="card-text text-center">Domingo - Cerrado</p>
                <p className="card-text mb-1"><strong>Direccion:</strong></p>
                <p className="card-text text-center">Aníbal Pinto #1614 - Local 3 Coquimbo, Chile</p>
                <p className="card-text"><strong>Telefono:</strong> 9 5751 5970</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{``}</style>
    </>
  )
}

// <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>

// <Image
// src="/images/planetasol/mapa.png"
// alt="Cristales bluefilter"
//
// width={650}
// height={500}
// />
