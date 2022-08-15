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
import academicAdvisingText from "../public/Handbook/Preparing/academicAdvising";
import mainPlatformsText from "../public/Handbook/Preparing/mainPlatforms";
import textbookText from "../public/Handbook/Preparing/textbooks";
import courseSelectionText from "../public/Handbook/Preparing/courseSelection";
import academicCalendarText from "../public/Handbook/Preparing/academicCalendar";
import learningText from "../public/Handbook/Preparing/learning";
import examPrepText from "../public/Handbook/Preparing/examPrep";
import academicPoliciesText from "../public/Handbook/Preparing/academicPolicies";

const firstYearHandbook = () => {
  const introduction = useRef(null);
  const generalKnowledge = useRef(null);
  const mathOrientation = useRef(null);
  const coop = useRef(null);
  const academicAdvising = useRef(null);
  const academicPolicies = useRef(null);
  const academicCalendar = useRef(null);
  const courseSelection = useRef(null);
  const examPrep = useRef(null);
  const learning = useRef(null);
  const mainPlatforms = useRef(null);
  const textbook = useRef(null);

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
                  <NavDropdown title='General Knowledge' autoClose={false}>
                    {generalKnowledgeText.subsections.map(
                      (item) =>
                      <NavDropdown.Item onClick={() => scrollDown(generalKnowledge)}>{item.title}</NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title='Preparing for Classes' autoClose={false}>
                    <NavDropdown.Item onClick={() => scrollDown(mainPlatforms)}>Main Platforms</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(textbook)}>Textbooks</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(courseSelection)}>Course Selection</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(academicCalendar)}>The Academic Calendar</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(academicAdvising)}>Academic Advising</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(learning)}>Learning how to Learn</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(examPrep)}>Preparing for Exams</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                <NavDropdown title='Math Orientation' autoClose={false}>
                    {mathOrientationText.subsections.map(
                      (item) =>
                      <NavDropdown.Item onClick={() => scrollDown(mathOrientation)}>{item.title}</NavDropdown.Item>
                    )}
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
            <div ref={generalKnowledge}>
              <HandBookSection body={generalKnowledgeText}/>
            </div>
            <h3>Preparing for Classes</h3>
            <div ref={mainPlatforms}>
              <HandBookSection body={mainPlatformsText} />
            </div>
            <div ref={textbook}>
              <HandBookSection body={textbookText} />
            </div>
            <div ref={courseSelection}>
              <HandBookSection body={courseSelectionText} />
            </div>
            <div ref={academicCalendar}>
              <HandBookSection body={academicCalendarText} />
            </div>
            <div ref={academicAdvising}>
              <HandBookSection body={academicAdvisingText} />
            </div>
            <div ref={learning}>
              <HandBookSection body={learningText} />
            </div>
            <div ref={examPrep}>
              <HandBookSection body={examPrepText} />
            </div>
            <div ref={academicPolicies}>
              <HandBookSection body={academicPoliciesText} />
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
