import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NubeInformacion.css";

const NubeInformacion = () => {
  return (
    <Button className="boton-informacion" disabled>
      <Row className="texto-informacion">
        <Col>
          <strong>300 +</strong>
          <br />
          Alianzas
        </Col>
        <Col>
          <strong>2K +</strong>
          <br />
          Donaciones
        </Col>
        <Col>
          <strong>150K +</strong>
          <br />
          Agentes de Cambio
        </Col>
      </Row>
    </Button>
  );
};

export default NubeInformacion;
