import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {

    /*useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) { history.push("/perfil"); }
    }, [history]);*/

    return (
        <div className='main'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='intro-text'>
                            <div className='p-3 rounded bg-light'>
                                <h2>Diseñado para nuestra familia</h2>
                                <h4>Construido para crecer</h4>
                                <p className='subtitle'>¡Como colaborador de Royal Resta, aquí podras realizar tus tareas diarias de acuerdo a tu rol!</p>
                                <p>Si tienes dudas consulta el apartado de <a href='/ayuda'>ayuda</a></p>
                                <Button className='mt-1 btn btn-outline-warning' href='/login'>inicia sesión</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home