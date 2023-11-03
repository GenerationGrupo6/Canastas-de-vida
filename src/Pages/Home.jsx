import './Home.css'
import Boton from "../componentes/Boton/Boton";
import fondoPagina1 from "../imagenes/fondoPagina1.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import NubeInformacion from "../componentes/NubeInformacion/NubeInformacion";


export default function App() {
    return (
        <div className='Fondo1'>
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
            
        </div>
    );
}