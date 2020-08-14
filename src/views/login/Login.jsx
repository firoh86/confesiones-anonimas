import React, { useState } from 'react';
import Auth from '../../hooks/Auth';
import './login.scss';
const Login = () => {
  const [loginForm, setLoginForm] = useState(false);
  // loginInputs
  const [
    name,
    bindName,
    email,
    bindMail,
    password,
    bindPassword,
    repassword,
    binRePassword,
  ] = Auth('');

  // Handle forms functions
  const loginHandle = (e) => {
    console.log(email, password);
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={loginHandle} className="login__form">
        {loginForm ? (
          <h1 className="header__title login-form__title">
            Registrate como usuario
          </h1>
        ) : (
          <h1 className="header__title login-form__title">
            Logeate para publicar y comentar
          </h1>
        )}
        <div className="login-form__body">
          {loginForm && (
            <div className="input-field">
              <input
                type="text"
                placeholder="Nombre"
                className="form-input"
                {...bindName}
                value={name}
              />
            </div>
          )}
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              {...bindMail}
              className="form-input"
              value={email}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-input"
              {...bindPassword}
              value={password}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Repite la Contraseña"
              className="form-input"
              {...binRePassword}
              value={repassword}
            />
          </div>
          {!loginForm ? (
            <>
              <div className="input-field">
                <input type="checkbox" />
                <label className="form-input">Mantenme logeado</label>
              </div>
              <button className="form-button button" onSubmit={loginHandle}>
                Entrar
              </button>
            </>
          ) : (
            <button className="form-button button" onSubmit={loginHandle}>
              Registrar
            </button>
          )}
        </div>
        <div className="login-form__body">
          {loginForm ? (
            <button
              className="button form-button"
              onClick={() => setLoginForm(!loginForm)}
            >
              Logeate
            </button>
          ) : (
            <>
              <button className=" button-text " title="recuperar contraseña">
                ¿Has olvidado la contraseña?
              </button>
              <button
                className="button form-button"
                onClick={() => setLoginForm(!loginForm)}
              >
                Registrate
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
