import { useState } from 'react';

const Auth = () => {
  // campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  // actualizacion de los campos
  const bindName = {
    name,
    onChange: (e) => {
      setName(e.target.value);
    },
  };
  const bindMail = {
    email,
    onChange: (e) => {
      setEmail(e.target.value);
    },
  };
  const bindPassword = {
    password,
    onChange: (e) => {
      setPassword(e.target.value);
    },
  };
  const binRePassword = {
    repassword,
    onChange: (e) => {
      setRePassword(e.target.value);
    },
  };

  return [
    name,
    bindName,
    email,
    bindMail,
    password,
    bindPassword,
    repassword,
    binRePassword,
  ];
};

export default Auth;
