import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const authApiUrl = 'http://localhost:8080/api/auth/register';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };


    const response = await fetch(authApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // enviar la información al servidor y si es ok redirigir a la página de paquetes
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      window.location.href = '/';
      alert('Usuario creado');
    } else {
      alert('Error al crear usuario');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className='d-flex flex-column justify-content-center align-items-center mt-5'
    >
      <div>
        <h1>Registrate</h1>
      </div>
      <div className='d-flex flex-column gap-4 w-50 mt-5'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingresa tu correo electrónico'
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Registrarse
        </Button>
      </div>
    </Form>
  );
}
