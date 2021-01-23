import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMobile,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";

export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="services" className="pt-5 pb-5">
        <Container className="pb-5">
          <Row className="justify-content-center">
            <Col sm="8" className="pt-5 pb-5">
              <h2 className="mb-3">SERVICES</h2>
              <p>
                Includ primarily provides Website designing and development
                services that deliver robust, scalable, and cost-effective
                website solutions within your budget. We also design and develop
                Hybrid applications. Our team can provide all types of
                web-solutions to businesses. Our company understands the
                importance of giving a personalized touch in technology
                depending on the target audience. Other services include Logo
                Designing, Website maintenance, Digital Marketing and more.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="4" className="mt-5">
              <img src="/responsive.svg" alt="" className="icon-service" />
              <h6 className="mt-2">Website Development</h6>
            </Col>
            <Col sm="4" className="mt-5">
              <img src="/settings.svg" alt="" className="icon-service" />
              <h6 className="mt-2">Web App Development</h6>
            </Col>
            <Col sm="4" className="mt-5">
              <img src="/mobile-app.svg" alt="" className="icon-service" />
              <h6 className="mt-2">Hybrid App Development</h6>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
