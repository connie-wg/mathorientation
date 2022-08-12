import NavBar from "../components/NavBar";

import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const firstYearHandbook = () => {
  return (
    <>
      <NavBar />
      <Container style={{ marginLeft: 0, paddingLeft: 0 }}>
        <Row>
          <Col xs={3}>
            <div className={styles.handbookLinkBar}>
              <div className={styles.searchIcon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                className={styles.handbookSearch}
                type="text"
                placeholder=""
              />
              {/* <form action="">
                <input
                  className={styles.handbookSearch}
                  type="text"
                  placeholder="search for a topic..."
                />
              </form> */}
              <a className={styles.handbookLink} href="">
                Introduction
              </a>
              <a className={styles.handbookLink} href="">
                University Services
              </a>
              <a className={styles.handbookLink} href="">
                WUSA
              </a>
              <a className={styles.handbookLink} href="">
                Your First Year
              </a>
              <a className={styles.handbookLink} href="">
                Failing a Class
              </a>
              <a className={styles.handbookLink} href="">
                Coop
              </a>
              <a className={styles.handbookLink} href="">
                MathSoc
              </a>
              <a className={styles.handbookLink} href="">
                Additional Information
              </a>
            </div>
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <p>Introduction</p>
            <p>Message from the math o-team...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default firstYearHandbook;
