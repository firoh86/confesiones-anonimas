import React from 'react';
import './login.scss';
const Landing = () => {
  return (
    <div className="login">
      <form action="login-form">
        <h1 className="header__title login-form__title">
          Logeate para publicar y comentar
        </h1>
        <div className="login-form__body">
          <div className="input-field">
            <input type="text" placeholder="Nombre" className="form-input" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email" className="form-input" />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Contraseña"
              className="form-input"
            />
          </div>

          <button className="form-button button">Entrar</button>
        </div>
        <div className="login-form__body">
          <button className=" button-text " title="recuperar contraseña">
            ¿Has olvidado la contraseña?
          </button>
          <button className="button form-button">Registrate</button>
        </div>
      </form>
    </div>
  );
};

export default Landing;
