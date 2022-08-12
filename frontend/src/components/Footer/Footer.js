import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return <footer
  className="bg-primary"
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-2">Copyright &copy; ULACIT | 2C2022 160361G1 DISEÑO WEB II</Col>
        </Row>
      </Container>
    </footer>
};

export default Footer;
