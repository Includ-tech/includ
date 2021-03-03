import Head from "next/head";
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/banner.module.css";

const { banner, smallHeading } = styles;

export default function Banner(props) {
  const { heading, subHeading, url } = props;
  return (
    <div className={banner}>
      <Container>
        <Row style={{ paddingBottom: "2rem" }}>
          <Col>
            <h className="small-heading">{heading}</h>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            <h className="large-sub-heading" style={{ lineHeight: "3rem" }}>
              {subHeading}
            </h>

            {url && (
              <div className="mt-2">
                <a href={url} className="is-link" target="_blank">
                  {url}
                </a>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
