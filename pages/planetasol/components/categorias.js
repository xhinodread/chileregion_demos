
export default function Categorias(){

  return(
    <>
    <div className="container" >

      <h4 className="text-center" >CATEGORIAS</h4>
      <div className="row">
        <div className="col">
          <div className="card m-2">
            <img src="/images/planetasol/sunGlass.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">LENTES DE SOL</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-2">
            <img src="/images/planetasol/lectura.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">LENTES DE LECTURA</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-2">
            <img src="/images/planetasol/bioLente.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">BIOLINEA</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-2">
            <img src="/images/planetasol/repuestosCategoria.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">REPUESTOS</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
