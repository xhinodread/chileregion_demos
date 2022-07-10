
// export default function Seleccion(props){
// export default function Seleccion({estado, setEstado}){
export default function Seleccion({setEstado}){

const fuentes = ["'Blaka', cursive",
                  "'Lemon', cursive",
                  "'Merienda One', cursive",
                  "'New Rocker', cursive",
                  "'Peralta', cursive",
                  "'Press Start 2P', cursive",
                  "'Sanchez', serif",
                  "'Sansita', sans-serif",
                  "'Sedgwick Ave Display', cursive",
                  "'Special Elite', cursive",
                  "'Train One', cursive",
                  "'Zen Antique', serif"
                ]

 const getValor=(e)=>{
   //console.log(e.target.value);
   // setEstado(e.target.value)
   setEstado(fuentes[e.target.value])

 }

  return(
    <>
      <select className="form-select w-auto" aria-label="Default select example" onChange={getValor} >
        <option >Seleccione Fuente</option>
        {
          fuentes.map((val, ind)=>{
            return(<option key={ind} value={ind} >{val}</option>)
          })
        }
      </select>
    </>
  )
}

// <input type="text" value={estado} onChange={(e)=>setEstado(e.target.value)} />
