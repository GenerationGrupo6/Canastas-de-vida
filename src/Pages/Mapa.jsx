import React from "react";
import Map from '../Component/assets/Santiago.png'

const Mappa = () => {

    return (
    <>
    <div className="container-px-4 text-center">
      <div className="row gx-5">
        <div className="col">
         <div className="p-3">
          <h2>Es posible hacer el cambio.
            Ya lo hemos hecho antes. </h2>
         </div>
        </div>
        <div className="col">
          <div className="p-3">
            <p className="feral">Nuestra misión es crear una red de ayuda para afrontar uno de los mayores retos de nuestra sociedad.  Nos esforzamos por construir un mundo donde cada individuo pueda gozar del derecho humano fundamental de no pasar hambre.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
           <div className="p-3">
            <img className="exit" src={Map}/>
           </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h2>Apoyo para las comunidades</h2>
              <div className="container overflow-hidden text-center">
                <div className="row gy-5">
                  <div className="col-12">
                    <div className="p-3">
                      <p className="feral">Todos nosotros podemos hacer una diferencia. A través de donaciones, podemos proporcionar apoyo vital a las comunas de Santiago. Tu generosidad puede ayudar a brindar alimentos. Cada donación, grande o pequeña, suma y tiene un impacto significativo. Con tan solo unos minutos y una donación, puedes marcar la diferencia en la vida de quienes más lo necesitan en Santiago.</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="p-3">
                      <button className="help">
                        <a href="VerMapa.jsx">Ver más </a>
                      </button>
                    </div>
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
};

export default Mappa;