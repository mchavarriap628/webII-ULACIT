import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const Tareas = () => {
    return (
        <MainScreen title="Tareas de Supervisor">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h3">Rol de colaborador</Card.Header>
                        <Card.Body>
                            <Card.Title>Tareas de diarías</Card.Title>
                            <Card.Text>
                                Ayuda a un colaborador de tu restaurante, tú también tienes accesso a sus tareas.
                            </Card.Text>
                            <a href='/empleado/tareas'><Button variant="primary" className='text-warning'>Tareas Diarias</Button></a>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header as="h3">Inventario</Card.Header>
                        <Card.Body>
                            <Card.Title>Administre el Inventario</Card.Title>
                            <Card.Text>
                                Aquí puede agregar productos y administrar el inventario de articulos de Royal Resta.
                            </Card.Text>
                            <a href='/supervisor/productos'><Button variant="primary" className='text-warning'>Ir a productos</Button></a>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header as="h3">Reportes</Card.Header>
                        <Card.Body>
                            <Card.Title>Reportes del restaurante que superviso</Card.Title>
                            <Card.Text>
                                En la sección de reportes, puede ver una lista de todas las ventas de la sucursal que supervisa.
                            </Card.Text>
                            <a href='/supervisor/reportes'><Button variant="primary" className='text-warning'>Ir a Reportes</Button></a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ backgroundColor: '#c8e395' }} className="pt-5 rounded"  >
                    <img src="/img/supervisor/supervisor.png" alt="Royal-Resta-Supervisor-Page" style={{ width: '100%' }} />
                </Col>
            </Row>
        </MainScreen>
    )
}

export default Tareas
