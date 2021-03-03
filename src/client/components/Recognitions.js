
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/recognitions.module.scss";


export default function Recognitions() {
  
  return (
    <div>
      <Container fluid style={{ postion: "relative", display: "block" }}>
        <Row className={`customRow ${styles.recognitionBannerImage}`}>
          <div className={styles.recognitionsContainer}>
            <div>
              <h3 className="text-center">Recognitions</h3>
            </div>
            <Row>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>

              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>

              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
              <Col sm={4} xs={6} style={{ paddingTop: "40px" }}>
                <img
                  className={styles.RecImg}
                  src="/assets/images/recognitions.jpg"
                />
                <p>Deloitte Technology Fast 50 Nominee 2020</p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}
