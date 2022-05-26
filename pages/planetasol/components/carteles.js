import Image from 'next/image'
// import cartelUno from "/images/planetasol/cartelUno.png"
// import cartelDos from "/images/planetasol/cartelDos.png"

export default function Carteles(){


  return(
    <>
      <div className="container" >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 ">
            <Image src="/images/planetasol/cartelUno.png"
              alt="Cristales bluefilter"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <Image src="/images/planetasol/cartelDos.png"
              alt="Modelos exclusivos"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image src="/images/planetasol/cartelReparacion.png"
              alt="Modelos exclusivos"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
        </div>
      </div>
    </>
  )
}
