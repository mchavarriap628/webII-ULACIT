import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="text-warning">Royal Resta</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#">Información</Nav.Link>
            <Nav.Link href="#">Ayuda</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as="button" className="btn btn-outline-warning" href="#">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
