import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "./contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="contact" className="pb-5">
        <Container fluid className="pt-5 pb-5">
          <Row>
            <Col sm="12" className="pt-5 pb-5">
              <h1>Contact Us</h1>
            </Col>
          </Row>
          <Row className="d-flex h-100">
            <Col sm="7" className="align-self-center">
              <img src="/contact.png" alt="Contact us" />
            </Col>
            <Col sm="4" className="text-left">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Name<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Doe"
                    maxLength="50"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>
                    Email address<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                  <Form.Label>Mobile no</Form.Label>
                  <Form.Control
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                  <Form.Label>
                    Subject<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Need a website for my company"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button
                  variant="secondary"
                  type="submit"
                  className="pl-5 pr-5 pt-3 pb-3"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
