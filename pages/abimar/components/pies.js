
export default function Pies(){


  return(
    <>
      <footer className="">
          <section className="footer">
              <div className="container-xl text-center text-md-start">
                  <div className="row">
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                          <h6 className="text-uppercase fw-bold">
                              Abimar
                          </h6>
                          <p>
                              Coquimbo - IV Región. Chile.
                          </p>
                          <div className="logo rounded mx-auto d-block">
                              <img src="/images/abimar/logoAbimar.png" className="rounded-pill" alt="Abimar" />
                          </div>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                          <h6 className="text-uppercase fw-bold  mb-4">
                              Servicios
                          </h6>
                          <p>
                              <i className="bi bi-bank2"></i>
                              <a href="#!" className="text-reset">Gubernamental</a>
                          </p>
                          <p>
                              {/*** <img src="icons/2x/outline_cast_for_education_black_24dp.png" alt="Sector privado"
                                  width="25" height="25" /> ***/}
                              <i className="bi bi-globe"></i>
                              <a  className="text-reset">Sector privado</a>
                          </p>
                          <p>
                              {/*** <img src="icons/2x/outline_car_crash_black_24dp.png" alt="Pesca artesanal" width="25"
                                  height="25" /> ***/}
                              <i className="bi bi-water"></i>
                              <a href="#!" className="text-reset">Pesca artesanal</a>
                          </p>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                          <h6 className="text-uppercase fw-bold mb-4">
                              Ayuda
                          </h6>
                          <p>
                              {/**** <img src="icons/2x/outline_question_answer_black_24dp.png" alt="questions" width="25"
                                  height="25" /> **/}
                              <i className="bi bi-question"></i>
                              <a  className="text-reset">Preguntas Frecuentes</a>
                          </p>
                          <p>
                              {/*** <img src="icons/2x/outline_menu_book_black_24dp.png" alt="Terminos" width="25"
                                  height="25" /> ***/}
                              <i className="bi bi-file-earmark-text"></i>
                               <a href="#!" className="text-reset">Terminos y condiciones</a>
                          </p>
                          <p>
{/**                              <img src="icons/2x/outline_group_black_24dp.png" alt="" width="25" height="25" />
****/}
                              <i className="bi bi-file-earmark-person"></i>
                              <a  className="text-reset">Quienes somos</a>
                          </p>
                          <p>
                              <a href="#!" className="text-reset"></a>
                          </p>
                      </div>
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                          <h6 className="text-uppercase fw-bold mb-4">
                              Contacto
                          </h6>

                          <p>
                              {/**<img src="icons/2x/outline_whatsapp_black_24dp.png" alt="whatsapp" width="25"
                                  height="25" /> ***/}
                              <i className="bi bi-whatsapp"></i> +56 9 8745 3214
                          </p>
                          <p>
                            {/**  <img src="icons/2x/outline_email_black_24dp.png" alt="email" width="25" height="25" />
                            ***/}
                            <i className="bi bi-envelope"></i> abimar@abimar.cl
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          <div className="text-center p-4" style={{backgroundColor: "rgba(52, 50, 50, 0.189)"}}>
              <h6>© 2022</h6>
              <a className="text-reset fw-bold" href="#">Abimar una ventana al mundo marino, Ltda.<br/>Todos los
                  derechos reservados </a>
          </div>
      </footer>
    </>
  )
}
