import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navvar from './components/Navvar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 // import bootstrap from 'bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={8}  className="bg-success" >sm=8</Col>
        <Col md={4} className="bg-danger" >sm=4</Col>
      </Row>
      <Row>
        <Col sm  className="bg-info" >sm=true</Col>
        <Col sm className="bg-warning" >sm=true</Col>
        <Col sm className="bg-primary" >sm=true</Col>
      </Row>
    </Container>
  )
}
