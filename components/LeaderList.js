import { Container, Row, Col } from "react-bootstrap";

const LeaderList = (props) => {
  return (
    <>
      <h1>Team Leaders</h1>
      <Container>
        <Row>
          {props.leaders.map((leader) => {
            return (
              <Col>
                <span>{leader.name}</span>
                <span>{leader.instagram}</span>
                <span>{leader.twitter}</span>
                <span>{leader.facebook}</span>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default LeaderList;
