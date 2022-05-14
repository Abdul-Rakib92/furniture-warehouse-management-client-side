import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  }

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
              {
                user && <> 
                <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                <Nav.Link as={Link} to="manageInventories">Manage Inventory</Nav.Link>
                <Nav.Link as={Link} to="myItem">MyItems</Nav.Link>
                </>
              }
              <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
              {
                user ? 
                  <button className="btn btn-link text-decoration-none text-white" onClick={handleLogout}>Logout</button>
                :
                <Nav.Link as={Link} to="login">Login</Nav.Link>}

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
