import React from "react";
import Bootstrap from "bootstrap";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Brightlystake</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Validator Nodes</Nav.Link> */}
              <Nav.Link href="#" className="contact-btn">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
