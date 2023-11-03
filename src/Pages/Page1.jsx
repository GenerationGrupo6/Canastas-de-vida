import React from "react";
import "./App.css";
import "./hojas-de-estilo/Boton.css";
import Boton from "./componentes/Boton/Boton.jsx";
import fondoPagina1 from "./imagenes/fondoPagina1.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NubeInformacion from "./componentes/NubeInformacion/NubeInformacion";
import "./hojas-de-estilo/NubeInformacion.css";

export default function App() {
    return (
        <div>
            <Navbar className="Navbar" expand="lg">
                Navbar Felipe
            </Navbar>
            <Container
                fluid
                style={{ backgroundImage: `url(${fondoPagina1})` }}
                className="fondoPagina1"
            >
                <Row className="FilaPrincipal">
                    <Col></Col>
                    <Col className="textoPrincipal">
                        <h1>
                            JUNTOS
                            <br />
                            ALIMENTAMOS EL
                            <br />
                            CAMBIO
                        </h1>
                        <p>
                            <small>La solidad es nuesta mejor arma contra el hambre</small>
                        </p>
                        <Boton />
                    </Col>
                </Row>
                <Row className="nubeInformacion">
                    <NubeInformacion />
                </Row>
            </Container>
            <Container className="Espacio" />
            <Container className="Footer"></Container>
        </div>
    );
}