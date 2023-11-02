import React from "react";
import Button from "react-bootstrap/Button";

const Boton = () => {
    return (
        <Button className="boton-donacion" disabled onClick={() => alert('Hola mundo')}>Haz tu aporte</Button>
        
    )

}

export default Boton


