import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { } from "react-router-dom";

const Header = () => {

  const loggedUser = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
  let currentButtonState = true;
  if (loggedUser) {
    currentButtonState = false;
  }


  return (
    <Navbar collapseOnSelect bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="text-warning" href="/">Royal Resta</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse>

          <Nav className="m-auto">
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/informacion'>Informacion</Nav.Link>
            <Nav.Link href='/ayuda'>Ayuda</Nav.Link>
          </Nav>

          <Nav>
            <Button className="btn btn-outline-warning" href='/perfil' id="perfilBtn" disabled={currentButtonState}>Perfil</Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;
