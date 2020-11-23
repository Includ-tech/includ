import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="white" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="./">
            <img src="/logo512.png" alt="Includ" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto social-media">
              <Nav.Link href="./services">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Nav.Link>
              {/* <Nav.Link href="./contact">
                <FontAwesomeIcon icon={faFacebookF} />
              </Nav.Link>
              <Nav.Link href="./contact">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link> */}
              <Nav.Link href="./contact">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
