import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import MainScreen from '../../components/MainScreen/MainScreen';
import { useParams } from "react-router-dom";


const AgregarEmpleado = () => {
    const contenido = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const params = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rol, setRol] = useState("");

    const [salario, setSalario] = useState("");
    const [restaurante, setRestaurante] = useState("");
    const [estado, setEstado] = useState("");

    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    /*Inserción del registro en la base de datos*/
    const [actor, setActor] = useState("");
    const [accion, setAccion] = useState("");
    const registrarLog = async () => {
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post(
                "/api/logs/add", { actor, accion }, config
            );
            console.log(data);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    /*Esto llena el SELECT de restaurantes*/
    useEffect(() => {
        const valoresIniciales = async () => {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.get(`/api/restaurantes/${params.id}`, config);
            setRestaurante(data.nombreRestaurante);
            setRol("Empleado");
        }
        valoresIniciales();
        setActor(contenido.name);
        setAccion("Contrató a:: " + name + " - para:: " + restaurante);
    }, [contenido.name, name, restaurante, params.id]);

    //Inserción  en la DB
    const submitHandler = async (e) => {
        e.preventDefault();
        registrarLog();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
        } else {
            setMessage(null);
            try {
                const config = { headers: { "Content-type": "application/json" } };
                const { data } = await axios.post(
                    "/api/users",
                    { name, email, password, rol, salario, restaurante, estado },
                    config
                );
                console.log(data);
                //localStorage.setItem("userInfo", JSON.stringify(data));
                window.location.replace("/gerente/tareas");
            } catch (error) {
                setError(error.response.data.message);
            }
        }

    }



    return (
        <MainScreen title="Contratar Empleado">
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

                            <Form.Group controlId="contrasena" className='mb-4'>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control required
                                    type="password"
                                    placeholder="Ingrese la contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="confirmaContrasena" className='mb-4'>
                                <Form.Label>Confirme la Contraseña</Form.Label>
                                <Form.Control required
                                    type="password"
                                    placeholder="Vuelva a ingresar la contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                            {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
                        </Col>

                        <Col>
                            <Form.Group controlId="salario" className='mb-4'>
                                <Form.Label>Salario</Form.Label>
                                <Form.Control required
                                    type="number"
                                    placeholder="Ingrese el salario en colones (₡)"
                                    value={salario}
                                    onChange={(e) => setSalario(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='estado' className='mb-4'>
                                <Form.Label>Estado del usuario</Form.Label>
                                <Form.Select required value={estado} onChange={e => setEstado(e.target.value)}>
                                    <option></option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        <Button variant="primary" className="text-warning" type="submit">
                            Crear usuario para empleado
                        </Button>
                    </Row>
                </Form>
            </Container>
        </MainScreen>
    )
}

export default AgregarEmpleado