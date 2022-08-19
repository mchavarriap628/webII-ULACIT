import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Usuario = () => {
    const params = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salario, setSalario] = useState("");
    const [restaurante, setRestaurante] = useState("");
    const [rol, setRol] = useState("");
    const [estado, setEstado] = useState("");

    const [error, setError] = useState(false);
    const [restaurantes, setRestaurantes] = useState([]);

    /*Esto llena el SELECT de restaurantes*/
    useEffect(() => {
        const fillRestaurantes = async () => {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.get("/api/restaurantes/", config);
            setRestaurantes(data);
        }
        fillRestaurantes();
    });

    //Esto carga el formulario con el objeto escogido que pasa su id a esta página
    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/api/users/${params.id}`);
            setName(data.name);
            setEmail(data.email);
            setSalario(data.salario);
            setRol(data.rol);
            setEstado(data.estado);
            setRestaurante(data.restaurante);
        }
        fetching();
    }, [params.id]);

    //Esto actualiza el objeto escogido que pasa su id a esta página
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.put(`/api/users/${params.id}`,
                { name, email, salario, restaurante, rol, estado },
                config
            );
            console.log(data);
            window.location.replace("/admin/usuarios");
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <MainScreen title="Editar Usuario">
            <Container>
                <Form onSubmit={submitHandler} id="registerForm">
                    <Row>

                        <Col>
                            <Form.Group controlId="name" className='mb-4'>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required
                                    type="text"
                                    placeholder="Ingrese el nombre completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="email" className='mb-4'>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control required
                                    type="email"
                                    placeholder="ejemplo@royalresta.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="salario" className='mb-4'>
                                <Form.Label>Salario</Form.Label>
                                <Form.Control required
                                    type="number"
                                    placeholder="Ingrese el salario en colones (₡)"
                                    value={salario}
                                    onChange={(e) => setSalario(e.target.value)}
                                />
                            </Form.Group>

                        </Col>

                        <Col>
                            <Form.Group controlId='restaurante' className='mb-4'>
                                <Form.Label>Restaurante asignado</Form.Label>
                                <Form.Select required value={restaurante} onChange={e => setRestaurante(e.target.value)}>
                                    <option></option>
                                    <option>Ninguno</option>
                                    {restaurantes?.map(restaurantes => (
                                        <option key={restaurantes._id}>{restaurantes.nombreRestaurante}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId='rol' className='mb-4'>
                                <Form.Label>Rol Asignado</Form.Label>
                                <Form.Select required value={rol} onChange={e => setRol(e.target.value)}>
                                    <option></option>
                                    <option>Empleado</option>
                                    <option>Supervisor</option>
                                    <option>Gerente</option>
                                    <option>Admin</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId='estado' className='mb-4'>
                                <Form.Label>Estado del usuario</Form.Label>
                                <Form.Select required value={estado} onChange={e => setEstado(e.target.value)}>
                                    <option></option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </Form.Select>
                            </Form.Group>
                            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        </Col>

                        <Button variant="primary" className="text-warning" type="submit">
                            Guardar Cambios
                        </Button>
                    </Row>
                </Form>
            </Container>
        </MainScreen>
    )
}

export default Usuario