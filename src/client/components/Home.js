import React, { useState } from "react";
import Link from "next/link";
import TypingAnimation from "./TypingAnimation";
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/home.module.scss";
import PreFooter from "./PreFooter";
import Recognitions from "./Recognitions";

const processArray = [
  {
    label: "ideation",
    title: "Ideation",
    content:
      "Any web application starts with an idea, a solution to a problem, or an automation tool for some industry. We can assist companies in this step, as our experience with different projects allows us to see whether something is feasible, and how to implement it better.",
  },
  {
    label: "research",
    title: "Research",
    content:
      "Each project needs a detailed analysis before being handed over to development. We work together with the project stakeholders to prepare a detailed competition analysis, to identify short-term and long-term business goals, to prepare a list of features, and split these to planned releases; research phase results in an initial list of development milestones, and a rollout plan with preliminary timeline estimations.",
  },
  {
    label: "sprint_phases",
    title: "Sprint Phases",
    content:
      "Development is divided into 2-4-week sprints, and at the end of each sprint, a potentially shippable product is delivered. Each sprint includes design, development, testing, and release of a number of features, this way we incrementally add planned functionalities to the product.",
  },
  {
    label: "support",
    title: "Support",
    content:
      "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers.",
  },
];

const Home = React.memo(() => {
  const [processLabel, setProcessLabel] = useState("ideation");
  const [preFooterHovered, setPreFooterHovered] = useState("");
  const [prefooterLeave, setPrefooterLeave] = useState("");

  let processContent = processArray.filter((el) => el.label == processLabel);
  console.log(preFooterHovered);

  return (
    <div className={styles.home}>
      <Container fluid className={styles.HeroBanner}>
        <Row className="pb-5 align-items-center">
          <Col xs="12" className="pb-sm-5">
            <h1 className=" dark-black">
              We build great websites &amp; web apps with
            </h1>
            <h1 className="dark-black">
              <span>
                <TypingAnimation />
              </span>
            </h1>
            <h4 className={`hero-sub-heading ${styles.subHeading}`}>
              Providing top-notch digital solutions with a focus on your online
              business profitability.
            </h4>
          </Col>
          <Col xs="12" className="pb-5 d-sm-none">
            <div className={styles.hero}>
              <img src="/assets/images/hero-banner.svg" width="100%" />
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <div
        className="bg-dark mb-5"
        style={{ paddingTop: "50px", paddingBottom: "80px" }}
      >
        <Container fluid className={`${styles.techSolutions} `}>
          <Row className="justify-content-center">
            <Col sm="10" className="text-center">
              <h
                className="small-heading text-center"
                style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
              >
                ABOUT US
              </h>
              <h className="large-sub-heading" style={{ marginTop: "30px" }}>
                Includ is a team of passionate people highly motivated to
                provide expert level Web app solutions to businesses. We are
                focused on building high quality websites, fully responsive web
                interfaces, hybrid mobile applications and providing website
                design services. We use latest technologies to deliver an
                optimised product with high performance.{" "}
              </h>
              <h className="large-sub-heading" style={{ marginTop: "10px" }}>
                We have worked with various clients in different sectors. We
                also provide website maintenance and support services thereby
                maintaining a long lasting relationship with the client.
              </h>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row className="align-items-center">
          <Col
            md={{ span: 5, offset: 1 }}
            className="pt-5 pb-sm-5 d-none d-sm-block"
          >
            <h3>Web Development</h3>
            <p>
              We provide website development and web app development services
              including ecommerce websites.
            </p>
            <a href>
              <span className="is-link">Learn more</span>
            </a>
          </Col>
          <Col sm="6" className="pt-5 pb-sm-5">
            <img src="/assets/images/website-development.svg" width="100%" />
          </Col>
          <Col sm="6" className="pt-5 pb-5 d-sm-none">
            <h3>Web Development</h3>
            <p>
              We provide website development and web app development services
              including ecommerce websites.
            </p>
            <Link href={"./services"}>
              <span className="is-link">Learn more</span>
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col sm="6" className="pt-5 pb-sm-5">
            <img src="/assets/images/hybrid-app-development.svg" width="100%" />
          </Col>
          <Col sm="5" className="pt-5 pb-5 text-sm-right">
            <h3>Hybrid App Development</h3>
            <p>We provide hybrid app development services to businesses.</p>
            <Link href={"./services"}>
              <span className="is-link">Learn more</span>
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            sm={{ span: 5, offset: 1 }}
            className="pt-5 pb-5 d-none d-sm-block"
          >
            <h3>Web Designing</h3>
            <p>We provide website designing services to clients.</p>
            <Link href={"./services"}>
              <span className="is-link">Learn more</span>
            </Link>
          </Col>
          <Col sm="6" className="pt-5 pb-sm-5">
            <img src="/assets/images/website-designing.svg" width="100%" />
          </Col>
          <Col sm="6" className="pt-5 pb-5 d-sm-none">
            <h3>Web Designing</h3>
            <p>We provide website designing services to clients.</p>
            <Link href={"./services"}>
              <span className="is-link">Learn more</span>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        {/* <Row>
            <Col sm={12} className=" d-flex justify-content-center">
              <h3 className=" text-center" style={{ maxWidth: "900px" }}>
                Check out software products we made using ReactJS, Vue.js,
                Symfony, PHP, and other technologies.
              </h3>
            </Col>
          </Row> */}
      </Container>

      <Container sm="fluid">
        <Row style={{ paddingTop: "60px", paddingBottom: "2rem" }}>
          <Col className="d-flex justify-content-between align-items-center">
            <h3 className="m-0">Recent Projects</h3>
            <Link href={"./portfolio"}>
              <span className="is-link">View More</span>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="pb-5">
            <div className={styles.container}>
              <img
                className={`${styles.image}`}
                src="/assets/images/home-banner2.png"
                alt="Avatar"
                width="100%"
              />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h2>WrkSpot</h2>
                  <h4 style={{ paddingBottom: "2rem", paddingTop: "1rem" }}>
                    Hotel Management Software | Hotel Employee Management
                  </h4>
                </div>
              </div>
              <div className={styles.viewProject}>
                <Link href={"/portfolio/wrkspot"}>
                  <h style={{ display: "inline" }}>
                    View Project{" "}
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="white"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </h>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={6} className="pb-5">
            <div className={styles.container}>
              <img
                className={`${styles.image}`}
                src="/assets/images/home-banner2.png"
                alt="Avatar"
                width="100%"
              />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <h2>igrenEnergi</h2>
                  <h4 style={{ paddingBottom: "2rem", paddingTop: "1rem" }}>
                    Battery Management System | Intelligent and Patented
                  </h4>
                </div>
              </div>
              <div className={styles.viewProject}>
                <Link href={"/portfolio/igrenenergi"}>
                  <h style={{ display: "inline" }}>
                    View Project{" "}
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="white"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </h>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row style={{ paddingTop: "60px", paddingBottom: "40px" }}>
          <Col className="text-center">
            <h3>Ready to Catch up on Your Application Development?</h3>
            <Link href={"/contact"}>
              <span className="d-inline-block linkButton">
                Lets start a project together
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* <Recognitions /> */}
      <Container fluid className="pt-5">
        {/* <Row>
          <Col md={3} className={"border-right text-left "}>
            <h3 style={{ paddingBottom: "0.7rem" }}>Ways to work with us?</h3>
            <span className={"is-link " + styles.waysLink}>Learn More</span>
          </Col>
          <Col>
            <p className={"text-left " + styles.waysCol}>
              We at TMS act as an integral part of your organization, focusing
              on product functionality, end-user adoption, proactive and
              creative thinking in order to support your overall business goals.
            </p>
            <p className="text-left">
              We can help with product development only, but we shine when
              applying our full-app-lifecycle approach.
            </p>
          </Col>
        </Row> */}
        <Row>
          <Col className="text-center">
            <div id="animationLine">
              <h3>Our Process</h3>
              <svg
                viewBox="70 100 700 300"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g id="background" transform="translate(200.000000, 80.000000)">
                  <path
                    fill="none"
                    stroke="#d7e3e4"
                    strokeDasharray="5"
                    strokeWidth="2"
                    d="M5,145.6034H455"
                    id="path"
                  ></path>
                  {/* <!-- blue dot --> */}
                  <circle id="pulse" r="6" fill="#d7e3e4" opacity="1">
                    <animateMotion
                      id="op"
                      dur="0.6s"
                      begin="indefinite"
                      repeatCount="1"
                    >
                      <mpath
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#path"
                      ></mpath>
                    </animateMotion>
                    <animate
                      id="blue-dot-dissapear"
                      attributeType="XML"
                      attributeName="r"
                      from="0"
                      to="0"
                      dur="0.1s"
                      fill="freeze"
                      begin="op.end+0s"
                    ></animate>
                  </circle>
                  {/* <!-- first circle --> */}
                  <circle
                    onMouseEnter={() => setProcessLabel("ideation")}
                    id="circle1_hover_surface"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="100"
                    cx="0"
                    cy="145"
                    r="80"
                    opacity="0"
                  ></circle>
                  <circle
                    id="circle1_medium"
                    fill="none"
                    stroke="#6C63FF"
                    strokeWidth="1"
                    cx="0"
                    cy="145"
                    r="14"
                    opacity="1"
                  >
                    {/* <animate id="first-medium" attributeType="XML" attributeName="opacity" from="0" to="1" dur="0.7s" fill="freeze"  begin="op.begin+0.28s"></animate> */}
                  </circle>
                  <circle
                    id="circle1"
                    className="ProcessCircle"
                    fill="#6C63FF"
                    cx="0"
                    cy="145"
                    r="5"
                    opacity="1"
                  >
                    {/* <animate id="first" attributeType="XML" attributeName="r" from="0" to="5" dur="0.01s" fill="freeze" begin="op.begin+0s"></animate> */}
                  </circle>

                  <text
                    id="ideation"
                    className="ProcessText is-visible@s"
                    x="-50"
                    y="250px"
                    fill={`${processLabel == "ideation" ? "#6C63FF" : "#000"}`}
                  >
                    Ideation
                    {/* <animate id="ideation-anim" attributeType="XML" attributeName="y" from="350" to="250" dur="0.25s" fill="freeze" begin="op.begin+0.2s"></animate>
                                <animate id="ideation-anim-opacity" attributeType="XML" attributeName="opacity" from="0" to="0.6" dur="0.6s" fill="freeze" begin="op.begin+0.2s"></animate> */}
                  </text>
                  {/* <!-- second circle --> */}
                  <circle
                    onMouseEnter={() => setProcessLabel("research")}
                    id="circle2_hover_surface"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="100"
                    cx="150"
                    cy="145"
                    r="80"
                    opacity="0"
                  ></circle>
                  <circle
                    id="circle2_medium"
                    className="ProcessCircleMedium"
                    fill="none"
                    stroke="#E36767"
                    strokeWidth="1"
                    cx="150"
                    cy="145"
                    r="14"
                    opacity="1"
                  >
                    <animate
                      id="second-medium"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="1"
                      dur="0.7s"
                      fill="freeze"
                      begin="op.begin+0.28s"
                    ></animate>
                  </circle>
                  <circle
                    id="circle2"
                    className="ProcessCircle"
                    fill="#E36767"
                    cx="150"
                    cy="145"
                    r="5"
                    opacity="1"
                  >
                    <animate
                      id="second"
                      attributeType="XML"
                      attributeName="r"
                      from="0"
                      to="5"
                      dur="0.08s"
                      fill="freeze"
                      begin="op.begin+0.19s"
                    ></animate>
                  </circle>

                  <text
                    id="research"
                    className="ProcessText is-visible@s"
                    x="95"
                    y="250"
                    fill={`${processLabel == "research" ? "#E36767" : "#000"}`}
                  >
                    Research
                    <animate
                      id="research-anim"
                      attributeType="XML"
                      attributeName="y"
                      from="350"
                      to="250"
                      dur="0.28s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                    <animate
                      id="research-anim-opacity"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="0.6"
                      dur="0.6s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                  </text>
                  {/* <!-- third circle --> */}
                  <circle
                    onMouseEnter={() => setProcessLabel("sprint_phases")}
                    id="circle3_hover_surface"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="100"
                    cx="300"
                    cy="145"
                    r="80"
                    opacity="0"
                  ></circle>
                  <circle
                    id="circle3_medium"
                    className="ProcessCircleMedium"
                    fill="none"
                    stroke="#E9BC29"
                    strokeWidth="1"
                    cx="300"
                    cy="145"
                    r="14"
                    opacity="1"
                  >
                    <animate
                      id="third-medium"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="1"
                      dur="0.7s"
                      fill="freeze"
                      begin="op.begin+0.43s"
                    ></animate>
                  </circle>
                  <circle
                    id="circle3"
                    className="ProcessCircle"
                    fill="#E9BC29"
                    cx="300"
                    cy="145"
                    r="5"
                    opacity="1"
                  >
                    <animate
                      id="third"
                      attributeType="XML"
                      attributeName="r"
                      from="0"
                      to="5"
                      dur="0.08s"
                      fill="freeze"
                      begin="op.begin+0.29s"
                    ></animate>
                  </circle>

                  <text
                    id="sprint"
                    className="ProcessText"
                    x="225"
                    y="250"
                    fill={`${
                      processLabel == "sprint_phases" ? "#E9BC29" : "#000"
                    }`}
                  >
                    Sprint phases
                    <animate
                      id="sprint-anim"
                      attributeType="XML"
                      attributeName="y"
                      from="350"
                      to="250"
                      dur="0.31s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                    <animate
                      id="sprint-anim-opacity"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="0.6"
                      dur="0.6s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                  </text>
                  {/* <!-- fourth circle --> */}
                  <circle
                    onMouseEnter={() => setProcessLabel("support")}
                    id="circle4_hover_surface"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="100"
                    cx="450"
                    cy="145"
                    r="80"
                    opacity="0"
                  ></circle>
                  <circle
                    id="circle4_medium"
                    className="ProcessCircleMedium"
                    fill="none"
                    stroke="#37B18E"
                    strokeWidth="1"
                    cx="450"
                    cy="145"
                    r="14"
                    opacity="1"
                  >
                    <animate
                      id="fourth-medium"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="1"
                      dur="0.7s"
                      fill="freeze"
                      begin="op.begin+0.59s"
                    ></animate>
                  </circle>
                  <circle
                    id="circle4"
                    className="ProcessCircle"
                    fill="#37B18E"
                    cx="450"
                    cy="145"
                    r="5"
                    opacity="1"
                  >
                    <animate
                      id="fourth"
                      attributeType="XML"
                      attributeName="r"
                      from="0"
                      to="5"
                      dur="0.08s"
                      fill="freeze"
                      begin="op.begin+0.38s"
                    ></animate>
                  </circle>

                  <text
                    id="support"
                    className="ProcessText is-visible@s"
                    x="410"
                    y="250"
                    fill={`${processLabel == "support" ? "#37B18E" : "#000"}`}
                  >
                    Support
                    <animate
                      id="support-anim"
                      attributeType="XML"
                      attributeName="y"
                      from="350"
                      to="250"
                      dur="0.34s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                    <animate
                      id="support-anim-opacity"
                      attributeType="XML"
                      attributeName="opacity"
                      from="0"
                      to="0.6"
                      dur="0.6s"
                      fill="freeze"
                      begin="op.begin+0.2s"
                    ></animate>
                  </text>
                </g>
              </svg>

              <div className="text-center" style={{ paddingBottom: "5rem" }}>
                <h4>{processContent[0].title}</h4>
                <div className="text-center d-flex justify-content-center">
                  <p
                    style={{
                      maxWidth: "40rem",
                      paddingTop: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {processContent[0].content}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <PreFooter />

      {/* <div className="CTA">
        <div className="BGLeft">
          <div
            className={`BGLeftImage is-visible@m ${preFooterHovered == "left" ? "zoom" : ""}
            ${prefooterLeave == "left" ? "zoomOut" : ""} `}
            style={{
              background:
                "url('/assets/images/services-cta-1.jpg') no-repeat left center",
            }}
          ></div>
        </div>

        <div className="BGRight">
          <div
            className={`BGRightImage is-visible@m ${
              preFooterHovered == "right" ? "zoom" : ""
            }
            ${prefooterLeave == "right" ? "zoomOut" : ""} `}
            style={{
              background:
                "url('/assets/images/services-cta-1.jpg') no-repeat right bottom",
            }}
          ></div>
        </div>

        <div className="BGGradient"></div>

        <div className="">
          <div className="is-grid is-grid-collapse is-child-width-1-2@m">
            <div className={`is-grid-item ${preFooterHovered == 'left'?'is-hovered':''}`}
            onMouseEnter={() => {setPreFooterHovered("left")
            setPrefooterLeave('right')}}
            onMouseLeave={() => {
              setPrefooterLeave("left")
            setPreFooterHovered('')}}>
              <a href="./">
                <div
                  className="Partner"
                >
                  <div>
                    <h3>Looking for a reliable app development partner?</h3>
                    <span
                      className="Link is-link"
                      style={{ paddingTop: "3rem" }}
                    >
                      Contact Us
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className={`is-grid-item ${preFooterHovered == 'right'?'is-hovered':''}`}
              onMouseEnter={() => {setPreFooterHovered("right")
              setPrefooterLeave('left')}}
              onMouseLeave={() => {setPrefooterLeave("right")
              setPreFooterHovered('')}}>
              <a href="https://tms-outsource.com/services/">
                <div
                  className="Action"
                >
                  <div>
                    <h3 className="Title is-h3">View our Services</h3>
                    <span
                      className="Link is-link"
                      style={{ paddingTop: "3rem" }}
                    >
                      View Services
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
});

export default Home;
