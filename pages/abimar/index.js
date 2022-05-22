import Cabeza from './components/cabeza'
import Carrusel from './components/carrusel'
import Cardhome from './components/cardhome'
import Presentacionhome from './components/presentacionhome'
import Paralaxhome from './components/paralaxhome'
import Hoverhome from './components/hoverhome'
import Pies from './components/pies'

export default function Abimar(props) {

  // {url: "/images/abimar/sea-water-hd-800.png", titulo:"Manejo de areas de manejo"},
  const urlImg=[
    {url: "/images/abimar/sea-water-hd-800.png"},
    {url: "/images/abimar/a5.webp"},
    {url: "/images/abimar/artenzanal.jpg"}
  ]

  const urlImgCards=[
    {url: "/images/abimar/artenzanal.jpg", titulo: "Gubernamental", texto:"Nuestra vinculación profesional con el Estado de Chile se remonta a los comienzos de las operaciones de la empresa en 1998, llevando a cabo un sin número de licitaciones para diversas entidades del gobierno, cuyos objetivos, han sido principalmente, realizar estudios para la evaluación de diferentes recursos hidrobiológicos"},
    {url: "/images/abimar/a2.webp", titulo: "Sector privado", texto:"La empresa Abimar realiza trabajos para otras entidades privadas. Entre ellos estudios ambientales como INFA, EIA, DIA, entre otros. Colaboracion con empresas ligadas al sectos pesquero y de cultivo marino."},
    {url: "/images/abimar/a6.webp", titulo: "Pesca artesanal", texto:"Desarrollo de situación base, Seguimientos, Protocolos de Repoblamientos, Repoblamientos experimentales y Masivos, Acuicultura de Pequeña Escala de Individuos (recursos hidrobiológicos) en áreas de manejo y explotación de recursos bentónicos (AMERBs). Además de lo anterior, Proyectos sociales, postulaciones a fondos concursables gubernamentales y privados."}
  ]

  const textoPresentacion = {
    titulo: "Le damos bienvenida",
    texto:"Abimar Ltda. es una empresa que empezó sus actividades en el año 2003 especializándose en el ámbito de las Ciencias del Mar en Áreas Marinas Protegidas (Reserva Marina Isla Chañaral, Reserva marina Pingüino de Humboldt, Áreas de Manejo Y Explotación de ´Recursos Bentónicos) con un total de 60 AMERBs aprox. Ademas de incluimos los estudios de Seguimientos y ESBAs (Estudio de Situación Base) en todo Chile."
  }

  // <div className="carousel-caption " style={{"top":"-10px"}}>
  return(
    <>
      <Cabeza titulo="Abimar" />
      <div className="container">
        <Carrusel urlImg={urlImg} />
        <Presentacionhome {...textoPresentacion} />
        <Cardhome {...[urlImgCards]} />
        <Paralaxhome />
        <Hoverhome />
        <Pies />
      </div>
      <style jsx>{` `}</style>
    </>
  )
}
