import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

export default function UpdatePackageForm() {
  const [trackingId, setTrackingId] = useState('');
  const [action, setAction] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Tracking ID: ${trackingId}, Action: ${action}`);

    const url =
      action === 'start'
        ? 'http://localhost:8080/api/event/order/start'
        : 'http://localhost:8080/api/event/order/finish';

    const data = {
      type: action,
      trackingId,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert('No se pudo actualizar el paquete');
      return;
    }

    alert('Paquete actualizado');

    window.location.href = '/';
  };

  return (
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
      <Form.Group controlId='trackingId'>
        <Form.Label>ID de rastreo</Form.Label>
        <Form.Control
          type='text'
          placeholder='Escribe el ID de rastreo'
          value={trackingId}
          onChange={(event) => setTrackingId(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='action'>
        <Form.Label>Action</Form.Label>
        <Form.Check
          type='radio'
          label='Comenzar'
          name='action'
          value='start'
          checked={action === 'start'}
          onChange={(event) => setAction(event.target.value)}
        />
        <Form.Check
          type='radio'
          label='Terminar'
          name='action'
          value='end'
          checked={action === 'end'}
          onChange={(event) => setAction(event.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}
