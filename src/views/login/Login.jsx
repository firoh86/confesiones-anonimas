import React, { useState } from 'react';
import './login.scss';
const Landing = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const handleLoginForm = (e) => {
    e.preventDefault();
    setLoginForm(!loginForm);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPasword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login">
      <form action="login-form" className="login__form">
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
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
          )}
          <div className="input-field">
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              className="form-input"
              name="email"
              value={email}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Contraseña"
              className="form-input"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </div>
          {!loginForm ? (
            <>
              <div className="input-field">
                <input type="checkbox" />
                <label className="form-input">Mantenme logeado</label>
              </div>
              <button className="form-button button">Entrar</button>
            </>
          ) : (
            <button className="form-button button">Registrar</button>
          )}
        </div>
        <div className="login-form__body">
          <button className=" button-text " title="recuperar contraseña">
            ¿Has olvidado la contraseña?
          </button>
          {loginForm ? (
            <button className="button form-button" onClick={handleLoginForm}>
              Logeate
            </button>
          ) : (
            <button className="button form-button" onClick={handleLoginForm}>
              Registrate
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Landing;
