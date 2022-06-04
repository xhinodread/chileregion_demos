import Link from 'next/link'

export default function BottonGlowing({texto, colorHover, link}) {

  //const colorHover = "#e5f93c"; //"#1e9bff";
  //console.log("link:", link);

  return(
    <>
      <div className="elbody">
        <Link href={link? link: "#"} >
          <a>
            <span>{texto}</span><i></i>
          </a>
        </Link>
      </div>

      <style jsx>{`

        .elhtml{
          margin: 0;
          //margin: 0 auto;
          padding: 0;
          box-sizing: border-box:
        }

        .elbody{
          display: flex;
          justify-content: center;
          align-items: center;
          //min-height: 100vh;
          min-height: 10vh;
          background: #27282C;
        }

        a{
          position: relative;
          //margin: 10px;
          //margin: 0 auto;
          margin: 5px 10px;
          background: #444;
          color: ${colorHover};
          //#FFF;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1.5em;
          letter-spacing: .1em;
          padding: 10px 30px;
          transition: .4s;
        }
        a:hover{
          letter-spacing: .25em;
          background: #1e9bff;
          color: #1e9bff;
          box-shadow:0 0 45px ${colorHover};
          //box-shadow:0 0 35px #1e9bff;
        }
        a::before{
          content: '';
          position: absolute;
          inset: 2px;
          background: #27282C;
        }
        a span{
          position: relative;
          index-z: 1;
        }
        a i{
          position: absolute;
          inset: 0;
          display: block;
        }

        /***************/
        a i::before{
          content: '';
          position: absolute;
          // top: -3.5px;
          top: -1.5px;
          left: 80%;
          width: 10px;
          height: 5px;
          border: 2px solid ${colorHover};
          background: #27282C;
          transform: translateX(-50%);
          transition: .5s;
        }
        a:hover i::before{
          top: -1.5px;
          width: 20px;
          //height: 9px;
          left: 20%;
          //background: #1e9bff;
          color: #1e9bff;
          //box-shadow:0 0 35px #1e9bff;
          border: 2px solid #1e9bff;
        }

        /***************/
        a i::after{
          content: '';
          position: absolute;
          //bottom: -3.5px;
          bottom: -1.5px;
          left: 20%;
          width: 10px;
          height: 5px;
          border: 2px solid ${colorHover};
          background: #27282C;
          transform: translateX(-50%);
          transition: .5s;
        }
        a:hover i::after{
          width: 20px;
          left: 80%;
          //background: #1e9bff;
          color: #1e9bff;
          //box-shadow:0 0 35px #1e9bff;
          border: 2px solid #1e9bff;
        }

      `}</style>
  </>
  )
}

/****
<div className="elhtml_">
  <div className="elbody_">
    <Link href="#" >
      <a>
        <span>Boton</span><i></i>
      </a>
    </Link>
  </div>
</div>
***/
