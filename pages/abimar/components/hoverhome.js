
export default function Hoverhome(){

  return(
    <>
      <div className="container-hover">
          <div className="card-img" style={{backgroundImage: "url('images/abimar/vistaAlMar.webp')"}} >
              <div className="textos">
                  <h3>Confianza</h3>
                  <p>Como los mejores</p>
              </div>
          </div>
          <div className="card-img" style={{backgroundImage: "url('images/abimar/vistaAlMar.webp')"}} >
              <div className="textos">
                  <h3>Seguridad</h3>
                  <p>Autos de alta gama para una experiencia placentera
                  </p>
              </div>
          </div>
          <div className="card-img" style={{backgroundImage: "url('images/abimar/vistaAlMar.webp')"}} >
              <div className="textos">
                  <h3>Calidad</h3>
                  <p> Los mejores autos para tu practica</p>
              </div>
          </div>
      </div>
      <style jsx>{`
        .container-hover {
            /*Trabajando con grip*/
            display: grid;
            /** grid-template-columns: 1fr 1fr 1fr; **/
            grid-template-columns: repeat(
                auto-fill,
                minmax(21rem, 1fr)
            ); /*con el metodo repeat definimos el fragmento, con el metodo auto fill auto rellenamos, y con el metodo minmax definimos el ancho min y max de nuestra card*/
            gap: 15px;
            text-align: center;
            justify-content: center;
            text-align: justify;
            margin: 1rem;
        }
        .card-img {
            box-shadow: 2px 2px 5px var(--s-dark);
            border-radius: 10px;
            min-height: 300px;
            font-weight: bold;
            padding: 20px;
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            color: var(--p-text-p);
        }
        .card-img .textos {
            height: 100%;
            /* Flebox */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
            letter-spacing: 4px;
        }
        .card-img :hover {
            opacity: 0.5;
            background-color: var(--p-text-p);
            color: var(--s-text-p);
        }
         `}</style>
    </>
  )
}
