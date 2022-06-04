import IconoRedes from './iconoredes'

export default function Pies() {
  return(
    <>
      <div className="row justify-content-center text-center">
        <div className="col-md-2 ms-md-auto ">
          <h6>Mi Pime</h6>
          <p className="bg-info p-3">
            <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/aj-logo-light.svg" alt="Authentic Jobs" width="107"  />
          </p>
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Redes</h6>
          <IconoRedes clases={"bi bi-whatsapp"} texto={"+56 9 1648937"} />
          <IconoRedes clases={"bi bi-facebook"} texto={"Diseños 2022"} />
          <IconoRedes clases={"bi bi-twitter"} texto={"#Diseños_2022"} />
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Infos</h6>
          <IconoRedes clases={"bi bi-patch-question"} texto={"Preguntas frecuentes"} />
          <IconoRedes clases={"bi bi-chat"} texto={"Asistencia Online"} />
          <IconoRedes clases={"bi bi-blockquote-left"} texto={"Blog"} />
        </div>
        <div className="col-md-3 ms-md-auto text-center">
          <h6>Contactos</h6>
          <IconoRedes clases={"bi bi-envelope"} texto={"chileregion@gmail.com"} />
          <IconoRedes clases={"bi bi-telephone-forward"} texto={"+56 9 02020202"} />
        </div>
      </div>
      <div className="row justify-content-center text-center mt-5">
        <div className="col-md-12 bg-dark text-light p-2">
          © 2022<br/>
          Chile región<br/>
          Coquimbo - Chile<br/>
          Todos los derechos reservados<br/>
        </div>
      </div>
    </>
  )
}
