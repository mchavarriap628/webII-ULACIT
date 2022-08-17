import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen/MainScreen'

const AgregarRestaurantes = () => {

    const [gerente, setGerente] = useState("");


    return (
        <MainScreen title="Admin - Agregar Restaurante">
            <Form id="registerForm">
                <Row>

                    <Col>
                        <Form.Group controlId="nameRestaurante" className='mb-4'>
                            <Form.Label>Nombre del restaurante</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese el nombre del nuevo restaurante"
                            />
                        </Form.Group>

                        <Form.Group controlId="direccionRestaurante" className='mb-4'>
                            <Form.Label>Dirección física del restaurante</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese la dirección del nuevo restaurante"
                            />
                        </Form.Group>

                        <Form.Group controlId='gerenteRestaurante' className='mb-4'>
                            <Form.Label>Gerente asignado</Form.Label>
                            <Form.Select required value={gerente} onChange={e => setGerente(e.target.value)}>
                                <option></option>
                                <option>Ejemplo</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group controlId="emailRestaurante" className='mb-4'>
                            <Form.Label>Correo electrónico del restaurante</Form.Label>
                            <Form.Control required
                                type="email"
                                placeholder="ejemplo@royalresta.com"
                            />
                        </Form.Group>

                        <Form.Group controlId='telefonoRestaurante' className='mb-4'>
                            <Form.Label>Teléfono del restaurante</Form.Label>
                            <Form.Control required
                                type="tel"
                                placeholder="Ingrese el número telefónico del restaurante"
                            />
                        </Form.Group>
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