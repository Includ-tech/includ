import React, { Component } from "react";
import { Container, Row, Col, Address } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="pt-5 pb-2">
        <Container fluid>
          <Row>
            <Col sm="2">
              <img src="/logo512.png" alt="Includ" className="logo-footer" />
            </Col>
            <Col sm="8">
              <div className="mb-5">
                <a
                  className="position-relative footer-links p-2 pl-5 pr-5"
                  href="mailto:hinal@includ.in"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  hinal@includ.in
                </a>
                <a
                  className="position-relative footer-links p-2 pl-5 pr-5"
                  href="tel:9664500956"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  9664500956
                </a>
                <a
                  className="position-relative footer-links p-2 pl-5 pr-5"
                  href="tel:9773504437"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  9773504437
                </a>
              </div>
              <div className="mb-5">
                <address>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  9, Raj Rajeshwari apt., Narayan Nagar, L.B.S. marg,
                  Ghatkopar(E), Mumbai-86
                </address>
              </div>

              <p className="mb-0 copyright pt-2">©2021 by Includ.</p>
            </Col>
            <Col sm="2" className="d-flex flex-column">
                <a
                  className="position-relative footer-links p-2 pl-5 pr-5 d-flex align-items-center"
                  href="https://www.linkedin.com/company/includ"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  className="position-relative footer-links p-2 pl-5 pr-5 d-flex align-items-center"
                  href="https://www.instagram.com/includ.in/?hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  Instagram
                </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
