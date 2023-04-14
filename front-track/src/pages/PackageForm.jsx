import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function PackageForm() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [associatedEmail, setAssociatedEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleShipToChange = (event) => {
    setShipTo(event.target.value);
  };

  const handleAssociatedEmailChange = (event) => {
    setAssociatedEmail(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSubmit = async (event) => {
    const endpointURL = 'http://localhost:8080/api/event/order/create';
    const token = localStorage.getItem('token');
    event.preventDefault();
    // Aquí puedes enviar los valores del formulario al servidor
    const formData = {
      type: 'create_package',
      order: {
        address,
        city,
        state,
        postalCode,
        shipTo,
        associatedEmail,
        packageRequest: {
          weight,
          width,
          height,
        },
      }
    };

    const response = await fetch(endpointURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Paquete creado');
      window.location.href = '/';
    } else {
      alert('Error al crear el paquete');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4 my-5'>
      <h1>Añadir paquete</h1>

      <Form.Group controlId='formAddress'>
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type='text'
          placeholder='Ingresa la dirección'
          value={address}
          onChange={handleAddressChange}
        />
      </Form.Group>

      <Form.Group controlId='formCity'>
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type='text'
          placeholder='Ingresa la ciudad'
          value={city}
          onChange={handleCityChange}
        />
      </Form.Group>

      <Form.Group controlId='formState'>
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type='text'
          placeholder='Ingresa el estado'
          value={state}
          onChange={handleStateChange}
        />
      </Form.Group>

      <Form.Group controlId='formPostalCode'>
        <Form.Label>Código postal</Form.Label>
        <Form.Control
          type='text'
          placeholder='Ingresa el código postal'
          value={postalCode}
          onChange={handlePostalCodeChange}
        />
      </Form.Group>

      <Form.Group controlId='formShipTo'>
        <Form.Label>Enviar a</Form.Label>
        <Form.Control
          type='text'
          placeholder='Ingresa el nombre de la persona a quien se enviará el paquete'
          value={shipTo}
          onChange={handleShipToChange}
        />
      </Form.Group>

      <Form.Group controlId='formAssociatedEmail'>
        <Form.Label>Correo electrónico asociado</Form.Label>
        <Form.Control
          type='email'
          placeholder='Ingresa el correo electrónico asociado'
          value={associatedEmail}
          onChange={handleAssociatedEmailChange}
        />
      </Form.Group>

      <Form.Group controlId='formWeight'>
        <Form.Label>Peso</Form.Label>
        <Form.Control type='number' placeholder='Ingresa el peso del paquete' value={weight} onChange={handleWeightChange} />
      </Form.Group>

      <Form.Group controlId='formWidth'>
        <Form.Label>Ancho</Form.Label>
        <Form.Control
          type='number'
          placeholder='Ingresa el ancho del paquete'
          value={width}
          onChange={handleWidthChange}
        />
      </Form.Group>

      <Form.Group controlId='formHeight'>
        <Form.Label>Altura</Form.Label>
        <Form.Control
          type='number'
          placeholder='Ingresa la altura del paquete'
          value={height}
          onChange={handleHeightChange}

        />
      </Form.Group>

      <Button type='submit'>Submit</Button>
    </Form>
  );
}
