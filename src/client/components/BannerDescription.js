import React from "react";
import * as styles from "../styles/bannerDescription.module.scss";
import {Container, Row, Col} from "react-bootstrap";

const bannerDescription = (props) => {
  return (
    <Container fluid>
      <Row className={"bg-dark d-flex justify-content-center " + styles.subBanner}>
        <Col sm="10" className="d-flex justify-content-center">
          <h className="large-sub-heading">
            {props.text}
          </h>
        </Col>
      </Row>
    </Container>
  );
};

export default bannerDescription;
