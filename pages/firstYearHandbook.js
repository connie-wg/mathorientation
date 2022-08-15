import NavBar from "../components/NavBar";
import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col , Nav, NavDropdown} from "react-bootstrap";
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HandBookSection from "../components/HandBookSection";

import introductionText from "../public/Handbook/introduction";
import generalKnowledgeText from "../public/Handbook/generalKnowledge";
import mathOrientationText from "../public/Handbook/mathOrientation";
import coopText from "../public/Handbook/coop";
import preparingText from "../public/Handbook/preparing";

const firstYearHandbook = () => {
  const introduction = useRef(null);
  const generalKnowledge = useRef(null);
  const mathOrientation = useRef(null);
  const coop = useRef(null);
  const preparing = useRef(null);

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
                  <NavDropdown title='Preparing for Classes' autoClose={false}>
                    {preparingText.subsections.map(
                      (item) =>
                      <NavDropdown.Item onClick={() => scrollDown(preparing)}>{item.title}</NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                <NavDropdown title='Math Orientation' autoClose={false}>
                    <NavDropdown.Item onClick={() => scrollDown(mathOrientation)}>WUSA</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(mathOrientation)}>WUSA Clubs</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title='Coop' autoClose={false}>
                    <NavDropdown.Item>Switching</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <div ref={introduction}>
              <HandBookSection body={introductionText}/>
            </div>
            <div ref={preparing}>
              <HandBookSection body={preparingText} />
            </div>
            <div ref={generalKnowledge}>
              <HandBookSection body={generalKnowledgeText}/>
            </div>
            <div ref={mathOrientation}>
              <HandBookSection body={mathOrientationText} />
            </div>
            <div ref={coop}>
              <HandBookSection body={coopText} />
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
