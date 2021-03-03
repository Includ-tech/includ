import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/preFooter.module.scss";
import Link from "next/link";

const PreFooter = () => {
  return (
    <Container fluid className={styles.PreFooter}>
      <Row>
        <Col sm="6" className={styles.LeftSect + " " + styles.GridSect}>
          <div>
            <div className={"position-absolute " + styles.overlay}></div>
            <div className={"position-absolute " + styles.DarkOverlay}></div>
            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: "80%", textAlign:"left" }}>
                <h4 className={styles.Heading + " text-left"}>
                  Looking for a reliable app development partner?
                </h4>
                <Link
                  href={"/contact"}
                  style={{ paddingTop: "3rem", float: "left" }}
                >
                  <span className={styles.isLink}>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col sm="6" className={styles.RightSect + " " + styles.GridSect}>
          <div>
            <div className={"position-absolute " + styles.overlay}></div>
            <div className={"position-absolute " + styles.DarkOverlay}></div>
            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: "80%", textAlign:"left" }}>
                <h4 className={styles.Heading}>Check out variety of services that we provide</h4>
                <Link
                  href={"/services"}
                  
                  style={{ paddingTop: "3rem", float: "left" }}
                >
                  <span className={styles.isLink}>View Services</span>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PreFooter;
