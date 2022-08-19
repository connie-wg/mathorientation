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
          {props.leaders.map((leader, i) => {
            return (
              <>
                {i == 0 && (
                  <p className={styles.headPinkTieP}>Head Pink Tie:</p>
                )}
                {i == 1 && <p className={styles.pinkTieP}>Pink Ties:</p>}
                <Row key={i}>
                  <Leader
                    name={leader.name}
                    program={leader.program}
                    term={leader.term}
                  />
                </Row>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default LeaderList;
