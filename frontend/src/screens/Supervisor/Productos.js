import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Col, Form, Row, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const Productos = () => {

    const perfil = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [prodNombre, setProdNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");

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
        }
    }


    //Obtiene productos de la base de datos
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        const tablaQuery = async () => {
            const { data } = await axios.get("/api/productos/");
            setProductos(data);
        }
        tablaQuery();
        setActor(perfil.name);
        setAccion("Agregó un item al inventario:: " + prodNombre);
    }, [perfil.name, prodNombre]);

    //Submit 
    const submitHandler = async (e) => {
        e.preventDefault();
        registrarLog();
        try {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.post("/api/productos/add",
                { prodNombre, categoria, precio }, config);
            console.log(data);
            window.location.replace("/supervisor/productos");
        } catch (error) {
        }

    }

    return (
        <MainScreen title="Inventario de Royal Resta" >
            <Row>
                <Col>
                    Formulario para Añadir Productos

                    <Form className='mt-5' onSubmit={submitHandler}>
                        <Form.Group controlId="producto" className='mb-4'>
                            <Form.Label>Nombre del Producto</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Ingrese el nombre del producto"
                                value={prodNombre}
                                onChange={(e) => setProdNombre(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="categoria" className='mb-4'>
                            <Form.Label>Categoría del Producto</Form.Label>
                            <Form.Control required
                                type="text"
                                placeholder="Categoría del producto"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="precio" className='mb-4'>
                            <Form.Label>Precio del Producto</Form.Label>
                            <Form.Control required
                                type="number"
                                placeholder="Precio del producto"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" className="text-warning" type="submit">
                            Agregar al Inventario
                        </Button>
                    </Form>
                </Col>

                <Col>
                    Reporte de Inventario - {perfil.restaurante}
                    <Table striped bordered hover size="sm" className='mt-3'>
                        <thead>
                            <tr className='bg-primary text-warning'>
                                <th>Item</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Productos.map(Productos => (
                                <tr key={Productos._id}>
                                    <td>{Productos.prodNombre}</td>
                                    <td>{Productos.categoria}</td>
                                    <td>{Productos.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </MainScreen >
    )
}

export default Productos