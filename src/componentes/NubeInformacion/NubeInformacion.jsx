import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NubeInformacion = () => {
  return (
    <Button className="boton-informacion" disabled>
      <Row className="linea-boton">
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
