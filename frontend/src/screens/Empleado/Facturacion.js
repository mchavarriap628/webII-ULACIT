import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Col, Form, Row, Button, Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Facturacion = () => {
    const params = useParams();
    const [boton, setBoton] = useState(true);
    const perfil = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [productoNombre, setProductoNombre] = useState("");
    const [precioUnit, setPrecioUnit] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precioTotal, setPrecioTotal] = useState("");

    const [clienteNombre, setClienteNombre] = useState("");
    const [restauranteNombre, setRestauranteNombre] = useState("");

    const [facturas, setFacturas] = useState([]);

    //Optiene los reportes del restaurante para el que trabaja el empleado
    useEffect(() => {
        const tablaQuery = async () => {
            const { data } = await axios.get("/api/facturas/");
            for (var i = 0; i < data.length; i++) {
                if (perfil.restaurante !== data[i].restauranteNombre) {
                    delete data[i];
                }
            }
            setFacturas(data);
        }
        tablaQuery();
    });

    //Optiene el nombre del cliente utilizando el id y el nombre del restaurante para el que trabaja el empleado
    useEffect(() => {
        const clienteQuery = async () => {
            const { data } = await axios.get(`/api/clientes/${params.id}`);
            setClienteNombre(data.nombre);
        }
        clienteQuery();
        setRestauranteNombre(perfil.restaurante);
    }, [params.id]);


    //Calculo de total
    const calculoTotal = () => {
        console.log(restauranteNombre);
        console.log(clienteNombre);
        console.log(cantidad);
        console.log(precioUnit);
        console.log(productoNombre);
        setPrecioTotal(parseInt(cantidad) * parseInt(precioUnit));
        if (cantidad) {
            setBoton(false);
            console.log(precioTotal);
        }

    }

    //Inserción en FACTURAS
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post("/api/facturas/add",
                { clienteNombre, restauranteNombre, productoNombre, cantidad, precioUnit, precioTotal },
                config
            );
            console.log(data);
            window.location.replace("/empleado/tareas");
        } catch (error) {
        }
    }

    return (
        <MainScreen title="Facturación de producto">
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <Form.Group controlId="producto" className='mb-4'>
                            <Form.Label>Producto</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Nombre del producto a facturar"
                                value={productoNombre}
                                onChange={(e) => setProductoNombre(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="precio" className='mb-4'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control required
                                type="number"
                                placeholder="Precio"
                                value={precioUnit}
                                onChange={(e) => setPrecioUnit(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="cantidad" className='mb-4'>
                            <Form.Label>Cantidad de porciones</Form.Label>
                            <Row>
                                <Col><Button onClick={(e) => setCantidad(1)}>1</Button></Col>
                                <Col><Button onClick={(e) => setCantidad(2)}>2</Button></Col>
                                <Col><Button onClick={(e) => setCantidad(3)}>3</Button></Col>
                                <Col><Button onClick={(e) => setCantidad(4)}>4</Button></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="total" className='mb-4'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control required
                                type="number"
                                placeholder="total"
                                value={precioTotal}
                            />

                        </Form.Group>
                        <Button onClick={(e) => calculoTotal()}>Calcular</Button>

                        <Button variant="primary" className="text-success" type="submit" disabled={boton}>
                            Facturar al cliente
                        </Button>

                    </Col>

                    <Col>
                        Reporte del Restaurante - {perfil.restaurante}
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr className='bg-primary text-info'>
                                    <th>Nombre Cliente</th>
                                    <th>Producto</th>
                                    <th>Cantidad de Porciones</th>
                                    <th>Precio por porción</th>
                                    <th>Orden total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facturas.map(facturas => (
                                    <tr key={facturas._id}>
                                        <td>{facturas.clienteNombre}</td>
                                        <td>{facturas.productoNombre}</td>
                                        <td>{facturas.cantidad}</td>
                                        <td>{facturas.precioUnit}</td>
                                        <td>{facturas.precioTotal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Form>
        </MainScreen >
    )
}

export default Facturacion