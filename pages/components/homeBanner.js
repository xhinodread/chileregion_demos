import {Card} from 'react-bootstrap/'

export default function HomeBanner(){

  return(
    <>
      <Card.Body className="text-light">
        <section id="home-intro">
          <h1>
            La principal bolsa de trabajo para diseñadores, desarrolladores y profesionales creativos.
          </h1>
          <div id="trusted-by" className="trusted-by mobile-hide">
            <strong className="card-strong-stilo" >
              con la confianza de empresas grandes y pequemas de todo el mundo.
            </strong>
            <ul className="d-flex justify-content-center justify-content-between">
              <li>
                <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/brands/apple.svg" width="46" height="53" alt="Apple"/>
              </li>
              <li>
                <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/brands/twitter.svg" width="49" height="40" alt="Twitter"/>
              </li>
              <li>
                <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/brands/ea.svg" width="63" height="31" alt="EA"/>
              </li>
              <li>
                <img src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/logos/brands/facebook-alt.svg" width="45" height="45" alt="Facebook"/>
              </li>
            </ul>
          </div>
        </section>
      </Card.Body>
    </>
  )
}
