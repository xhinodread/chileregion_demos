

export default function Paralaxhome(){


  return(
    <>

        <div className="parallax text-center text-alert">
            <p className="text-warning">¡Seguridad garantizada!</p>
        </div>

      <style jsx>{`
        .parallax {
          margin: 0 auto;
          width: 90%;
          height: 200px;
          background-image: url(./images/planetasol/paralax.png);
          background-position: center;
          background-size: auto;
          background-attachment: fixed;
        //  margin-bottom: 60px;
        }
        .parallax p {

            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            //font-family: "Bebas Neue", cursive;
            //font-family: "Satisfy", cursive;
            font-family: 'Blaka', cursive;
            letter-spacing: 5px;
            padding: 10px;
            color: white;
            text-transform: uppercase;
            text-shadow: 5px 2px 3px #528ecbff;

        }
       `}</style>
    </>
  )
}
