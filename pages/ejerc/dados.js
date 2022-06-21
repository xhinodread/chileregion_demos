import Image from 'next/image'
import {useState, useEffect, useRef } from 'react'
const Dados=()=>{

  const largoArray = 1;
  const urlImg = "/images/diceimages"
  let [nros, setNros] = useState([]);
  let [nro, setNro] = useState(1);
  let [spin, setSpin] = useState('visually-hidden')
  const myContainer = useRef('rango');

  const dibujarValor=(valor)=>{
    //console.log(valor);
    //return(`${urlImg}/dice_1.png`)
    switch (valor) {
      case 1: return(`${urlImg}/dice_1.png`);break;
      case 2: return(`${urlImg}/dice_2.png`);break;
      case 3: return(`${urlImg}/dice_3.png`);break;
      case 4: return(`${urlImg}/dice_4.png`); break;
      case 5: return(`${urlImg}/dice_5.png`); break;
      case 6: return(`${urlImg}/dice_6.png`); break;
      case 0: return(`${urlImg}/dice_vacio.png`); break;
      default: return(`${urlImg}/empty_dice.png`);break;
    }
  }

  const LosDados=()=>{
    let losDadosX = [];
    //for (let i = 0; i < largoArray; i++) {
    for (let i = 0; i < nro; i++) {
      let valorNros = nros[i]? nros[i].valor:0
      let imagenNro = dibujarValor(valorNros)
      //console.log(imagenNro);
      // array[i]
      //console.log(i);
      //return(<Image key={i} src={urlImg1} width="100" height="100" />)
      losDadosX.push(<div className="d-inline-flex" key={`contimg${i}`} ><Image key={`img${i}`} src={imagenNro} width="100" height="100" />{/**valorNros**/}</div >)
    }
    //setNros(losNros)
    return(losDadosX)
  }

  const crearStadoNros=()=>{
    let losNros = [];
    //for (let i = 0; i < largoArray; i++) {
    for (let i = 0; i < nro; i++) {
      losNros.push({valor:0})
    }
    setNros(losNros)
  }

  const llenarStado=()=>{
    let spinOld = spin;
    setSpin('')
    const tiempoSpin = Math.floor(Math.random() * 2000) + 1000; // rnd 0..6
    let losNros = [];
    let valor;
    //for (let i = 0; i < largoArray; i++) {
    for (let i = 0; i < nro; i++) {
      for (var j = 3; j < 46258+i; j++) {
        valor = Math.floor(Math.random() * 6) + 1; // rnd 0..6
      }
      losNros.push({valor})
    }
    setTimeout(()=>{
      setNros(losNros);
      setSpin(spinOld);
    }, tiempoSpin)
  }

  const nroDados=()=>{
    let nrDados = myContainer.current.value;
    // setNro(Math.round(nrDados));
    setNro(nrDados);
  }

  useEffect(()=>{
    crearStadoNros();
    //  console.log('nros: ', nros.map((item)=>item.valor));
    //console.log(myContainer.current);
    // console.log(myContainer.current.id);
    // console.log(myContainer.current.value);


  }, [])

  return(
    <>
      <div className="d-flex justify-content-center m-1 p-3 ">
        <div className="card text-center" >
          <div className="card-header">
            Dados
          </div>
          <div className="card-body">
            <div className="card-text " style={{height: "7rem"}} >
              <LosDados />
            </div>
            <div className="card-text" style={{height: "2rem"}}>
              <div className={spin+" spinner-grow text-primary"} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div>
            ... {
              nros.map((item)=>{
                return(
                  `${item.valor}  ... `
                )
              })
            }
            </div>
            <div className="card-footer">
              <div >
                <button className="m-1 btn btn-outline-info text-success" onClick={()=>llenarStado()} >Lanzar</button>
                <button className="m-1 btn btn-outline-info text-success" onClick={()=>crearStadoNros()} >Limpiar</button>
              </div>
              <div className="mt-3">
                <label htmlFor="customRange2" className="form-label">Cuantos dados</label>
                <input type="range" className="form-range" value={nro} min="1" max="5" step="1" id="customRange2" ref={myContainer} onChange={nroDados} />
                {Math.round(nro)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card{
          width: 48rem;
        }
      `}</style>
    </>
  )
}
export default Dados
