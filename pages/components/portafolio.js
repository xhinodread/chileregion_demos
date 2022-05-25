import CardPortafolio from './cardPortafolio'

export default function Portafolio(props) {
  const json_demos = props.json_demos
  return(
    <>
      <div className="container-flex cuerpo">
        <div className="row align-items-center tutilo-portafolio" >
          <div className="col text-center">
            <h2 className="fw-bolder text-decoration-underline" >Portafolio</h2>
          </div>
        </div>
        <div className="row align-items-center " >
          <div className="col">
            <div className="card border-light ">
              <div className="card-body">
                <div className="container-flex">
                  <div className="row m-2">
                  {
                    json_demos.map(datos=>{
                      return  <CardPortafolio key={datos.id} {...datos} />
                    })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

      .tutilo-portafolio{
        margin-top: 50px !important;
        text-shadow: 2px 2px 2px #915568;
        //background-color: blue;
      }

      @media (min-width: 850px){
        .tutilo-portafolio{
          margin-top: 70px !important;
        }

      }
      `}</style>
    </>
  )
}


{/***   <div className="row m-2 ">
<CardPortafolio {...json_demos[2]} />
<CardPortafolio {...json_demos[5]} />
<CardPortafolio {...json_demos[1]} />
</div>
<div className="row m-2">
<CardPortafolio />
<CardPortafolio />
<CardPortafolio />
</div> ***/}
