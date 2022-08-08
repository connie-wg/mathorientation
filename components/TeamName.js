import styles from "../styles/teamName.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import LeaderList from "./LeaderList";
import TeamDescription from "./TeamDescription";

import leaders from "../public/TeamInfo/Ares/Leaders";
import originDescription from "../public/TeamInfo/Ares/OriginDescription";
import aresModalImage from "../public/TeamInfo/Ares/aresModalImage.png";

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
        <Modal.Header>
          <div className={styles.modalTitle}>{fullNameForModal}</div>
        </Modal.Header>
        <Modal.Body>
          <TeamDescription info={originDescription} image={aresModalImage} />
          <br />
          <LeaderList leaders={leaders} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
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
