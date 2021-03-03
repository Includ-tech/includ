import Head from "next/head";
import Banner from "../components/Banner";
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/services.module.css";
import PreFooter from "../components/PreFooter";
import BannerDescription from "../components/BannerDescription";

const { subBanner, services, waysToWork } = styles;

export default function Services() {
  return (
    <div>
      <Head>
        <title>Services - Includ</title>
        <meta
          name="description"
          content="Providing website development, web app development, hybrid app development and web designing services"
        />
        <meta
          name="keywords"
          content="services, Includ, website, web, website development, web development, app development, hybrid app development, mobile app development, web designing, web developer"
        />
        <meta name="author" content="Includ" />
      </Head>
      <Banner
        heading="SERVICES"
        subHeading="We build, test, launch and enhance
    top-notch complex web and hybrid mobile
    applications."
      />
      <BannerDescription
        text="Our services are perfect for fast growing tech and development
              companies who need to scale up their development capabilities
              while keeping quality, improving productivity and optimizing
              costs."
      />

      <Container className={services}>
        <Row>
          <Col>
            <h3>
              We offer the following services to perfectly match your business
              requirements.
            </h3>
          </Col>
        </Row>

        <Row>
          <Col sm={6} style={{ paddingTop: "6rem" }}>
            <img
              src="/assets/images/hero-banner.svg"
              className={styles.serviceImg}
            />
            <h4 className="pt-4">Website Development</h4>
            <p>
              Website development services include fully responsive web
              interfaces highly optimized for mobile which helps in branding
              your business. We also provide WordPress, Shopify, Wix website
              development services. It also includes buying your domain name and
              hosting.
            </p>
            {/* <Row>
              <Col
                className="text-left pl-3 pt-3"
                style={{ paddingTop: "1rem" }}
              >
                <span className="is-link">Learn More</span>
              </Col>
            </Row> */}
          </Col>
          <Col sm={6} style={{ paddingTop: "6rem" }}>
            <img
              src="/assets/images/web-app-development.svg"
              className={styles.serviceImg}
            />
            <h4 className="pt-4">Web App Development</h4>
            <p>
              Web application development include building multi-platform
              compatible ecommerce websites, social media websites and more.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={6} style={{ paddingTop: "6rem" }}>
            <img
              src="/assets/images/app-development.svg"
              className={styles.serviceImg}
            />
            <h4 className="pt-4">Hybrid App Development</h4>
            <p>
              Hybrid app development service gives the clients a cost effective
              solution to build an app for their business compatible with both
              Android and iOS platforms.
            </p>
          </Col>
          <Col sm={6} style={{ paddingTop: "6rem" }}>
            <img
              src="/assets/images/web-design.svg"
              className={styles.serviceImg}
            />
            <h4 className="pt-4">Web Designing</h4>
            <p>
              Web designing services include web and mobile designs for
              websites, web apps and hybrid apps.
            </p>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid className={waysToWork}>
        <Row>
          <Col className="pb-3">
            <h2 className="pb-3 text-center">Ways to work with us</h2>
            <div className="pb-2 d-flex justify-content-center text-center">
              <p style={{ maxWidth: "60%" }}>
                We build, test, launch and enhance top-notch complex web and
                mobile applications.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="pt-5">
            <Row>
              <Col>
                <img src="assets/images/1.svg" height="80%" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Project based</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Our favorite way of partnering with you. In this model TMS
                  takes over project management, makes tech-related decisions,
                  provides development, while you focus on business-related
                  decisions.
                </p>
              </Col>
            </Row>
          </Col>

          <Col sm={4} className="pt-5">
            <Row>
              <Col>
                <img src="assets/images/1.svg" height="80%" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Project based</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Our favorite way of partnering with you. In this model TMS
                  takes over project management, makes tech-related decisions,
                  provides development, while you focus on business-related
                  decisions.
                </p>
              </Col>
            </Row>
          </Col>

          <Col sm={4} className="pt-5">
            <Row>
              <Col>
                <img src="assets/images/1.svg" height="80%" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Project based</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Our favorite way of partnering with you. In this model TMS
                  takes over project management, makes tech-related decisions,
                  provides development, while you focus on business-related
                  decisions.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
      <PreFooter />
    </div>
  );
}
