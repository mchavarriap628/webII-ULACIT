import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Button, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';


const Tareas = () => {

    const contenido = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const [misRestaurantes, setMisRestaurantes] = useState([]);

    useEffect(() => {
        const fetchRestaurantes = async () => {
            const { data } = await axios.get('/api/restaurantes/');
            for (var i = 0; i < data.length; i++) {
                if (contenido.name !== data[i].gerenteAsignado) {
                    delete data[i];
                }
            }
            setMisRestaurantes(data);
        }
        fetchRestaurantes();
    });

    return (
        <MainScreen title="Restaurantes que administro">

            <Row className='mt-5'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Restaurante</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Gerente</th>
                            <th>Empleados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {misRestaurantes.map(
                            misRestaurantes => (

                                <tr key={misRestaurantes._id}>
                                    <td>{misRestaurantes.nombreRestaurante}</td>
                                    <td>{misRestaurantes.emailRestaurante}</td>
                                    <td>{misRestaurantes.direccionFisica}</td>
                                    <td>{misRestaurantes.telRestaurante}</td>
                                    <td>{misRestaurantes.gerenteAsignado}</td>
                                    <td>
                                        <Button href={`/gerente/contrato/${misRestaurantes._id}`}
                                            variant="primary" className='text-warning rounded'>Agregar</Button>

                                        <Button href={`/gerente/empleados/${misRestaurantes.nombreRestaurante}`}
                                            variant="primary" className='mx-2  text-info rounded'>Ver</Button>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
            </Row>
        </MainScreen>
    )
}

export default Tareas