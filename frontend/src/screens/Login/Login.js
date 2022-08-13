import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center my-5 pb-5'>

                        <Card style={{ width: '500px' }} variant="dark" bg="primary" className="mb-2 rounded" >
                            <Card.Header className='d-flex justify-content-center  text-warning'><h1>Royal Resta</h1></Card.Header>
                            <div className='d-flex justify-content-center  text-warning mt-2'><Card.Img variant="top" src="/img/login/user-icon.png" alt="user-icon" style={{ width: '150px', height: '150px' }} /></div>
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center text-white'><hr /></Card.Title>
                                <Card.Text>

                                    <div className='mx-2'>
                                        <input className='form-control d-flex justify-content-center text-white mb-3' type="text" id="fEmail" placeholder="Ingrese su email" />
                                        <input className='form-control d-flex justify-content-center text-white mb-3' type="password" id="fPassword" placeholder="Ingrese su contraseña" />
                                    </div>

                                    <div className='d-flex justify-content-center text-white'>
                                        <Button className='d-flex justify-content-center btn btn-warning text-black'>Iniciar Sesión</Button>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login