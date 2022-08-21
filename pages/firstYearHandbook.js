import NavBar from "../components/NavBar";
import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from 'react';

import HandBookSection from "../components/HandBookSection";
import SideBar from "../components/SideBar";
import Image from "next/image";


import introductionText from "../public/Handbook/introduction";
import generalKnowledgeText from "../public/Handbook/generalKnowledge";
import mathOrientationText from "../public/Handbook/mathOrientation";
import coopText from "../public/Handbook/coop";
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

import mef from "../public/Handbook/mef_-_final_logo.png";
import uwm from "../public/Handbook/mathfaculty.png";
import maths from "../public/Handbook/mathsoc.png";

const firstYearHandbook = () => {

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
    <>
      <NavBar />

      <div className={styles.bigText}>
      <Container style={{ marginLeft: 0, paddingLeft: 0 }}>
        <Row>
          <Col xs={3}>
            <SideBar />
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <div>
            <div id="introduction">
              <HandBookSection body={introductionText}/>
            </div>
            <div style={{display:'flex', background:'white'}}>
              <a href="https://uwaterloo.ca/math-endowment-fund/"><Image src={mef}/></a>
              <a href="https://uwaterloo.ca/math/"><Image src={uwm}/></a>
              <a href="https://mathsoc.uwaterloo.ca/"><Image src={maths}/></a>
            </div>
            <div id="generalKnowledge">
              <HandBookSection body={generalKnowledgeText}/>
            </div>
            <h3>Preparing for Classes</h3>
            <div id="mainPlatforms">
              <HandBookSection body={mainPlatformsText} />
            </div>
            <div id="textbooks">
              <HandBookSection body={textbookText} />
            </div>
            <div id="courseSelection">
              <HandBookSection body={courseSelectionText} />
            </div>
            <div id="academicCalendar">
              <HandBookSection body={academicCalendarText} />
            </div>
            <div id="academicAdvising">
              <HandBookSection body={academicAdvisingText} />
            </div>
            <div id="learning">
              <HandBookSection body={learningText} />
            </div>
            <div id="examPrep">
              <HandBookSection body={examPrepText} />
            </div>
            <div id="academicPolicies">
              <HandBookSection body={academicPoliciesText} />
            </div>
            <h3>Useful Resources at the University</h3>
            <div id="financialAid">
              <HandBookSection body={financialAidText} />
            </div>
            <div id="mathUO">
              <HandBookSection body={mathUOText} />
            </div>
            <div id="theCentre">
              <HandBookSection body={theCentreText} />
            </div>
            <div id="labsAndServers">
              <HandBookSection body={labsAndServersText} />
            </div>
            <div id="wPrint">
              <HandBookSection body={wPrintText} />
            </div>
            <div id="itSupport">
              <HandBookSection body={itSupportText} />
            </div>
            <div id="accessability">
              <HandBookSection body={accessAbilityText} />
            </div>
            <div id="ceca">
              <HandBookSection body={cecaText} />
            </div>
            <div id="athletics">
              <HandBookSection body={athleticsText} />
            </div>
            <div id="campusWell">
              <HandBookSection body={campusWellText} />
            </div>
            <div id="other">
              <HandBookSection body={otherText} />
            </div>
            <h3>Clubs and Societies</h3>
            <div id="mathsoc">
              <HandBookSection body={mathSocText} />
            </div>
            <div id="mathsocClubs">
              <HandBookSection body={mathSocClubsText} />
            </div>
            <div id="mathsocAff">
              <HandBookSection body={mathSocAffText} />
            </div>
            <div id="mathOrientation">
              <HandBookSection body={mathOrientationText} />
            </div>
            <div id="coop">
              <HandBookSection body={coopText} />
            </div>
            <div id="offCampHouse">
              <HandBookSection body={offCampusHouseText} />
            </div>
            <div id="additionalInfo">
              <HandBookSection body={additionalInfoText} />
            </div>
            </div>
          </Col>
          
        </Row>
      </Container>
      </div>
      {showButton && (<button onClick={scrollToTop} className={styles.backToTop}>
            &#8679;
          </button>
      )}
    </>
  );
};





export default firstYearHandbook;
