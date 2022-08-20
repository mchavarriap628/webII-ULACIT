import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Button, Table, Col, Form } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import ErrorMessage from '../../components/ErrorMessage';

const Cliente = () => {

    //Para que funciona la lista
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        const fetchClientes = async () => {
            const { data } = await axios.get('/api/clientes/');
            setClientes(data);
        }
        fetchClientes();
    })

    //Para que funcione el form
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        setMessage(null);
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post("/api/clientes/add",
                { nombre, email, tel },
                config);
            console.log(data);
            window.location.replace("/empleado/cliente");
        } catch (error) {
            setError(error.response.data.message);
            console.log(message);
        }
    }


    return (
        <MainScreen title="ventana de clientes">
            <Row>
                <Col>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="nombre" className='mb-4'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Nombre del cliente"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className='mb-4'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required
                                type="email"
                                placeholder="Ingrese correo del cliente"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="tel" className='mb-4'>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese el número telefónico del cliente"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                        </Form.Group>
                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        <Button variant="primary" className="text-warning" type="submit">
                            Registrar Cliente
                        </Button>
                    </Form>
                </Col>


                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Tel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(clientes => (
                                <tr key={clientes._id} >
                                    <td>{clientes.nombre}</td>
                                    <td>{clientes.email}</td>
                                    <td>{clientes.tel}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </MainScreen>
    )
}

export default Cliente