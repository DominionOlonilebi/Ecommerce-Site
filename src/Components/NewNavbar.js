import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className='header'>
        <Navbar.Brand className='brand'>
          <h2>
            <strong>Super<span>.Mall</span></strong>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto offset-7 navs">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/prod" className='nav-link'>Products</Link>
            <Link to="/cart" className='nav-link'>Cart</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;
