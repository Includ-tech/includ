import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container fluid>
        <Row className="pb-5">
          <Col sm="4" className="text-left pt-5">
            <Nav className="flex-column">
              <Navbar.Brand className="d-flex align-items-center" href="./">
                <img
                  src={`/brand.png`}
                  className="App-logo"
                  alt="Wrkspot logo"
                  width="60"
                  height="60"
                />
              </Navbar.Brand>
              <Navbar.Text>
                <h className="text-footer pr-sm-5">
                  {" "}
                  Premier development hub for planning, building, support and
                  enhancement of top-notch web applications.
                </h>
              </Navbar.Text>
              {/* <Nav className="flex-row">
                <Nav.Link href="https://www.facebook.com/wrkspotcorp/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/company/wrkspot/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/wrkspot/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Nav.Link>
                <Nav.Link href="https://twitter.com/Wrkspot">
                  <FontAwesomeIcon icon={faTwitter} />
                </Nav.Link>
                <Nav.Link href="https://in.pinterest.com/Wrkspot/_created/">
                  <FontAwesomeIcon icon={faPinterest} />
                </Nav.Link>
                <Nav.Link href="https://www.youtube.com/channel/UCDjSoJFL6SZ7NDlREQ8KcVA/">
                  <FontAwesomeIcon icon={faYoutube} />
                </Nav.Link>
                <Nav.Link href="https://www.tiktok.com/@wrkspot">
                  <FontAwesomeIcon icon={faTiktok} />
                </Nav.Link>
                <Nav.Link href="https://play.google.com/store/apps/details?id=com.wrkspot.employee.prod">
                  <FontAwesomeIcon icon={faGooglePlay} />
                </Nav.Link>
              </Nav> */}
            </Nav>
          </Col>
          <Col sm="3" xs={6} className="text-left pt-5">
            <Nav className="flex-column">
              <Navbar.Text>
                <h6 className="text-white">COMPANY</h6>
              </Navbar.Text>
              {/* <Nav.Link href="./" className="footer-link-style middle">
                Blog
              </Nav.Link> */}
              <Nav.Link href="./about" className="footer-link-style middle">
                About
              </Nav.Link>
              <div className="d-flex">
                <Nav.Link
                  href="https://www.linkedin.com/company/includ"
                  className="footer-link-style middle"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/includ.in/"
                  className="footer-link-style middle"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Nav.Link>
              </div>
              {/* <Nav.Link href="./" className="footer-link-style middle">
                Careers
              </Nav.Link> */}
              <Navbar.Text>
                <h6 className="mt-4 text-white">ADDRESS</h6>
              </Navbar.Text>
              <Navbar.Text>
                <address className="text-footer">
                  9, Raj Rajeshwari apt., Narayan Nagar, L.B.S. marg,
                  Ghatkopar(W), Mumbai-86
                </address>
              </Navbar.Text>
            </Nav>
          </Col>

          <Col sm="2" xs={6} className="text-left pt-5">
            <Nav className="flex-column">
              <Navbar.Text>
                <h6 className="text-white">SHOWCASE</h6>
              </Navbar.Text>
              <Nav.Link href="./services" className="footer-link-style middle">
                Services
              </Nav.Link>
              <Nav.Link href="./portfolio" className="footer-link-style middle">
                Portfolio
              </Nav.Link>
            </Nav>
          </Col>

          <Col sm="3" xs={6} className="text-left pt-5">
            <Nav className="flex-column">
              <Navbar.Text>
                <h6 className="text-white">CONTACT</h6>
              </Navbar.Text>
              <Nav.Link href="./" className="footer-link-style middle">
                hinal@includ.in
              </Nav.Link>

              <Nav.Link
                href="tel:9664500956"
                className="footer-link-style middle"
              >
                +919664500956
              </Nav.Link>
              <Nav.Link
                href="tel:9773504437"
                className="footer-link-style middle"
              >
                +919773504437
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
