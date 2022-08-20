import React from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Col, Row } from 'react-bootstrap';


const Proveedores = () => {
    return (
        <MainScreen title="Proveedores">
            <Row>
                <Col>
                    formulario agregar
                </Col>
                <Col>
                    tabla ver
                </Col>
            </Row>
        </MainScreen>
    )
}

export default Proveedores