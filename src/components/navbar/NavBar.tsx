import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Cart from '../cart/cart';
import { NavDrop } from '../navdropdown/NavDrop';
import Home from '../../pages/home/Home';


function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (

    <div className="NavBar-Container">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                <Home />
              </Nav.Link>

              <Nav.Link as={Link} to="/products">
                <h3>SHOP</h3>
              </Nav.Link>
            </Nav>

            <div className="NavDrop">
              <NavDrop isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </div>
            <div className="NavCart">
              <Nav.Link as={Link} to="/cart">
                <Cart />
              </Nav.Link>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  );
}

export default NavBar;