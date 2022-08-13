import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Informacion = () => {
  return (
    <Container>
      <Row className='mt-3 pb-5'>
        <h1 className='bg-primary text-warning p-2'>Sobre Royal Resta</h1>
        <Col md={{ span: 6 }} className='bg-white p-2 m-2'>
          <h3>Versión</h3>
          <h1>2.7</h1>
          <ul className="list-group">
            <li class="list-group-item bg-primary text-warning">Desarrolladores</li>
            <li className="list-group-item">Manuel Chavarría</li>
            <li className="list-group-item">Fabian Barquero</li>
            <li className="list-group-item">Megan Madrigal</li>
          </ul>

          <ul className="list-group mt-4">
            <li class="list-group-item bg-primary text-warning">Contacto</li>
            <li className="list-group-item">support@royalresta.net</li>
          </ul>

        </Col>
        <Col md={{ span: 5 }} className='bg-white p-2 m-2'>
          <h3>Mantenimiento</h3>
          <h1>2</h1>
          <p>Programados</p>
          <img src="/img/info/decorativo1.png" alt="Royal-Resta-Version-Info" style={{ width: '100%' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Informacion