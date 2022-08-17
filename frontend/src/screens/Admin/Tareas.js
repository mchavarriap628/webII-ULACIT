import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const Tareas = () => {
    return (
        <MainScreen title="Tareas de Administrador">
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h3">Restaurantes</Card.Header>
                        <Card.Body>
                            <Card.Title>Agregar y Editar Perfiles para Restaurantes</Card.Title>
                            <Card.Text>
                                En esta sección puede crear un perfil nuevo para un restaurante o editar uno ya existente.
                            </Card.Text>
                            <a href='/admin/restaurantes'><Button variant="primary" className='text-warning'>Ir a Restaurantes</Button></a>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header as="h3">Usuarios</Card.Header>
                        <Card.Body>
                            <Card.Title>Agregar y Editar Usuarios</Card.Title>
                            <Card.Text>
                                Aquí puede agregar perfiles de empleados al sistema, editar existentes o eliminar los perfiles de empleados inactivos.
                            </Card.Text>
                            <a href='/admin/usuarios'><Button variant="primary" className='text-warning'>Ir a Usuarios</Button></a>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header as="h3">Reportes</Card.Header>
                        <Card.Body>
                            <Card.Title>Reportes de todos los restaurantes</Card.Title>
                            <Card.Text>
                                En la sección de reportes, puede ver información de todos los restaurantes en el sistema.
                            </Card.Text>
                            <a href='/admin/reportes'><Button variant="primary" className='text-warning'>Ir a Reportes</Button></a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ backgroundColor: '#42aaab' }} className="rounded" >
                    <img src="/img/admin/adminPage.jpg" alt="Royal-Resta-Admin-Page" style={{ width: '100%' }} />
                </Col>
            </Row>
        </MainScreen>
    )
}

export default Tareas