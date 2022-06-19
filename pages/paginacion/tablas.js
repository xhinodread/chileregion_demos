import Link from 'next/link'
import {useState} from 'react'

export default function Tablas(props) {

  //console.log('props: ', props);

  const [datamodal, setDatamodal] = useState({});
  //console.log(datamodal);

  const ElModal =()=>{
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  }

  const {items, page} = props;

  return(
    <>
      <Link href="/paginacion" >
        <a className="m-3 btn btn-outline-success" >volver</a>
      </Link>
      <div className="table-responsive">
        <table className="table caption-top">
          <caption>List of users</caption>
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
          { /*** items.map(({title, id , start_year})=>( ****/ }
          { items.map( (vals, ind)=>(
            <tr key={ind} >
              <th scope="row">{vals.id}</th>
              <td>{vals.title}</td>
              <td>{vals.start_year}</td>
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setDatamodal({nombre:vals.title, anio:vals.start_year})}} >
                  Ver
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        <Link href={`./tablas`} ><a className="m-3 btn btn-primary">Primero</a></Link>
        <Link href={`./tablas/?page=${page+1}`} ><a className="m-3 btn btn-primary">PROX {page + 1}</a></Link>

      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {datamodal.nombre} - {datamodal.anio}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Tablas.getInitialProps= async ({ query: {page = 1} })=>{
  //console.log('getInitialProps: ', page);
  const r = await fetch(
    `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`
  )
  const d = await r.json()

  return {
    items: d.items,
    page: parseInt(page, 10)
  }
}
