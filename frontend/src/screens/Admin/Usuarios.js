import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Card, Badge, Accordion } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import axios from 'axios';

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Está seguro de eliminar el usuarios?")) {
        }
    };

    const fetchUsuarios = async () => {
        const { data } = await axios.get('/api/restaurantes');
        setUsuarios(data);
    }

    console.log(usuarios);

    useEffect(() => {
        fetchUsuarios();
    }, [])

    return (

        <MainScreen title='Admin - Usuarios'>

            <Row>
                <Col>
                    <a href='/admin/agregarUsuario'>
                        <Button variant='primary' className="rounded text-warning">
                            Agregar Usuario +
                        </Button>
                    </a>
                </Col>
            </Row>

            <Row className='mt-5'>

                {
                    usuarios.map(usuarios => (

                        <Accordion key={usuarios._id}>
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
                                        <Accordion.Header as={Card.Text} variant='link' eventkey='0'>{usuarios.title}</Accordion.Header>
                                    </span>
                                    <div>
                                        <Button href={`/admin/restaurantes/${usuarios._id}`} variant="primary" className='text-warning rounded'>Editar</Button>
                                        <Button
                                            variant="primary"
                                            className='mx-2  text-danger rounded'
                                            onClick={() => deleteHandler(usuarios._id)}
                                        >Eliminar</Button>
                                    </div>
                                </Card.Header>

                                <Accordion.Body eventkey='0'>
                                    <Card.Body>
                                        <h4>
                                            <Badge bg="warning" text="primary" pill style={{ fontSize: 10 }}>ID - {usuarios._id}</Badge>
                                        </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {usuarios.content}
                                            </p>
                                            <footer className="blockquote-footer" style={{ fontSize: 13 }}>
                                                Creado el día - FECHA
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Accordion.Body>

                            </Card>
                        </Accordion>

                    ))
                }


            </Row>

        </MainScreen >

    )
}

export default Usuarios