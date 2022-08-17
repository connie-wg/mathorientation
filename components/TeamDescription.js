import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const TeamDescription = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={props.image}></Image>
        </Col>
        <Col>{props.info.godOrigin}</Col>
      </Row>
      <Row>
        <Col>{props.info.symbolOrigin}</Col>
        <Col>
          {props.info.courses.map((course, i) => {
            return <p key={i}>{course}</p>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default TeamDescription;
