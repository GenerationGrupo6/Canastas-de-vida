import React from 'react'
import Banner from '../Component/assets/Banner1.jpg'


const Suscribirse = () => {

    return (
        <>
        <img className="baner" src={Banner}/>
        <div className="container px-4 text-center">
          <div className="row gx-5">
            <div className="col-6">
             <div className="p-3">
              <h2>Contactanos para conocer nuestro compromiso al cambio.</h2>
             </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <p className="feral">Regístrate para seguir nuestras alertas y ayuda a la comunidad. 
                    Conoce nuestros convenios y organizaciones aliadas.</p>
                <div className="container overflow-hidden text-center">
                  <div className="row gx-5">
                    <div className="col">
                     <div className="p-3">
                      <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="correo@example.com"/>
                      </div>
                     </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <button className="help">Suscribirse</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Suscribirse; 