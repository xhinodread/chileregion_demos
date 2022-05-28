

export default function Pies(){


  return(
    <>
      <div className="container mt-3" >
        <div className="row align-item-center">
          <div className="col-12 col-md-3 col-lg-3 text-center">
            <h6>OPTICA PLANETA SOL</h6>
            <p className=" p-3 ">
              <img src="/images/planetasol/logo.jpg" className="" width="60" height="60" />
            </p>
          </div>
          <div className="col-12 col-md-3 col-lg-34 movilalcentro">
            <h6 className=" text-center" >Redes</h6>
            <p><i className="bi bi-whatsapp"></i> +56 9 999999999</p>
            <p><i className="bi bi-facebook"></i> PlanetaSol 2022</p>
            <p><i className="bi bi-twitter"></i> #PlanetaSol_2022</p>
          </div>
          <div className="col-12 col-md-3 col-lg-3 movilalcentro">
            <h6 className=" text-center">Infos</h6>
            <p><i className="bi bi-patch-question"></i> Preguntas frecuentes</p>
            <p><i className="bi bi-chat"></i> Asistencia Online</p>
            <p><i className="bi bi-blockquote-left"></i> Blog</p>
          </div>
          <div className="col-12 col-md-3 col-lg-3 movilalcentro">
            <h6 className=" text-center">Contactos</h6>
            <p><i className="bi bi-envelope"></i> email@email.com</p>
            <p><i className="bi bi-telephone-forward"></i> +56 9 02020202</p>
          </div>
        </div>
        <div className="row align-item-center mt-2 ">
          <div className="col">
            <p className="text-center bg-dark text-light p-3">
              Taller Optico Optica Coquimbo<br/> OPTICA PLANETA SOL
              <p>© 2022</p>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .movilalcentro{
        //  background-color: red;
        }

        @media (max-width: 769px){
          .movilalcentro{
            text-align: center;
          //  background-color: blue;

          }
        }


      `}</style>
    </>
  )
}
