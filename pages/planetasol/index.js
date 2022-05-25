import Head from 'next/head'
import Image from 'next/image'

export default function Index(){


  return(
    <>
      <Head>
        <title>~ Planeta Sol ~</title>
      </Head>
      <div className="container">
        <nav className="navbar fixed-top bg-home">
          <div className="container-fluid">
            <Image src="/images/planetasol/logo.jpg" width="50" height="50" />
            <a className="navbar-brand" href="#">Planeta Sol</a>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .bg-home{
          background-color: #e3f2fd;
        }
      `}</style>
    </>
  )
}
