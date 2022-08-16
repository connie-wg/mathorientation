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
import preparingText from "../public/Handbook/Preparing/preparing";
import academicAdvisingText from "../public/Handbook/Preparing/academicAdvising";
import mainPlatformsText from "../public/Handbook/Preparing/mainPlatforms";
import textbookText from "../public/Handbook/Preparing/textbooks";
import courseSelectionText from "../public/Handbook/Preparing/courseSelection";
import academicCalendarText from "../public/Handbook/Preparing/academicCalendar";
import learningText from "../public/Handbook/Preparing/learning";
import examPrepText from "../public/Handbook/Preparing/examPrep";
import academicPoliciesText from "../public/Handbook/Preparing/academicPolicies";
import financialAidText from "../public/Handbook/UsefulRes/financialAid";
import mathUOText from "../public/Handbook/UsefulRes/mathUO";
import theCentreText from "../public/Handbook/UsefulRes/theCentre";
import labsAndServersText from "../public/Handbook/UsefulRes/labsAndServers";
import wPrintText from "../public/Handbook/UsefulRes/wPrint";
import itSupportText from "../public/Handbook/UsefulRes/itSupport";
import accessAbilityText from "../public/Handbook/UsefulRes/accessAbility";
import cecaText from "../public/Handbook/UsefulRes/ceca";
import athleticsText from "../public/Handbook/UsefulRes/athletics";
import campusWellText from "../public/Handbook/UsefulRes/campusWell";
import otherText from "../public/Handbook/UsefulRes/other";
import mathSocText from "../public/Handbook/Clubs/mathsoc";
import mathSocClubsText from "../public/Handbook/Clubs/mathsocClubs";
import mathSocAffText from "../public/Handbook/Clubs/mathsocAff";
import offCampusHouseText from "../public/Handbook/offCampusHouse";
import additionalInfoText from "../public/Handbook/additionalInfo";

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
  const accessability = useRef(null);
  const athletics = useRef(null);
  const campusWell = useRef(null);
  const ceca = useRef(null);
  const financialAid = useRef(null);
  const itSupport = useRef(null);
  const labsAndServers = useRef(null);
  const mathUO = useRef(null);
  const other = useRef(null);
  const sso = useRef(null);
  const theCentre = useRef(null);
  const wPrint = useRef(null);
  const mathsoc = useRef(null);
  const mathsocClubs = useRef(null);
  const mathsocAff = useRef(null);
  const offCampHouse = useRef(null);
  const additionalInfo = useRef(null);


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
                  <NavDropdown title='Useful Resources' autoClose={false}>
                    <NavDropdown.Item onClick={() => scrollDown(financialAid)}>Financial Aid</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(mathUO)}>The Math Undergrad Office</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(theCentre)}>Student Service Center</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(labsAndServers)}>Labs and Servers</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(wPrint)}>wPrint</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(itSupport)}>IT Support</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(accessability)}>The AccessAbility Office</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(ceca)}>Co-operative Education and the Center for Career Action</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(athletics)}>UW Athletics and Recreational Services</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(campusWell)}>Campus Wellness</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(other)}>Other free services</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title='Clubs and Societies' autoClose={false}>
                    <NavDropdown.Item onClick={() => scrollDown(mathsoc)}>Mathematics Society</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(mathsocClubs)}>MathSoc Clubs</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => scrollDown(mathsocAff)}>MathSoc Affiliates</NavDropdown.Item>
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
                  {coopText.subsections.map(
                      (item) =>
                      <NavDropdown.Item onClick={() => scrollDown(coop)}>{item.title}</NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav.Item>
                <Nav.Link onClick={() => scrollDown(offCampHouse)}>
                    Off Campus Housing
                </Nav.Link>
                <Nav.Link onClick={() => scrollDown(additionalInfo)}>
                    Additional Info
                </Nav.Link>
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
            <h3>Useful Resources at the University</h3>
            <div ref={financialAid}>
              <HandBookSection body={financialAidText} />
            </div>
            <div ref={mathUO}>
              <HandBookSection body={mathUOText} />
            </div>
            <div ref={theCentre}>
              <HandBookSection body={theCentreText} />
            </div>
            <div ref={labsAndServers}>
              <HandBookSection body={labsAndServersText} />
            </div>
            <div ref={wPrint}>
              <HandBookSection body={wPrintText} />
            </div>
            <div ref={itSupport}>
              <HandBookSection body={itSupportText} />
            </div>
            <div ref={accessability}>
              <HandBookSection body={accessAbilityText} />
            </div>
            <div ref={ceca}>
              <HandBookSection body={cecaText} />
            </div>
            <div ref={athletics}>
              <HandBookSection body={athleticsText} />
            </div>
            <div ref={campusWell}>
              <HandBookSection body={campusWellText} />
            </div>
            <div ref={other}>
              <HandBookSection body={otherText} />
            </div>
            <div ref={mathsoc}>
              <HandBookSection body={mathSocText} />
            </div>
            <div ref={mathsocClubs}>
              <HandBookSection body={mathSocClubsText} />
            </div>
            <div ref={mathsocAff}>
              <HandBookSection body={mathSocAffText} />
            </div>
            <div ref={mathOrientation}>
              <HandBookSection body={mathOrientationText} />
            </div>
            <div ref={coop}>
              <HandBookSection body={coopText} />
            </div>
            <div ref={offCampHouse}>
              <HandBookSection body={offCampusHouseText} />
            </div>
            <div ref={additionalInfo}>
              <HandBookSection body={additionalInfoText} />
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
