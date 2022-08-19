import React from 'react';
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import { useDispatch } from "react-redux";
import { logout } from '../../actions/userActions';


const Perfil = () => {

    const dispatch = useDispatch();

    const contenido = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

    const logoutHandler = () => {
        dispatch(logout());
        window.location.replace("/login");
    }

    const tareasHandler = () => {
        switch (contenido.rol) {
            case 'Admin':
                window.location.replace("/admin/tareas");
                break;
            case 'Gerente':
                window.location.replace("/gerente/tareas");
                break;
            case 'Supervisor':
                window.location.replace("/supervisor/tareas");
                break;
            case 'Empleado':
                window.location.replace("/empleado/tareas");
                break;
            default:
                window.location.replace("/login");
                break;
        }
    }

    return (
        <MainScreen title='¡Bienvenido de vuelta!'>

            <Row>
                <Col>
                    <Button
                        variant='primary'
                        className="rounded text-warning mx-3"
                        onClick={() => {
                            tareasHandler();
                        }}>
                        Mis Tareas
                    </Button>

                    <Button
                        variant='danger'
                        className="text-white rounded"
                        onClick={() => {
                            logoutHandler();
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
                        <div>
                            <a href={`/perfil/password/${contenido._id}`}>
                                <Button variant="primary" className='text-warning rounded mx-3'>Actualizar contraseña
                                </Button></a>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Group controlId="name" className='mb-4'>
                                    <Form.Label>Mi nombre</Form.Label>
                                    <Form.Control required type="text"
                                        value={contenido.name} disabled />
                                </Form.Group>

                                <Form.Group controlId="restaurante" className='mb-4'>
                                    <Form.Label>Restaurante en el que trabajo</Form.Label>
                                    <Form.Control required type="text"
                                        value={contenido.restaurante} disabled />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="email" className='mb-4'>
                                    <Form.Label>Mi correo</Form.Label>
                                    <Form.Control required type="email"
                                        value={contenido.email} disabled />
                                </Form.Group>

                                <Form.Group controlId="rol" className='mb-4'>
                                    <Form.Label>Mi rol</Form.Label>
                                    <Form.Control required type="text"
                                        value={contenido.rol} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>


            </Row>

        </MainScreen>
    )
}

export default Perfil