

export default function Dashboard() {

  return(
    <>
      <div className="container-flex">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">OTs Tablet</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Crear OT</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Estado OT</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Consultas</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
