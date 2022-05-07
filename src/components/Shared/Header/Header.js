import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><span className="web-name">Ahammed</span> <small>Furniture Warehouse</small></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
              <Nav.Link as={Link} to="login">Login</Nav.Link>

            </Nav>

            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
