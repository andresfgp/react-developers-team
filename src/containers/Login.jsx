import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Login.css';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => { //recopilar informacion de formulario
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => { // enviar informacion formulario
    event.preventDefault();
    console.log(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            {/* eslint-disable-next-line react/button-has-type */}
            <button className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};


export default Login;