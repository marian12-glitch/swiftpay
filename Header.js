import React from 'react';
import Container from 'react-bootstrap/Container';
import image from "../images/Swiftpay_bg.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{
    return(
        <>
        <div style={{ backgroundImage:`url(${image})`, backgrounSize: 'cover'}}>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SwiftTranferPay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
     
        </>
    );
}

export default Header;