

export default function Presentacionhome(props) {
  //console.log('textoPresentacion:', props.textoPresentacion);
  const {titulo, texto} = props;
  //console.log('titulo: ', titulo);
  return(
    <>
      <div className="presentacion container-fluig text-justify">
        <h2 className="text-center mt-2">{titulo}</h2>
        <p className="mx-5">{texto}</p>
      </div>
      <style jsx>{`

        h2{
          font-family: "Bebas Neue", cursive;
        }

        @media (max-width: 576px) {
          p{
            display: none;
          }
        }

      `}
      </style>
    </>
  )
}
