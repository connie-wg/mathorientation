import NavBar from "../components/NavBar";
import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col , Nav, NavDropdown} from "react-bootstrap";
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import introductionText from "../public/Handbook/introduction";
import firstYearChecklistText from "../public/Handbook/firstYearChecklist";
import universityServicesText from "../public/Handbook/universityServices";
import wusaText from "../public/Handbook/wusa";



const firstYearHandbook = () => {
  const introduction = useRef(0);
  const firstYearChecklist = useRef(null);
  const universityServices = useRef(null);
  const WUSA = useRef(null);
  const yourFirstYear = useRef(null);

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
                  <NavDropdown title="First Year CheckList" autoClose={false} onClick={() => scrollDown(firstYearChecklist)}>
                    <NavDropdown.Item>Preparing for Classes</NavDropdown.Item>
                    <NavDropdown.Item>Remote Learning Tips</NavDropdown.Item>
                    <NavDropdown.Item>Off Campus Housing</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(universityServices)}>University Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(WUSA)}>WUSA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(yourFirstYear)}>Your First Year</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <div className="section" ref={introduction}>
              <h3>Introduction</h3>
              {introductionText}
            </div>
            <div ref={firstYearChecklist}>
              <h3>First Year CheckList</h3>
              {firstYearChecklistText}
              <pre>
                hello
                hello
                hello
                hello
                hello
                hello
                hello
                hello
                hello
              </pre>
            </div>
            <div ref={universityServices}>
              <h3>University Services</h3>
              {universityServicesText}
              <p>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
              </p>
            </div>
            <div ref={WUSA}>
              <h3>WUSA</h3>
              {wusaText}
              <p>
              hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
                hello
                <br></br>
              
              </p>
            </div>
            <div ref={yourFirstYear}>

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
