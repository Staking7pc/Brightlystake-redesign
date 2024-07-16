import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Brightlystake</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#link">Validator Nodes</Nav.Link> */}
              <Nav.Link href="https://calendly.com/contact_brightlystake" className="contact-btn" target="_blank" rel="noopener noreferrer">
                Calendy
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
