import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);


  // return <Component {...pageProps} />
  return (
    <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
    {  // <Script
      //   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      //   integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      //   crossorigin="anonymous"/>
    }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
