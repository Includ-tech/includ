import { Row, Col, Container } from "react-bootstrap";
import Link from 'next/link'
import * as styles from "../styles/projects.module.scss";

const { subBanner, services, waysToWork } = styles;

export default function Projects({ item }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.image}`}>
        <div className="text-center">
          {/* <h className="small-heading pb-2">CASE STUDY</h> */}
          <h3 className="pb-3">{item.title}</h3>
          <p>{item.subTitle}</p>
          <img
            src={`/assets/images/${item.screen}`}
            alt="Avatar"
            width="80%"
          />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.text}>
          <h3>View Project</h3>
        </div>
      </div>
      <div className={styles.viewProject}>
        <Link href={"/portfolio/" + item.slug}>
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
  );
}
