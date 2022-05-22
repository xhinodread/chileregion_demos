
export default function Cardhome(props) {

  // console.log('prosp: ', typeof props);
  // console.log('prosp: ', props[0]);
  //
  // props[0].map(valors=>{
  //   console.log('--> Each: ', valors)
  // });
  //
  // const urlImgCards=[
  //   {url: "/images/abimar/artenzanal.jpg"},
  //   {url: "/images/abimar/a2.webp"},
  //   {url: "/images/abimar/a6.webp"}
  // ]
  const listado = props[0]? props[0]: [{}];
  return(
    <>
      <div className="card-group mt-2">
      {
        listado.map((valors, key) =>{
        return(
          <div key={key} className="card p-1 h-200">
            <img src={valors.url} className="card-img-top h-300" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{valors.titulo}</h5>
              <p className="card-text text-justify">{valors.texto}</p>
              <p className="card-text"><small className="text-muted">Actualizado hace 3 mins..</small></p>
            </div>
          </div>
        )
      })}
      </div>
      <style jsx>{`
        .card{
          margin:0 auto;
          width:100%;
        }
        .card-title {
            font-size: 30px;
            font-weight: bold;
            font-family: "Satisfy", cursive;
            margin-bottom: 1rem;
        }
        .text-justify{
          text-align: justify;
        }

        $media (min-width: 360px;){
          .card{
            margin-bottom:15px;
          }
        }
      `}
      </style>
    </>
  )
}


/****

<div className="card-group">
  <div className="card h-100">
    <img src={urlImgCards[2].url} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

****/
