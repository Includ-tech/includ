import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-container mb-5">
        <Container fluid>
          <Row>
            <Col sm="5" className="pl-sm-5 pt-5 pb-5 text-left">
              {/* <h1 className="main-heading">
                DESIGN
                <br />
                DEVELOP
                <br />
                DELIVER
              </h1> */}
              <div className="">
                <h1 className="main-heading mt-5 pt-5">
                  Providing Web Designing &amp; Web Development Services
                </h1>
                <a
                  href="#contact"
                  className="mt-3 btn btn-secondary pl-5 pr-5 pt-3 pb-3"
                >
                  Contact Us
                </a>
              </div>
            </Col>
            <Col sm="7" className="pt-5 pb-5 text-left">
              <img src="/web-development.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
