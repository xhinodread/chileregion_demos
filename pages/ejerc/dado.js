import Image from 'next/image'
import {useState, useEffect} from 'react'
const Dado=()=>{

  const urlImg = "/images/diceimages"
  let [nro, setNro] = useState(-1);
  let [img, setImg] = useState(`${urlImg}/empty_dice.png`)

  const dibujar=(valor)=>{
    switch (valor) {
      case 1: setImg(`${urlImg}/dice_1.png`);break;
      case 2: setImg(`${urlImg}/dice_2.png`);break;
      case 3: setImg(`${urlImg}/dice_3.png`);break;
      case 4: setImg(`${urlImg}/dice_4.png`); break;
      case 5: setImg(`${urlImg}/dice_5.png`); break;
      case 6: setImg(`${urlImg}/dice_6.png`); break;
      case 0: setImg(`${urlImg}/empty_dice.png`); break;
      default: setImg(`${urlImg}/empty_dice.png`);break;
    }
  }

  const lanzar=()=>{
    const valor = Math.floor(Math.random() * 6) + 1; // rnd 0..6
    setNro(0);
    setImg(`${urlImg}/empty_dice.png`);
    setTimeout(()=>{
      setNro(valor);
      setTimeout( ()=>{ dibujar(valor) }, 700 )
    }, 2000);
  }

  const limpiar=()=>{
    setNro(-1);
    setImg(`${urlImg}/empty_dice.png`);
  }

  const Spinn = ()=>{
    if(nro==0){
      return(
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    }else{
      return(<Image src={img} width="100" height="100" />)
    }
  }

  return(
    <>
      <div className="d-flex justify-content-center m-1 p-3 ">
        <div className="card text-center" >
          <div className="card-header">
            Dado
          </div>
          <div className="card-body">
            <div className="card-text mb-2 " style={{height: "8rem"}} >
              <Spinn />
            </div>
            <button className="m-1 btn btn-outline-info text-success" onClick={()=>lanzar()} >Lanzar</button>
            <button className="m-1 btn btn-outline-info text-success" onClick={()=>limpiar()} >Limpiar</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card{
          width: 18rem;
        }
      `}</style>
    </>
  )
}
export default Dado
