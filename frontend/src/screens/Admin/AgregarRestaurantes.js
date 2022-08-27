import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen/MainScreen'
import axios from 'axios';
import ErrorMessage from '../../components/ErrorMessage';


const AgregarRestaurantes = () => {

    const contenido = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [nombreRestaurante, setNombreRestaurante] = useState("");
    const [direccionFisica, setDireccionFisica] = useState("");
    const [gerenteAsignado, setGerenteAsignado] = useState("");
    const [emailRestaurante, setEmailRestaurante] = useState("");
    const [telRestaurante, setTelRestaurante] = useState("");



    const [error, setError] = useState(false);

    const [gerentes, setGerentes] = useState([]);

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



    //Fetching de los select con los gerentes de la base de datos
    const fetching = async () => {
        const config = { headers: { "Content-type": "application/json" } };
        const { data } = await axios.get("/api/users/gerentes", config);
        setGerentes(data);
    }

    useEffect(() => {
        fetching();
        setActor(contenido.name);
        setAccion("Creó un restaurante:: " + nombreRestaurante);
    }, [contenido.name, nombreRestaurante]);

    //insersicón del restaurante en la base de datos
    const submitHandler = async (e) => {
        e.preventDefault();
        registrarLog();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post(
                "/api/restaurantes/create",
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
        <MainScreen title="Agregar Restaurante">
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
                        Registrar Restaurante
                    </Button>
                </Row>
            </Form>

        </MainScreen>
    )
}

export default AgregarRestaurantes