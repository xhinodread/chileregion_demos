import {useState} from 'react'
import Link from 'next/link'
import Imghover from '../components/imghover'
import BottonGlowing from '../components/bottonglowing'
// import Paginacion from '../components/paginacion'
import ServerSide from '../api/server-side'


export default function Netoiva() {
  let [neto, setNeto]=useState(0);
  let [iva, setIva]=useState((19/100));
  let [totalIva, setTotalIva]=useState(0);
  let [total, setTotal]=useState(0);
  const CabecaPagina=()=>{
    return(
      <div className="container mt-5">
        <div className="position-relative">
          <div className="position-absolute top-0 start-50 translate-middle">
            <Link href="./">
              <a className="btn btn-info" >
                Volver
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const sinSubmit=(event)=>{
    event.preventDefault()
    //alert("sinSubmit")
  }
  const getNeto=(objeto)=>{
    // console.log(objeto.target);
    // console.log(objeto.target.value);
    setNeto(objeto.target.value);
  }
  const calculoIva=()=>{
    const ivaTotal = parseInt(neto*iva, 10)
    const elNeto = parseInt(neto, 10)
    setTotalIva(ivaTotal)
    setTotal(ivaTotal+elNeto)
  }
  return(
    <>
      <CabecaPagina />

      <div className="container mt-5 ">
        <div className="row align-item-center ">
          <div className="col p-3 m-5 bg-warning ">
            <div className="card">
              <div className="card-header text-center">
                Calculadora ventas
              </div>
              <div className="card-body">
                <form onSubmit={sinSubmit} >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Valor neto</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={neto} onChange={getNeto} />
                    <div id="emailHelp" className="form-text">Término utilizado para referirse al valor que adquiere una variable al descontarle una cantidad determinada. Como por ejemplo, el ingreso neto, las ganancias netas, valor neto depreciable, etc. El Valor Neto también se relaciona con la base imponible sobre la cual se aplica el Impuesto al Valor Agregado (IVA).</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Iva ({iva*100}%)</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelpm"  defaultValue={totalIva} value={totalIva} />
                    <div id="emailHelp2" className="form-text">El Impuesto al Valor Agregado (IVA) rige en casi todos los países del mundo, y en Chile representa un recargo del {iva*100}% sobre un bien o servicio entregado. Es decir, el vendedor incorpora el IVA a la transacción comercial y, por lo tanto, el precio del bien o servicio aumenta debido a dicho impuesto.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Total</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={total} />
                  </div>
                  <div className="mb-3 text-center">
                    <button type="button" className="btn btn-primary " onClick={calculoIva}>Calcular</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
          .alto{
            height: 1px;
          }
          .progressbar{
            width: 70%;
          }
          _button{
            width: 2rem;
            height:2rem;
          }
          .start-30 {
              left: 30% !important;
          }
          .start-70 {
              left: 70% !important;
          }
      `}</style>
    </>
  )
}
