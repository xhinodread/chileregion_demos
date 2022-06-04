import Image from 'next/image'

export default function Googlemapa(){

  return(
    <>
      Googlemapa
      <br/>
      <Image
        src="/images/planetasol/mapa.png"
        alt="MAPA"
        width={300}
        height={150}
      />
      <div id="google-map" />
      <style jsx>{`
        #google-map {
          width: 100%;
          height: 20vh;
        }
      `}</style>
    </>
  )
}
