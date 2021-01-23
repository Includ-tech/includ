import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNode,
  faBootstrap,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import "./about.css";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const technologies = [
      {
        name: "HTML5",
        icon: "faHtml5",
      },
      {
        name: "CSS3",
        icon: "faCss3Alt",
      },
      {
        name: "JavaScript",
        icon: "faJsSquare",
      },
      {
        name: "Angular",
        icon: "faAngular",
      },
      {
        name: "ReactJs",
        icon: "faReact",
      },
      {
        name: "NodeJs",
        icon: "faNode",
      },
      {
        name: "Firebase",
        icon: "",
      },
      {
        name: "TypeScript",
        icon: "",
      },
      {
        name: "MongoDB",
        icon: "",
      },
      {
        name: "Bootstrap",
        icon: "faBootstrap",
      },
      {
        name: "Wordpress",
        icon: "faWordpress",
      },
    ];
    return (
      <section id="about" class="pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col sm="8" className="mt-5 pb-5">
              <h2 className="mb-3">ABOUT</h2>
              <p>
                Includ is a team of passionate people highly motivated to
                provide expert level Web app solutions to businesses. We are
                focussed on building high quality websites, fully responsive web
                interfaces and hybrid mobile applications. Our team has been
                working for clients in different sectors over the years. We use
                all the latest technologies to make sure we deliver an optimised
                product with high performance. Maintaining trust and
                transparency is our primary rule.
              </p>
            </Col>
            <Col sm="12" className="pb-5">
              <h5>Technologies Used</h5>

              <ul className="list-inline">
                <Row className="justify-content-center">
                  <div>
                    <li className="list-inline-item technology-icon" key={1}>
                      <FontAwesomeIcon className="icon" icon={faHtml5} />
                      <p>HTML5</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={2}>
                      <FontAwesomeIcon className="icon" icon={faCss3Alt} />
                      <p>CSS3</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={3}>
                      <FontAwesomeIcon className="icon" icon={faAngular} />
                      <p>Angular</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={4}>
                      <FontAwesomeIcon className="icon" icon={faJsSquare} />
                      <p>JavaScript</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={5}>
                      <FontAwesomeIcon className="icon" icon={faReact} />
                      <p>ReactJs</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={5}>
                      <FontAwesomeIcon className="icon" icon={faReact} />
                      <p>React Native</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={6}>
                      <FontAwesomeIcon className="icon" icon={faNode} />
                      <p>NodeJs</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={7}>
                      <FontAwesomeIcon className="icon" icon={faWordpress} />
                      <p>WordPress</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={8}>
                      <FontAwesomeIcon className="icon" icon={faBootstrap} />
                      <p>Bootstrap</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={9}>
                      <span className="icon icon-firebase"></span>
                      <p>Firebase</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={10}>
                      <span className="icon icon-mongo"></span>
                      <p>MongoDB</p>
                    </li>
                  </div>
                  <div>
                    <li className="list-inline-item technology-icon" key={11}>
                      <span className="icon icon-typescript"></span>
                      <p>TypeScript</p>
                    </li>
                  </div>
                </Row>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
