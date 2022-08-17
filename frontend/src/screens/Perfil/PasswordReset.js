import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const PasswordReset = () => {
    return (
        <MainScreen title='Actualización de contraseña'>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="passwordOld" className='mb-4'>
                            <Form.Label>Contraseña actual</Form.Label>
                            <Form.Control required type="password" />
                        </Form.Group>


                        <Form.Group controlId="passwordNew" className='mb-4'>
                            <Form.Label>Contraseña nueva</Form.Label>
                            <Form.Control required type="password" />
                        </Form.Group>

                        <Form.Group controlId="passwordNewConfirm" className='mb-4'>
                            <Form.Label>Confirme la contraseña nueva</Form.Label>
                            <Form.Control required type="password" />
                        </Form.Group>

                        <Button variant="primary" className="text-warning" type="submit">
                            Actualizar contraseña
                        </Button>

                    </Col>
                    <Col>
                        <img src="/img/perfil/cambiarContrasena.jpg" alt="Royal-Resta-Cambiar-Password" style={{ width: '60%' }} className="rounded" />
                    </Col>
                </Row>
            </Form>
        </MainScreen>
    )
}

export default PasswordReset