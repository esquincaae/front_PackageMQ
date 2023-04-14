import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const authApiUrl = 'http://localhost:8080/api/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación de usuario y contraseña

    const data = {
      email,
      password,
    };

    // enviar la información al servidor y si es ok redirigir a la página de paquetes
    const response = await fetch(`${authApiUrl}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(await response.status);

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      window.location.href = '/';
      alert('Sesión iniciada');
    } else {
      alert('Error al iniciar sesión');
    }

  };

  return (
    <Form
      onSubmit={handleSubmit}
      className='d-flex flex-column justify-content-center align-items-center mt-5'
    >
      <div>
        <h1>Identificate</h1>
      </div>
      <div className='d-flex flex-column gap-4 w-50 mt-5'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ingresa tu nombre de usuario'
            value={email}
            onChange={handleUsernameChange}
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
          Iniciar sesión
        </Button>
      </div>
    </Form>
  );
}
