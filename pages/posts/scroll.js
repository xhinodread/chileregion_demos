import Link from 'next/link'
import Image from 'next/image'
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Scroll =()=>{

  useEffect(() => {
    AOS.init();
    })

  const iterr=()=>{
    let elArray= []
    for (let step = 0; step < 1; step++) {
      elArray.push(step);
    }
    return(elArray)
  }

  const LaCard=()=>{
    return(
      <div className="card card-w m-2" >
        <Image
          src="/images/LGOCHILEREGION2021.png"
          alt="Chile region"
          width={100}
          height={100}
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </p>
        </div>
      </div>
    )
  }

  const ElEfecto =({efecto})=>{
    //console.log(efecto);
    return(
      <div data-aos={efecto?efecto:"fade-up"} data-aos-duration="1000" >
        <LaCard />
      </div>
    )
  }

  const RowEfecto=({efecto})=>{
    return(
      <div className="row">
        { [1,2,3,4,5].map((ind)=>{
          return(
            <div className="col" key={ind+"X"} >
              <ElEfecto key={ind+"X"} efecto={efecto?efecto:"zoom-in-left"} />
            </div>
          )
        })}
      </div>
    )
  }

  const RowLaCard=()=>{
    return(
      iterr().map((indA)=>{
          return(
            <div className="row" key={indA+"row"} >
              { [1,2,3,4,5].map((ind)=>{
                return(
                  <div className="col" key={ind+"Y"} >
                    <LaCard key={ind+"Y"} />
                  </div>
                )
              })}
            </div>
          )
      })
    )
  }

  return(
    <>
      <div className="fixed-top">
        <Link href="/">
          <a className="m-1 btn btn-info">Volver</a>
        </Link>
      </div>
      <div className="container">
        {
          // iterr().map((indA)=>{
          //   return(
          //     <div className="row" key={indA+"row"} >
          //       { [1,2,3,4,5].map((ind)=>{
          //         return(
          //           <div className="col" key={ind+"Y"} >
          //             <LaCard key={ind+"Y"} />
          //           </div>
          //         )
          //       })}
          //     </div>
          //   )
          // })
        }
        <RowLaCard />
        <RowEfecto  />
        <RowLaCard />
        <RowEfecto  efecto="zoom-in-left" />
        <RowLaCard />
        <RowEfecto efecto="flip-left" />
        <RowLaCard />
        <RowEfecto efecto="zoom-out-down" />
      </div>
      <style jsx>{`
        .card-w{
          width: 18rem;
        }
      `}</style>
    </>
  )
}
export default Scroll
