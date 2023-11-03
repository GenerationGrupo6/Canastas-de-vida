import imagenCentral from "../assets/CanastaBasica1.jpg";
import "./ContenedorP3.css";

const ContenedorP3 = () => {
    return (
        <div className="contenedorPadre">
            <div className="contenedor-Beige">
                <div className="contenedor-Contenido">
                    <h2 className="destacado">Conoce nuestras historias</h2>
                    <p id="parrafo">
                    Nuestra misión es crear una red de ayuda para afrontar uno de los
                    mayores retos de nuestra sociedad. Nos esforzamos por construir un
                    mundo donde cada individuo pueda gozar del derecho humano
                    fundamental de no pasar hambre.
                    </p>
                    <button className="vermashistorias">Ver más historias</button>
                </div>
                <img src={imagenCentral} alt="imagenPag2" id="imagenPag2" />
            </div>
           </div>
    )
}
export default ContenedorP3