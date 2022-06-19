import Purocss from './components/purocss'
import Slidercss from './components/slidercss'

export default function Sliders(){

  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col slidercss m-3 p-4">
          Mis sliders
        </div>
      </div>
      <div className="row">
        <div className="col slidercss m-3 p-4">
          <Slidercss />
        </div>
      </div>
    </div>
    <style jsx>{`
      .slidercss{
        background: linear-gradient(#74abe2, #5563de);
        font-family: "Ropa Sans", sans-serif;
      }
    `}</style>
    </>
  )
}

// export async function getServerSideProps({ req }) {
//   //console.log(req.headers);
//   //console.log(req);
//   const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
//
//   return {
//     props: {
//       ip,
//     }, // will be passed to the page component as props
//   };
// }
