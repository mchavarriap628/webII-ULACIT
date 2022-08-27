import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen/MainScreen';

const Reportes = () => {
    const perfil = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
    const [facturas, setFacturas] = useState([]);
    const [total, setTotal] = useState(0);

    //Optiene todos los reportes todos los restaurantes
    useEffect(() => {
        const tablaQuery = async () => {
            var aux = 0;
            const { data } = await axios.get("/api/facturas/");
            for (var i = 0; i < data.length; i++) {
                if (perfil.restaurante !== data[i].restauranteNombre) {
                    delete data[i];
                } else {
                    aux = aux + data[i].precioTotal;
                }

            }
            setFacturas(data);
            setTotal(aux);
        }
        tablaQuery();
    });


    return (
        <MainScreen title="Reportes de Ventas">
            <Row>
                Reportes de la sucursal - {perfil.restaurante}
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
                </Table>

                <h3 className='mt-3 p-2 bg-primary text-warning'>Total de Caja: ₡{total}</h3>

            </Row>
        </MainScreen>
    )
}

export default Reportes