import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top"         
      className="mb-5"     
    >
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home"className="text-white">Home</Nav.Link> 
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

export default MyNavbar;