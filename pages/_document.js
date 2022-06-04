import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from "react";

export default function Document() {

  const apiKey = "d7781e02414fbb04";

  useEffect(() => {
  renderMap()
  }, []);

  const renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=d7781e02414fbb04&callback=initMap");
  }

  var map;
  const initMap = () => {
    let {lat, lng} = this.state;
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat, lng},
      zoom: 8
    });
  }


  return (
    <Html lang="es">
      <Head>
      </Head>

    {/**      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=&v=weekly`} async ></script>
      </Head> **/ }
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
