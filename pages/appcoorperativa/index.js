import Menu from './componentes/menu'
import Dashboard from './componentes/dashboard'

export default function AppCoorperativa() {

  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Menu clasesCss="bg-dark navbar-dark" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col mt-5">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}
