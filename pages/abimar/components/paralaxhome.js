

export default function Paralaxhome(){


  return(
    <>
      <div className="parallax text-center text-white">
          <p>Seguridad garantizada!</p>
      </div>
      <style jsx>{`
        .parallax {
            width: 100%;
            height: 250px;
            background-image: url(./images/abimar/esba.jpg);
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
