import styles from "../styles/teamName.module.css";
import * as theme from "../styles/homepage.module.css";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import LeaderList from "./LeaderList";
import TeamDescription from "./TeamDescription";
import InstagramHandle from "./InstagramHandle";

import { useState } from "react";

const TeamName = (props) => {
  const [showModal, setShowModal] = useState(false);

  const singleLetter = props.letterSVG;
  const fullName = props.fullNameSVG;
  const fullNameForModal = props.fullNameForModalSVG;

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <div
          className={theme.pink}
          style={{ height: "100%", borderRadius: "5px" }}
        >
          <Modal.Header>
            <Container>
              <Row>
                <div className={styles.modalTitle}>{fullNameForModal}</div>
              </Row>
              <Row>
                <InstagramHandle handle={props.originDescription.instagram} />
              </Row>
            </Container>
          </Modal.Header>
          <Modal.Body>
            <TeamDescription
              info={props.originDescription}
              image={props.modalImage}
            />
            <br />
            <LeaderList leaders={props.leaders} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </div>
      </Modal>
      <div className={styles.svgs}>
        <div className={styles.singleLetter}>{singleLetter}</div>
        <div className={styles.fullName} onClick={handleShowModal}>
          {fullName}
        </div>
      </div>
    </>
  );
};

export default TeamName;
