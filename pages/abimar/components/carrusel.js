
export default function Carrusel(props) {
  // console.log('urlImg: ', props.urlImg);
  const urlImg = props.urlImg? props.urlImg: [{}];

  const validaValor=(valor)=>{
  //  console.log('validaValor: ', valor);
    // return(valor !==undefined ? valor: [{}])
    return(valor !==undefined ? valor: {url:null})
  }

  //const titulo = props.titulo
  //return(<>carrusel</>)
  if(1){
  //  console.log('urlImg: ', urlImg);
  if(urlImg[0].url !== undefined){
    return(
      <>
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src={validaValor(urlImg[0].url)} className="d-block w-100" alt="..." />
              <div className="carousel-caption bg-info rounded-1" >
                { (urlImg[0].titulo)?
                    <h5>{(urlImg[0].titulo)}</h5>
                  : <h5></h5>
                }
                <p>Trabajo con areas de manejo para mariscadores y pescadores.</p>
              </div>
            </div>
            <div className="carousel-item" >
              <img src={validaValor(urlImg[1].url)} className="d-block w-100" alt="..." />
              <div className="carousel-caption bg-info rounded-1" >
                <h4>SECTOR PRIVADO</h4>
              </div>
            </div>
            <div className="carousel-item" >
              <img src={validaValor(urlImg[2].url)} className="d-block w-100" alt="..." />
              <div className="carousel-caption bg-info rounded-1" >
                <h4>PESCA ARTESANAL</h4>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
      )
    }else{
      return(null);
    }
  }
}
