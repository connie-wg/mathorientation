import styles from "../styles/teams.module.css";
import { Container, Row, Col } from "react-bootstrap";

import TeamName from "../components/TeamName";
import NavBar from "../components/NavBar";

// importing the teams svgs and other info
//aphrodite
import AphrhoditeSVGSingleLetter from "../public/TeamInfo/Aphrhodite/SVGs/AphrhoditeSVGSingleLetter";
import AphrhoditeSVGFullName from "../public/TeamInfo/Aphrhodite/SVGs/AphrhoditeSVGFullName";
import AphrhoditeFullNameForModal from "../public/TeamInfo/Aphrhodite/SVGs/AphrhoditeFullNameForModal";
import aphrhoditeLeaders from "../public/TeamInfo/Aphrhodite/leaders";
import aphrhoditeOriginDescription from "../public/TeamInfo/Aphrhodite/originDescription";
import aphrhoditeModalImage from "../public/TeamInfo/Aphrhodite/aphrhodite.png";
// apillo
import ApilloSVGSingleLetter from "../public/TeamInfo/Apillo/SVGs/ApilloSVGSingleLetter";
import ApilloSVGFullName from "../public/TeamInfo/Apillo/SVGs/ApilloSVGFullName";
import ApilloFullNameForModal from "../public/TeamInfo/Apillo/SVGs/ApilloFullNameForModal";
import apilloLeaders from "../public/TeamInfo/Apillo/leaders";
import apilloOriginDescription from "../public/TeamInfo/Apillo/originDescription";
import apilloModalImage from "../public/TeamInfo/Apillo/apillo.png";
//artaumis
import ArtaumisSVGSingleLetter from "../public/TeamInfo/Artaumis/SVGs/ArtaumisSVGSingleLetter";
import ArtaumisSVGFullName from "../public/TeamInfo/Artaumis/SVGs/ArtaumisSVGFullName";
import ArtaumisFullNameForModal from "../public/TeamInfo/Artaumis/SVGs/ArtaumisFullNameForModal";
import artaumisLeaders from "../public/TeamInfo/Artaumis/leaders";
import artaumisOriginDescription from "../public/TeamInfo/Artaumis/originDescription";
import artaumisModalImage from "../public/TeamInfo/Artaumis/artaumis.png";
//atheta
import AthetaSVGSingleLetter from "../public/TeamInfo/Atheta/SVGs/AthetaSVGSingleLetter";
import AthetaSVGFullName from "../public/TeamInfo/Atheta/SVGs/AthetaSVGFullName";
import AthetaFullNameForModal from "../public/TeamInfo/Atheta/SVGs/AthetaFullNameForModal";
import athetaLeaders from "../public/TeamInfo/Atheta/leaders";
import athetaOriginDescription from "../public/TeamInfo/Atheta/originDescription";
import athetaModalImage from "../public/TeamInfo/Atheta/atheta.png";
//dionusus
import DionususSVGSingleLetter from "../public/TeamInfo/Dionusus/SVGs/DionususSVGSingleLetter";
import DionususSVGFullName from "../public/TeamInfo/Dionusus/SVGs/DionususSVGFullName";
import DionususFullNameForModal from "../public/TeamInfo/Dionusus/SVGs/DionususFullNameForModal";
import dionususLeaders from "../public/TeamInfo/Dionusus/leaders";
import dionususOriginDescription from "../public/TeamInfo/Dionusus/originDescription";
import dionususModalImage from "../public/TeamInfo/Dionusus/dionusus.png";
//gammaia
import GammaiaSVGSingleLetter from "../public/TeamInfo/Gammaia/SVGs/GammaiaSVGSingleLetter";
import GammaiaSVGFullName from "../public/TeamInfo/Gammaia/SVGs/GammaiaSVGFullName";
import GammaiaFullNameForModal from "../public/TeamInfo/Gammaia/SVGs/GammaiaFullNameForModal";
import gammaiaLeaders from "../public/TeamInfo/Gammaia/leaders";
import gammaiaOriginDescription from "../public/TeamInfo/Gammaia/originDescription";
import gammaiaModalImage from "../public/TeamInfo/Gammaia/gammaia.png";
//heliomegas
import HeliomegasSVGSingleLetter from "../public/TeamInfo/Heliomegas/SVGs/HeliomegasSVGSingleLetter";
import HeliomegasSVGFullName from "../public/TeamInfo/Heliomegas/SVGs/HeliomegasSVGFullName";
import HeliomegasFullNameForModal from "../public/TeamInfo/Heliomegas/SVGs/HeliomegasFullNameForModal";
import heliomegasLeaders from "../public/TeamInfo/Heliomegas/leaders";
import heliomegasOriginDescription from "../public/TeamInfo/Heliomegas/originDescription";
import heliomegasModalImage from "../public/TeamInfo/Heliomegas/heliomegas.png";
//hephistus
import HephistusSVGSingleLetter from "../public/TeamInfo/Hephistus/SVGs/HephistusSVGSingleLetter";
import HephistusSVGFullName from "../public/TeamInfo/Hephistus/SVGs/HephistusSVGFullName";
import HephistusFullNameForModal from "../public/TeamInfo/Hephistus/SVGs/HephistusFullNameForModal";
import hephistusLeaders from "../public/TeamInfo/Hephistus/leaders";
import hephistusOriginDescription from "../public/TeamInfo/Hephistus/originDescription";
import hephistusModalImage from "../public/TeamInfo/Hephistus/hephistus.png";
//hermus
import HermusSVGSingleLetter from "../public/TeamInfo/Hermus/SVGs/HermusSVGSingleLetter";
import HermusSVGFullName from "../public/TeamInfo/Hermus/SVGs/HermusSVGFullName";
import HermusFullNameForModal from "../public/TeamInfo/Hermus/SVGs/HermusFullNameForModal";
import hermusLeaders from "../public/TeamInfo/Hermus/leaders";
import hermusOriginDescription from "../public/TeamInfo/Hermus/originDescription";
import hermusModalImage from "../public/TeamInfo/Hermus/hermus.png";
//lambdameter
import LambdameterSVGSingleLetter from "../public/TeamInfo/Lambdameter/SVGs/LambdameterSVGSingleLetter";
import LambdameterSVGFullName from "../public/TeamInfo/Lambdameter/SVGs/LambdameterSVGFullName";
import LambdameterFullNameForModal from "../public/TeamInfo/Lambdameter/SVGs/LambdameterFullNameForModal";
import lambdameterLeaders from "../public/TeamInfo/Lambdameter/leaders";
import lambdameterOriginDescription from "../public/TeamInfo/Lambdameter/originDescription";
import lambdameterModalImage from "../public/TeamInfo/Lambdameter/lambdameter.png";
//persepsilone
import PersepsiloneSVGSingleLetter from "../public/TeamInfo/Persepsilone/SVGs/PersepsiloneSVGSingleLetter";
import PersepsiloneSVGFullName from "../public/TeamInfo/Persepsilone/SVGs/PersepsiloneSVGFullName";
import PersepsiloneFullNameForModal from "../public/TeamInfo/Persepsilone/SVGs/PersepsiloneFullNameForModal";
import persepsiloneLeaders from "../public/TeamInfo/Persepsilone/leaders";
import persepsiloneOriginDescription from "../public/TeamInfo/Persepsilone/originDescription";
import persepsiloneModalImage from "../public/TeamInfo/Persepsilone/persepsilone.png";
//popsidon
import PopsidonSVGSingleLetter from "../public/TeamInfo/Popsidon/SVGs/PopsidonSVGSingleLetter";
import PopsidonSVGFullName from "../public/TeamInfo/Popsidon/SVGs/PopsidonSVGFullName";
import PopsidonFullNameForModal from "../public/TeamInfo/Popsidon/SVGs/PopsidonFullNameForModal";
import popsidonLeaders from "../public/TeamInfo/Popsidon/leaders";
import popsidonOriginDescription from "../public/TeamInfo/Popsidon/originDescription";
import popsidonModalImage from "../public/TeamInfo/Popsidon/popsidon.png";

const Teams = () => {
  return (
    <>
      <NavBar />
      <div className={styles.background}>
        <h1>Teams</h1>
        <Container>
          <Row>
            <Col xs={3}>
              <TeamName
                letterSVG={ApilloSVGSingleLetter}
                fullNameSVG={ApilloSVGFullName}
                fullNameForModalSVG={ApilloFullNameForModal}
                leaders={apilloLeaders}
                originDescription={apilloOriginDescription}
                modalImage={apilloModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 2 }}>
              <TeamName
                letterSVG={AphrhoditeSVGSingleLetter}
                fullNameSVG={AphrhoditeSVGFullName}
                fullNameForModalSVG={AphrhoditeFullNameForModal}
                leaders={aphrhoditeLeaders}
                originDescription={aphrhoditeOriginDescription}
                modalImage={aphrhoditeModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <TeamName
                letterSVG={ArtaumisSVGSingleLetter}
                fullNameSVG={ArtaumisSVGFullName}
                fullNameForModalSVG={ArtaumisFullNameForModal}
                leaders={artaumisLeaders}
                originDescription={artaumisOriginDescription}
                modalImage={artaumisModalImage}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 2 }}>
              <TeamName
                letterSVG={AthetaSVGSingleLetter}
                fullNameSVG={AthetaSVGFullName}
                fullNameForModalSVG={AthetaFullNameForModal}
                leaders={athetaLeaders}
                originDescription={athetaOriginDescription}
                modalImage={athetaModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <TeamName
                letterSVG={DionususSVGSingleLetter}
                fullNameSVG={DionususSVGFullName}
                fullNameForModalSVG={DionususFullNameForModal}
                leaders={dionususLeaders}
                originDescription={dionususOriginDescription}
                modalImage={dionususModalImage}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 1 }}>
              <TeamName
                letterSVG={GammaiaSVGSingleLetter}
                fullNameSVG={GammaiaSVGFullName}
                fullNameForModalSVG={GammaiaFullNameForModal}
                leaders={gammaiaLeaders}
                originDescription={gammaiaOriginDescription}
                modalImage={gammaiaModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 4 }}>
              <TeamName
                letterSVG={HeliomegasSVGSingleLetter}
                fullNameSVG={HeliomegasSVGFullName}
                fullNameForModalSVG={HeliomegasFullNameForModal}
                leaders={heliomegasLeaders}
                originDescription={heliomegasOriginDescription}
                modalImage={heliomegasModalImage}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 4 }}>
              <TeamName
                letterSVG={HephistusSVGSingleLetter}
                fullNameSVG={HephistusSVGFullName}
                fullNameForModalSVG={HephistusFullNameForModal}
                leaders={hephistusLeaders}
                originDescription={hephistusOriginDescription}
                modalImage={hephistusModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 6 }}>
              <TeamName
                letterSVG={HermusSVGSingleLetter}
                fullNameSVG={HermusSVGFullName}
                fullNameForModalSVG={HermusFullNameForModal}
                leaders={hermusLeaders}
                originDescription={hermusOriginDescription}
                modalImage={hermusModalImage}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 2 }}>
              <TeamName
                letterSVG={LambdameterSVGSingleLetter}
                fullNameSVG={LambdameterSVGFullName}
                fullNameForModalSVG={LambdameterFullNameForModal}
                leaders={lambdameterLeaders}
                originDescription={lambdameterOriginDescription}
                modalImage={lambdameterModalImage}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 4 }}>
              <TeamName
                letterSVG={PersepsiloneSVGSingleLetter}
                fullNameSVG={PersepsiloneSVGFullName}
                fullNameForModalSVG={PersepsiloneFullNameForModal}
                leaders={persepsiloneLeaders}
                originDescription={persepsiloneOriginDescription}
                modalImage={persepsiloneModalImage}
              />
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <TeamName
                letterSVG={PopsidonSVGSingleLetter}
                fullNameSVG={PopsidonSVGFullName}
                fullNameForModalSVG={PopsidonFullNameForModal}
                leaders={popsidonLeaders}
                originDescription={popsidonOriginDescription}
                modalImage={popsidonModalImage}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Teams;
