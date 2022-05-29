

export default function Imghover(){

  return(
    <>
      <div className="cardh bg-info"></div>
      <style jsx>{`
        .cardh {
          width:  280px;
          height: 170px;
          background: url("../images/portadaPortafolios.jpg") no-repeat;
          background-size: 280px 170px;
          background-position: center;
          display: inline-block;
          transition: background 2s;
        }
        .cardh:hover {
          background: url("../images/portadaPortafoliosAbimar.jpg") no-repeat;
          background-size: 280px 170px;
        }

      `}</style>
    </>
  )
}
