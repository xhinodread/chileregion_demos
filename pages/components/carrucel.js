import Carousel from 'react-bootstrap/Carousel';

export default function Carrucel(){

  return(

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/kaninMain.png"
          alt="First slide"
        />
        <Carousel.Caption  >
          <h3 className=" text-movil " >Primero slide label</h3>
          <p className=" text-movil " >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner3D.png"
          alt="Second slide"
        />

        <Carousel.Caption className="text-dark" >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/BANNERSproyectos.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
