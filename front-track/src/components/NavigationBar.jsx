import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Navbar bg='light' expand='lg' className='mx-4'>
      <Navbar.Brand>Mi sitio web</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='d-flex gap-2'>
        {token !== '' && (
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>
              Inicio
            </Nav.Link>
          </Nav>
        )}
        {token !== '' && (
          <Button as={Link} variant='primary' to='/package/create'>
            Añadir paquete
          </Button>
        )}
        {token === '' && (
          <Button as={Link} variant='primary' to='/login'>
            Iniciar sesión
          </Button>
        )}
        {token === '' && (
          <Button as={Link} variant='primary' to='/signup'>
            Registrarse
          </Button>
        )}
        {token !== '' && (
          <Button as={Link} variant='primary' to='/package/update'>
            Actualizar paquete
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
