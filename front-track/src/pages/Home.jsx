import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import PackageCard from '../components/PackageCard';

const orderApiURL = 'http://localhost:3000/api/order';

export default function Home() {
  const [trackingId, setTrackingId] = useState('');
  const [packageFound, setPackageFound] = useState(false);
  const [order, setOrder] = useState({
    trackingId: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    shipTo: '',
    associatedEmail: '',
    packageRequest: {
      width: 0,
      height: 0,
      length: 0,
    }
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const handleTrackingIdChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(`${orderApiURL}/${trackingId}`);

    if (!response.ok) {
      alert('No se encontró el paquete');
      return;
    }

    const order = await response.json();

    setOrder({
      trackingId: order.trackingId,
      address: order.address,
      city: order.city,
      state: order.state,
      postalCode: order.postalCode,
      receiver: order.receiver,
      clientEmail: order.clientEmail,
      status: order.status,
    });


    setPackageFound(true);
  };

  const renderCard = () => {
    return (
      <PackageCard
        key={order.trackingId}
        trackingId={order.trackingId}
        address={order.address}
        city={order.city}
        state={order.state}
        postalCode={order.postalCode}
        receiver={order.receiver}
        clientEmail={order.clientEmail}
        status={order.status}
      />
    );
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='w-50 d-flex flex-column gap-4'>
        <h2 className='text-center mb-4'>Buscar un paquete</h2>

        <Form onSubmit={handleSearch}>
          <Form.Group controlId='formBasicTrackingId'>
            <Form.Label>ID de rastreo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa el ID de rastreo'
              value={trackingId}
              onChange={handleTrackingIdChange}
            />
          </Form.Group>

          <br />

          <Button variant='primary' type='submit'>
            Buscar
          </Button>
        </Form>
        {packageFound && renderCard()}
      </div>
    </div>
  );
}
