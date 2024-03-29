import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/teamDescription.module.css";

const TeamDescription = (props) => {
  return (
    <Container>
      <Row>
        <Col>{props.info.symbolOrigin}</Col>
        <Col>{props.info.godOrigin}</Col>
      </Row>
      <Row>
        <div className={styles.modalImageContainer}>
          <div className={styles.modalImage}>
            <Image src={props.image} style={{ borderRadius: "20%" }} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: "2rem" }}>
        <Col>
          <h1 className={styles.coursesh1}>Courses you&apos;ll see it in:</h1>
          <ul className={styles.courseList}>
            {props.info.courses.map((course, i) => {
              return <li key={i}>{course}</li>;
            })}
          </ul>
        </Col>
        <Col>
          <h1 className={styles.coursesh1}>Areas of Study:</h1>
          <ul className={styles.courseList}>
            {props.info.areasOfStudy.map((area, i) => {
              return <li key={i}>{area}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamDescription;
