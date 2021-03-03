import Head from "next/head";
import React, { useState } from "react";
import Banner from "../components/Banner";
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/about.module.scss";
import PreFooter from "../components/PreFooter";
import Recognitions from "../components/Recognitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const { heroBanner, banner, para, technology } = styles;

  const technologiesUsed = [
    {
      label: "HTML5",
      iconUrl: "html5.svg",
    },
    {
      label: "CSS3",
      iconUrl: "css3.svg",
    },
    {
      label: "Angular",
      iconUrl: "angular.svg",
    },
    {
      label: "JavaScript",
      iconUrl: "javascript.svg",
    },
    {
      label: "ReactJs",
      iconUrl: "reactjs.svg",
    },
    {
      label: "NodeJs",
      iconUrl: "nodejs.svg",
    },
    {
      label: "WordPress",
      iconUrl: "wordpress.svg",
    },
    {
      label: "Bootstrap",
      iconUrl: "bootstrap.svg",
    },
    {
      label: "Firebase",
      iconUrl: "firebase-icon.svg",
    },
    {
      label: "MongoDB",
      iconUrl: "mongodb-icon.svg",
    },
    {
      label: "TypeScript",
      iconUrl: "typescriptlang-icon.svg",
    },
    {
      label: "React Native",
      iconUrl: "reactjs.svg",
    },
    {
      label: "Sass",
      iconUrl: "sass-brands.svg",
    },
    {
      label: "NativeScript",
      iconUrl: "nativescript.svg",
    },
  ];

  return (
    <div>
      <Head>
        <title>About - Includ</title>
        <meta
          name="description"
          content="Providing website development, web app development, hybrid app development and web designing services"
        />
        <meta
          name="keywords"
          content="Includ, website, web, website development, web development, app development, hybrid app development, mobile app development, web designing, web developer"
        />
        <meta name="author" content="Includ" />
      </Head>
      <Container fluid className={banner}>
        <Banner
          heading="ABOUT"
          subHeading="Includ is a web development hub for
        planning, building, support and enhancement
        of top-notch web applications."
        />
        <Row>
          <Col className="text-center">
            <img src="assets/images/about-1.svg" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="text-align-center justify-content-center">
          <div className={para}>
            <p>
              Launched back in 2020, Includ is a world-class full-app-lifecycle
              software development company, focusing on building web apps,
              covering all the segments of a successful product launch and
              maintenance - ideation, prototyping and design, project
              management, development, QA testing, and support. We work under
              Agile principles and give each customer's product the same care
              and love that we give to our own products.
            </p>
            <p>
              Today we offer application development services to companies that
              need to scale up their development capabilities while keeping
              quality, improving productivity, and optimizing costs.
            </p>
          </div>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col className="text-center  ">
            <h3>Management Team</h3>
          </Col>
        </Row>
        <Row>
          <Col
            sm={{ span: "4", offset: "2" }}
            className="pt-5 d-flex flex-column justify-content-between"
            style={{ paddingBottom: "6rem" }}
          >
            <img width="100%" src="/assets/images/hinal.png" />
            <h5 className="pt-4">Hinal Shah</h5>
            <h5 className="mb-0" style={{ fontWeight: "300", lineHeight: "1" }}>
              Founder
            </h5>
            <h5 style={{ fontWeight: "300", marginBottom: "0" }}>
              <small>BE-IT</small>
            </h5>
            <a href="https://www.linkedin.com/in/shah-hinal/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
          <Col
            sm={4}
            className="pt-5 d-flex flex-column justify-content-between"
            style={{ paddingBottom: "6rem" }}
          >
            <img width="100%" src="/assets/images/dipesh.png" />
            <h5 className="pt-4">Dipesh Thakkar</h5>
            <h5 className="mb-0" style={{ fontWeight: "300", lineHeight: "1" }}>
              Co-founder
            </h5>
            <h5 style={{ fontWeight: "300", marginBottom: "0"  }}>
              <small>MBA - Marketing</small>
            </h5>
            <a href="https://www.linkedin.com/in/thakkar-dipesh/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
        </Row>
      </Container>
      {/* <Recognitions /> */}
      <Container
        fluid
        className={"d-flex flex-column align-items-center " + technology}
      >
        <div className="d-flex flex-column align-items-center text-center">
          <h3>Technologies we use</h3>
          <p>
            We develop web applications using up-to-date technology stack, which
            includes: HTML, CSS, JavaScript, TypeScript, Angular, Angular
            Universal, Node.js, React, NextJs, Vue, WordPress, Shopify, Wix and
            other tools - we keep learning and evolving together with the
            industry, adding new tools to our toolbox whenever we can.
          </p>
        </div>

        <Row>
          {technologiesUsed.map((item) => {
            return (
              <Col
                key={item.label}
                xs={4}
                sm={3}
                md={2}
                className="d-flex flex-column align-items-center text-center justify-content-around
              "
                style={{ height: "10rem" }}
              >
                <Row>
                  <Col className="pt-5">
                    <img
                      className="pb-2"
                      src={"/assets/images/icons/" + item.iconUrl}
                      width="50%"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>{item.label}</h6>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      <PreFooter />
    </div>
  );
}
