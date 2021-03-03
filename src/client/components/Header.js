import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header>
        <Container fluid style={{ marginTop: "20px" }}>
          <Navbar collapseOnSelect expand="lg">
            <Link href="/" passHref>
              <Navbar.Brand className="d-flex align-items-center">
                <img
                  src={`/brand.png`}
                  className="App-logo"
                  width="60"
                  height="60"
                  alt="Includ"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto ">
                {/* <Link href="/services" passHref>
                  <Nav.Link
                    className="mr-5 middle"
                    onMouseEnter={() => setIsOpen(true)}
                  >
                    Services
                  </Nav.Link>
                </Link> */}
                <Link href="/services" className={router.pathname == "/services" ? "active" : ""} passHref>
                  <Nav.Link className="mr-5 middle">Services</Nav.Link>
                </Link>
                <Link href="/portfolio" className={router.pathname == "/portfolio" ? "active" : ""} passHref>
                  <Nav.Link className="mr-5 middle">Portfolio</Nav.Link>
                </Link>
                <Link href="/about" className={router.pathname == "/about" ? "active" : ""} passHref>
                  <Nav.Link className="mr-5 middle">About</Nav.Link>
                </Link>
                {/* <Link href="/blogs" passHref>
                  <Nav.Link className="mr-5 middle">Blog</Nav.Link>
                </Link> */}
                <Link href="/contact " className={router.pathname == "/contact" ? "active" : ""} passHref>
                  <Nav.Link className="mr-5 middle ">Contact</Nav.Link>
                </Link>
              </Nav>
              <NavDropdown.Divider />
            </Navbar.Collapse>
          </Navbar>

          <Row>
            <Col
              md={{ span: 5, offset: 2 }}
              className="servicesOptions"
              style={{ position: "absolute", zIndex: "1" }}
            >
              {isOpen && (
                <Card onMouseLeave={() => setIsOpen(false)}>
                  <Row>
                    <Col sm={6} className="pr-0 ">
                      <Nav.Link className="header-link-style middle">
                        {" "}
                        Website Development{" "}
                      </Nav.Link>
                    </Col>
                    <Col sm={6} className="pl-0">
                      <Nav.Link className="header-link-style middle">
                        {" "}
                        Web Application Development{" "}
                      </Nav.Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className="pr-0">
                      <Nav.Link className="header-link-style middle">
                        {" "}
                        Hybrid App Development{" "}
                      </Nav.Link>
                    </Col>
                    <Col sm={6} className="pl-0">
                      <Nav.Link className="header-link-style middle">
                        {" "}
                        Website maintenance and support{" "}
                      </Nav.Link>
                    </Col>
                  </Row>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;
