import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Card, Badge, Accordion } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import axios from 'axios';

const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Está seguro de eliminar el restaurante?")) {
        }
    };

    const fetchRestaurantes = async () => {
        const { data } = await axios.get('/api/restaurantes');
        setRestaurantes(data);
    }

    console.log(restaurantes);

    useEffect(() => {
        fetchRestaurantes();
    }, [])


    return (
        <MainScreen title='Admin - Restaurantes'>

            <Row>
                <Col>
                    <a href='/tareas'>
                        <Button variant='primary' className="rounded text-warning">
                            Agregar Restaurante +
                        </Button>
                    </a>
                </Col>
            </Row>

            <Row className='mt-5'>

                {
                    restaurantes.map(restaurantes => (

                        <Accordion key={restaurantes._id}>
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
                                        <Accordion.Header as={Card.Text} variant='link' eventkey='0'>{restaurantes.title}</Accordion.Header>
                                    </span>
                                    <div>
                                        <Button href={`/admin/restaurantes/${restaurantes._id}`} variant="primary" className='text-warning rounded'>Editar</Button>
                                        <Button
                                            variant="primary"
                                            className='mx-2  text-danger rounded'
                                            onClick={() => deleteHandler(restaurantes._id)}
                                        >Eliminar</Button>
                                    </div>
                                </Card.Header>

                                <Accordion.Body eventkey='0'>
                                    <Card.Body>
                                        <h4>
                                            <Badge bg="warning" text="primary" pill style={{ fontSize: 10 }}>ID - {restaurantes._id}</Badge>
                                        </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {restaurantes.content}
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

export default Restaurantes