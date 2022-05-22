import Head from 'next/head'
import Menu from './menu'

export default function Cabeza(props) {
  // console.log('Cabeza: ', props)
  // <h1>{props.titulo}</h1>
  return(
    <>
      <Head>
        <title>~ {props.titulo} ~</title>
      </Head>
      <Menu titulo={props.titulo} />
    </>
  )
}
