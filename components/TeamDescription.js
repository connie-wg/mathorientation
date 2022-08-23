import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/teamDescription.module.css";

const TeamDescription = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={props.image} style={{ borderRadius: "20%" }} />
        </Col>
        <Col style={{ paddingTop: "1rem" }}>{props.info.symbolOrigin}</Col>
      </Row>
      <Row>
        <Col xs={6}>{props.info.godOrigin}</Col>
        <Col xs={3}>
          <h1 className={styles.coursesh1}>Courses you&apos;ll see it in:</h1>
          <ul className={styles.courseList}>
            {props.info.courses.map((course, i) => {
              return <li key={i}>{course}</li>;
            })}
          </ul>
        </Col>
        <Col xs={3}>
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
