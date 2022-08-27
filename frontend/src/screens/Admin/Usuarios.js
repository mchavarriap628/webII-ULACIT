import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';
import axios from 'axios';

const Usuarios = () => {
    const contenido = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const [usuarios, setUsuarios] = useState([]);

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

    //Traer los usuarios de la DB
    const fetchUsuarios = async () => {
        const { data } = await axios.get('/api/users/');
        setUsuarios(data);
    }

    //Carga los usuarios
    useEffect(() => {
        fetchUsuarios(usuarios);
        setActor(contenido.name);
        setAccion("Eliminó un usuario");
    }, [usuarios, contenido.name]);

    const deleteHandler = async (id) => {
        registrarLog();
        if (window.confirm("¿Está seguro de eliminar el usuario seleccionado?")) {
            const config = { headers: { "Content-type": "application/json" } };
            const { data } = await axios.delete(`/api/users/${id}`, config);
            console.log(data);
            window.location.replace("/admin/usuarios");
        }
    };

    return (

        <MainScreen title='Usuarios totales'>

            <Row>
                <Col>
                    <a href='/admin/agregarUsuario'>
                        <Button variant='primary' className="rounded text-warning">
                            Agregar Usuario +
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
                            <th>Estado</th>
                            <th>Rol</th>
                            <th>Restaurante Asignado</th>
                            <th>Salario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuarios => (
                            <tr key={usuarios._id}>
                                <td>{usuarios.name}</td>
                                <td>{usuarios.email}</td>
                                <td>{usuarios.estado}</td>
                                <td>{usuarios.rol}</td>
                                <td>{usuarios.restaurante}</td>
                                <td>{usuarios.salario}</td>
                                <td>
                                    <Button href={`/admin/usuario/${usuarios._id}`}
                                        variant="primary" className='text-warning rounded'>Editar</Button>
                                    <Button variant="primary"
                                        className='mx-2  text-danger rounded'
                                        onClick={() => deleteHandler(usuarios._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>

        </MainScreen >

    )
}

export default Usuarios