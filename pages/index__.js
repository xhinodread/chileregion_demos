import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navvar from './components/navvar'
import Body from './components/body'
import Foot from './components/foot'


export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Chile Región .... Demos web..</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="ChileRegión" />
        <link rel="icon" href="/images/LGOCHILEREGION2021.png" />
      </Head>
      <main>
        <Navvar />
        <Body />
        <Foot />
      </main>
    </div>
  )
}
