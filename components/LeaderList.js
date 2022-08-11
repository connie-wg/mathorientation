import styles from "../styles/leaderList.module.css";

import Leader from "./Leader";

import { Container, Row, Col } from "react-bootstrap";

const LeaderList = (props) => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1>Team Leaders</h1>
      </div>
      <Container>
        <Row>
          {props.leaders.map((leader) => {
            return (
              <Col>
                <Leader
                  name={leader.name}
                  email={leader.email}
                  instagram={leader.instagram}
                  facebook={leader.facebook}
                  // twitter={leader.twitter}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default LeaderList;
