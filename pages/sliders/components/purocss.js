

export default function Purocss() {

  return(
    <>
      <div className="container">
        <input type="radio" id="trigger1" name="slider" />
        <label htmlFor="trigger1"></label>
        <div className="slide bg1"></div>

        <input type="radio" id="trigger2" name="slider" defaultChecked autoFocus />
        <label htmlFor="trigger2"></label>
        <div className="slide bg2"></div>

        <input type="radio" id="trigger3" name="slider" />
        <label htmlFor="trigger3"></label>
        <div className="slide bg3"></div>

        <input type="radio" id="trigger4" name="slider" />
        <label htmlFor="trigger4"></label>
        <div className="slide bg4"></div>

        <input type="radio" id="trigger5" name="slider" />
        <label htmlFor="trigger5"></label>
        <div className="slide bg5"></div>
      </div>

      <style jsx>{`
        svg{
          width:2em;height:2em;position:fixed;top:1em;left:1em;opacity:.8;
        }
        /****
        body, html {
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          overflow: hidden;
        }
        ****/
        input {
          position: absolute;
          opacity: 0;
          margin-top: 95vh;
          cursor: pointer;
        }

        label {
          display: inline-block;
          width: 12px;
          height: 12px;
          border: solid 2px white;
          border-radius: 999px;
          background-color: transparent;
          margin: 95vh 6px 0 6px;
          z-index: 2;
          cursor: pointer;
          transition-duration: .4s;
        }

        input:checked + label{
          background-color: white;
        }

        input:focus + label{
          box-shadow: 0 0 0 2px teal, 0 0 18px white;
        }

        .slide {
          position: absolute;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          transform: translateX(-100%);
          transition-duration: .4s;
          opacity: 1;
        }

        input:checked ~ .slide {
          transform: translateX(100%);
        }

        input:checked + label + .slide {
          transform: translateX(0);
          opacity: 1;
        }

      .bg1{
        background-image: url(images/sliders/photo-1.jpg);
      }
      .bg2{
        background-image: url(images/sliders/photo-2.jpg);
      }
      .bg3{
        background-image: url(images/sliders/photo-3.jpg);
      }
      .bg4{
        background-image: url(images/sliders/photo-4.jpg);
      }
      .bg5{
        background-image: url(images/sliders/photo-5.jpg);
      }
      `}</style>
    </>
  )
}
