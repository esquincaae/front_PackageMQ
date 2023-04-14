import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function PackageCard({ trackingId, address, city, state, postalCode, receiver, clientEmail, status }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Order {trackingId}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{status.name}</Card.Subtitle>
        <Card.Text>
          {receiver} <br />
          {address}, {city}, {state}, {postalCode} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
