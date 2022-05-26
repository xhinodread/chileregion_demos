

export default function Paralaxhome(){


  return(
    <>
      <div className="container-fluid" >
        <div className="parallax text-center text-white">
            <p>Seguridad garantizada!</p>
        </div>
      </div>
      <style jsx>{`
        .container-fluid{
          margin: 0 auto;
        }
        .parallax {
          margin: 0 auto;

          width: 90%;
          height: 250px;
          background-image: url(./images/planetasol/paralax.png);
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
          margin-bottom: 60px;
        }
        .parallax p {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            font-family: "Bebas Neue", cursive;
            letter-spacing: 5px;
            padding: 10px;
            color: white;
            text-transform: uppercase;
        }
       `}</style>
    </>
  )
}
