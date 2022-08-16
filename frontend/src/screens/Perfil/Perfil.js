import React from 'react';
import { Button, Col, Row, Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
//import { Link } from 'react-router-dom';


const Perfil = () => {

    return (
        <MainScreen title='Bienvenido de vuelta!'>

            <Row>
                <Col>
                    <a href='/tareas'>
                        <Button variant='primary' className="rounded text-warning">
                            Mis Tareas
                        </Button>
                    </a>
                </Col>
                <Col>
                    <Button
                        variant='danger'
                        className="text-white rounded"
                        href='/'
                        onClick={() => {
                            localStorage.removeItem("userInfo");
                        }}>Cerrar Sesión
                    </Button>
                </Col>
            </Row>

            <Row className='mt-5'>

                <Card style={{ margin: 10 }} bg="light">
                    <Card.Header style={{ display: "flex" }}>
                        <span
                            style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}>
                            Información Personal
                        </span>
                        <div><Button variant="primary" className='text-warning rounded'>Editar</Button></div>
                    </Card.Header>
                </Card>


            </Row>

        </MainScreen>
    )
}

export default Perfil