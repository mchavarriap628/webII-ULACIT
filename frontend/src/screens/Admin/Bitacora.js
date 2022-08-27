import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const Bitacora = () => {

    const [logs, setLogs] = useState([]);

    //Optiene log registros de la colección LOGS
    useEffect(() => {
        const tablaQuery = async () => {
            const { data } = await axios.get("/api/logs/");
            setLogs(data);
        }
        tablaQuery();
    });

    return (
        <MainScreen title="Bitácora - Registro de Acciones">
            <Row>
                Estos son los registros de las acciones realizadas por los usuarios
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr className='bg-primary text-info'>
                            <th>Actor</th>
                            <th>Descripción de la Acción</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map(logs => (
                            <tr key={logs._id}>
                                <td>{logs.actor}</td>
                                <td>{logs.accion}</td>
                                <td>{logs.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </MainScreen>
    )
}

export default Bitacora