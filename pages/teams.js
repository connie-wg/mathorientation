import styles from "../styles/teams.module.css";
import { Container, Row, Col } from "react-bootstrap";

import TeamName from "../components/TeamName";
import NavBar from "../components/NavBar";

import AresSVG from "../public/TeamInfo/Ares/SVGs/AresSVGSingleLetter";
import AresSVGFullName from "../public/TeamInfo/Ares/SVGs/AresSVGFullName";
import AresFullNameForModal from "../public/TeamInfo/Ares/SVGs/AresFullNameForModal";
import aresLeaders from "../public/TeamInfo/Ares/Leaders";
import aresOriginDescription from "../public/TeamInfo/Ares/OriginDescription";
import aresModalImage from "../public/TeamInfo/Ares/aresModalImage.png";

const Teams = () => {
  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <h1>Teams</h1>
        <Container>
          <Row>
            <Col>
              <TeamName
                letterSVG={AresSVG}
                fullNameSVG={AresSVGFullName}
                fullNameForModalSVG={AresFullNameForModal}
                leaders={aresLeaders}
                originDescription={aresOriginDescription}
                modalImage={aresModalImage}
              ></TeamName>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Teams;
