import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Aquí cargamos el reducer userLogin
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            window.location.replace("/perfil");
        }
    }, [userInfo]);


    const submitHandler = async (e) => {
        e.preventDefault();
        //Aquí llamamos el action Login detro de userAction
        dispatch(login(email, password));
    };

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
                                    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}

                                    <Form onSubmit={submitHandler}>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control className='rounded' type="email"
                                                placeholder="Digite su email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword" className='mt-3'>
                                            <Form.Control className='rounded' type="password"
                                                placeholder="Digite su contraseña"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>

                                        <span className='mt-4 d-flex justify-content-center'>
                                            <Button className='btn btn-warning text-black' type="submit">Iniciar Sesión</Button>
                                        </span>
                                    </Form>
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