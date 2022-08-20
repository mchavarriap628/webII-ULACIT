import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const Tareas = () => {

    //Valores para el Query a FACTURA
    const [facProducto, setFacProducto] = useState("");
    const [precioUnit, setPrecioUnit] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);


    //Obtiene Clientes
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        const clientesSelect = async () => {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.get("/api/clientes/", config);
            setClientes(data);
        }
        clientesSelect();
    });

    //Obtiene Productos
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const productosSelect = async () => {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.get("/api/productos/", config);
            setProductos(data);
        }
        productosSelect();
    });

    //Submit producto a factura
    const submitProducto = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post("/api/factura",
                { facProducto, precioUnit, cantidad, precioTotal }, config);

        } catch (error) {

        }
    }


    return (
        <MainScreen title="clientes y facturacion">
            <Row>
                <Col>
                    <a href='/empleado/cliente' className='mb-5'>
                        <Button variant='primary' className="rounded text-warning">
                            Agregar Cliente +
                        </Button>
                    </a>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Fecha de creación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(clientes => (
                            <tr key={clientes._id}>
                                <td>{clientes.nombre}</td>
                                <td>{clientes.email}</td>
                                <td>{clientes.tel}</td>
                                <td>{clientes.createdAt}</td>
                                <td>
                                    <Button href={`/empleado/facturacion/${clientes._id}`}
                                        variant="primary" className='text-info rounded'>Facturar</Button>
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