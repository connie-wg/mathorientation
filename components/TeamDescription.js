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
        <Col>{props.info.godOrigin}</Col>
        <Col>
          <h1 className={styles.coursesh1}>Courses you'll see it in:</h1>
          <ul>
            {props.info.courses.map((course, i) => {
              return <li key={i}>{course}</li>;
            })}
            <li>...</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamDescription;
