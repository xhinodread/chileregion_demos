import Router from 'next/router'
import Listas_pag from './components/listas'


export default function Index(){

  const BotonIndex = ({texto, url})=>{
    return(
      <button className="btn btn-primary m-1"
        onClick={() => Router.push(url)}
      >{texto}</button>
    )
  }


  return(
    <>
      <h1>Listado</h1>
      <BotonIndex texto='Volver' url="/" />
      <BotonIndex texto='Tabla' url="/paginacion/tablas" />
      <Listas_pag />
    </>
  )
}
