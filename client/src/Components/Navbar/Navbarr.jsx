import React from 'react';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';

const Navbarr = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-color" fixed="top" >
        <Container>
          <Navbar.Brand href="#home">Legacy Locator</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr
