import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
const Reportes = () => {

    const [facturas, setFacturas] = useState([]);
    const [total, setTotal] = useState(0);

    //Optiene todos los reportes todos los restaurantes
    useEffect(() => {
        const tablaQuery = async () => {
            const { data } = await axios.get("/api/facturas/");
            setFacturas(data);
            var aux = 0;
            for (var i = 0; i < data.length; i++) {
                aux = aux + data[i].precioTotal;
            }
            setTotal(aux);
        }
        tablaQuery();
    });

    return (
        <MainScreen title="Reportes de Ventas">

            <Row>
                <Col>
                    <a href='/admin/reportes/bitacora'>
                        <Button variant='primary' className="rounded text-success mb-4">
                            Bitácora - Logs
                        </Button>
                    </a>
                </Col>
            </Row>

            <Row>
                Reportes de toda la franquicia Royal Resta
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr className='bg-primary text-info'>
                            <th>Restaurante</th>
                            <th>Nombre Cliente</th>
                            <th>Producto</th>
                            <th>Cantidad de Porciones</th>
                            <th>Precio por porción</th>
                            <th>Orden total</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facturas.map(facturas => (
                            <tr key={facturas._id}>
                                <td>{facturas.restauranteNombre}</td>
                                <td>{facturas.clienteNombre}</td>
                                <td>{facturas.productoNombre}</td>
                                <td>{facturas.cantidad}</td>
                                <td>{facturas.precioUnit}</td>
                                <td>{facturas.precioTotal}</td>
                                <td>{facturas.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>

                    <h3 className='mt-3 p-2 bg-primary text-warning'>Total de Caja: ₡{total}</h3>

                </Table>
            </Row>
        </MainScreen>
    )
}

export default Reportes