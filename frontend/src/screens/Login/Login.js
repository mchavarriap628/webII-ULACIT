import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
//import Loading from '../../components/Loading';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    //const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        //console.log(email, password);
        try {
            const config = { headers: { "Content-type": "application/json" } };
            //setLoading(true);
            const { data } = await axios.post('/api/users/login', { email, password, }, config);
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            //setLoading(false); 
        } catch (error) {
            setError(error.response.data.message);
        }
    }

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