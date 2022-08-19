import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Restaurante = () => {
    const params = useParams();
    const [nombreRestaurante, setNombreRestaurante] = useState("");
    const [direccionFisica, setDireccionFisica] = useState("");
    const [gerenteAsignado, setGerenteAsignado] = useState("");
    const [emailRestaurante, setEmailRestaurante] = useState("");
    const [telRestaurante, setTelRestaurante] = useState("");

    //const [restaurante, setRestaurante] = useState("");

    const [error, setError] = useState(false);
    const [gerentes, setGerentes] = useState([]);

    /*Esto carga el formulario con el objeto escogido que pasa su id a esta página*/
    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/api/restaurantes/${params.id}`);
            setNombreRestaurante(data.nombreRestaurante);
            setDireccionFisica(data.direccionFisica);
            setGerenteAsignado(data.gerenteAsignado);
            setEmailRestaurante(data.emailRestaurante);
            setTelRestaurante(data.telRestaurante);
        }
        fetching();
    }, [params.id]);

    /*Esto llena el SELECT de gerentes*/
    useEffect(() => {
        const fillGerentes = async () => {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.get("/api/users/gerentes", config);
            setGerentes(data);
        }
        fillGerentes();
    });


    /*Esto actualiza el objeto escogido que pasa su id a esta página*/
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.put(`/api/restaurantes/${params.id}`,
                { nombreRestaurante, direccionFisica, gerenteAsignado, emailRestaurante, telRestaurante },
                config
            );
            console.log(data);
            window.location.replace("/admin/restaurantes");
        } catch (error) {
            setError(error.response.data.message);
        }
    }



    return (
        <MainScreen title="Editar Restaurante">
            <Form id="registerForm" onSubmit={submitHandler}>
                <Row>

                    <Col>
                        <Form.Group controlId="nameRestaurante" className='mb-4'>
                            <Form.Label>Nombre del restaurante</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese el nombre del nuevo restaurante"
                                value={nombreRestaurante}
                                onChange={(e) => setNombreRestaurante(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="direccionRestaurante" className='mb-4'>
                            <Form.Label>Dirección física del restaurante</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese la dirección del nuevo restaurante"
                                value={direccionFisica}
                                onChange={(e) => setDireccionFisica(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId='gerenteRestaurante' className='mb-4'>
                            <Form.Label>Gerente asignado</Form.Label>
                            <Form.Select required value={gerenteAsignado} onChange={e => setGerenteAsignado(e.target.value)}>
                                <option></option>
                                <option>Ninguno</option>
                                {gerentes?.map(gerentes => (
                                    <option key={gerentes._id}>{gerentes.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group controlId="emailRestaurante" className='mb-4'>
                            <Form.Label>Correo electrónico del restaurante</Form.Label>
                            <Form.Control required
                                type="email"
                                placeholder="ejemplo@royalresta.com"
                                value={emailRestaurante}
                                onChange={(e) => setEmailRestaurante(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId='telefonoRestaurante' className='mb-4'>
                            <Form.Label>Teléfono del restaurante</Form.Label>
                            <Form.Control required
                                type="tel"
                                placeholder="Ingrese el número telefónico del restaurante"
                                value={telRestaurante}
                                onChange={(e) => setTelRestaurante(e.target.value)}
                            />
                        </Form.Group>

                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}

                    </Col>

                    <Button variant="primary" className="text-warning" type="submit">
                        Guardar Cambios al Restaurante
                    </Button>
                </Row>
            </Form>
        </MainScreen>
    )
}

export default Restaurante