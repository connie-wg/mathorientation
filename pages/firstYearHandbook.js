import NavBar from "../components/NavBar";
import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col , Nav, NavDropdown} from "react-bootstrap";
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HandBookSection from "../components/HandBookSection";

import introductionText from "../public/Handbook/introduction";
import generalKnowledgeText from "../public/Handbook/generalKnowledge";

const firstYearHandbook = () => {
  const introduction = useRef(null);
  const generalKnowledge = useRef(null);

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
              <Nav>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(introduction)}>Introduction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="General Knowledge" autoClose={false}>
                    <NavDropdown.Item onClick={() => scrollDown(generalKnowledge)}>Quest</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(generalKnowledge)}>Portal</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(generalKnowledge)}>Watcard</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown()}>University Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown()}>WUSA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown()}>Your First Year</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <div ref={introduction}>
              <HandBookSection body={introductionText}/>
            </div>
            <div ref={generalKnowledge}>
              <HandBookSection body={generalKnowledgeText}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const scrollDown = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behaviour: 'smooth',
  });
};



export default firstYearHandbook;
