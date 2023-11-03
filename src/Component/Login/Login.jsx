import "./Login.css";
import user_icon from "../assets/email.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import React, { useState } from "react";
const Login = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [action, setAction] = useState("Iniciar Sesion");

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Unetenos!
      </button>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="container">
              <div className="header">
                <button className="close-modal" onClick={toggleModal}>
                  Cerrar
                </button>
                <div className="text">{action}</div>
                <div className="underline"></div>
              </div>
              <div className="inputs">
                {action === "Iniciar Sesion" ? (
                  <div></div>
                ) : (
                  <div className="input">
                    <img src={user_icon} alt="Ingrese Nombre" />
                    <input type="text" placeholder="Nombre" />
                  </div>
                )}
                <div className="input">
                  <img src={email_icon} alt="Ingrese Correo" />
                  <input type="email" placeholder="Correo" />
                </div>
                <div className="input">
                  <img src={password_icon} alt="Ingrese contraseña" />
                  <input type="password" placeholder="Contraseña" />
                </div>
              </div>
              {action === "Registrarse" ? (
                <div></div>
              ) : (
                <div className="forgot-password">
                  <span>He olvidado la Contraseña </span>
                </div>
              )}
              <div className="submit-container">
                <div
                  className={
                    action === "Iniciar Sesion" ? "submit gray" : "submit"
                  }
                  onClick={() => {
                    setAction("Registrarse");
                  }}
                >
                  Registrarse
                </div>
                <div
                  className={
                    action === "Registrarse" ? "submit gray" : "submit"
                  }
                  onClick={() => {
                    setAction("Iniciar Sesion");
                  }}
                >
                  Iniciar Sesion
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Login };
