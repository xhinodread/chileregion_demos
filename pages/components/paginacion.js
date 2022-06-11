import {useState, useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default function Paginacion(){

  const [data, setData] = useState({page:null, data:{}});
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  // return {
  //     items: d.items,
  //     page: parseInt(page, 10)
  //   }

  const cargarData =(laPage)=>{
    fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${laPage}`)
      .then((res) => res.json())
      .then(data=>{
        // console.log('-->:',  parseInt(data.startIndex, 10) );
        setData(data);
        // setPage(parseInt(data.startIndex, 10))
        setPage(laPage)
        setLoading(false);
      }
    )
  }

  useEffect( () => {
    setLoading(true);
    cargarData(page);
    //const d = await r.json()
    //console.log(d);

    // fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setPage(parseInt(page, 10))
    //     setLoading(false);
    //   });
    //
  }, []);

  console.log('pagin: ', data);
  console.log('pagin: ', page);

   return (
    <>
     <div>
       <button className="btn btn-primary" 
         onClick={() => Router.push(`/`)}
         disabled={data.page <= 1}
       >
         Arriba
       </button>
       <div className="container">   <div className="row align-item-center ">
           <div className="col m-1">
         <ul className="list-group ">
           { data.items ? data.items.map(({ title, id , start_year}) => (
             <li className="list-group-item list-group-item-action list-group-item-primary" key={id} >
              {title}, {start_year}...
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver
              </button>
             </li>
           )) : <></>}
         </ul>
         </div>
         </div>
       </div>
       {page > 2 ?<button className="btn btn-primary" onClick={() => cargarData(1)}>1RA</button>:<></> }
       {page > 1 ? <button className="btn btn-primary" onClick={() => cargarData(page - 1)}>ANTE {page - 1}</button>:<></> }
       <button className="btn btn-primary" onClick={() => cargarData(page)}>{page}</button>
       <button className="btn btn-primary"  onClick={() => cargarData(page + 1)}>PROX {page + 1}</button>
       <button className="btn btn-primary" onClick={() => cargarData(10)}>ULTIMA</button> { /*** totalItems": 452 dividido por () ****/}
       {/*** <Link href="/?page=1">
         <a>First page</a>
       </Link>
       <Link href="/?page=2">
         <a>Seginda page</a>
       </Link> ****/}
     </div>
     {/*** Modal ****/}
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
    </>
   )

}

// export async function getServerSideProps(context){
//   console.log('getServerSideProps');
// }

// Paginacion.getInitialProps= async ({ query: {page = 1} })=>{
//   console.log('getInitialProps: ');
//   const r = await fetch(
//     `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`
//   )
//   const d = await r.json()
//
//   return {
//     items: d.items,
//     page: parseInt(page, 10)
//   }
// }

// Paginacion.getInitialProps=  (context)=>{
//   console.log('getInitialProps: ');
//   const r = fetch(
//     `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`
//   )
//   const d =  r.json()
//
//   return {
//     items: d.items,
//     page: parseInt(page, 10)
//   }
// }
