import styles from "../styles/letters.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import campus from "../public/Letters/Images/Campus.svg";
import mentalHealth from "../public/Letters/Images/MentalHealth.svg"
import coop from "../public/Letters/Images/Coop.svg"
import lifeStyle from "../public/Letters/Images/LifeStyle.svg"
import courses from "../public/Letters/Images/Courses.svg"
import socialLife from "../public/Letters/Images/SocialLife.svg"
import learning from "../public/Letters/Images/Learning.svg"
import letterBack from "../public/Letters/Images/letter_back.png"

import { useState } from "react";
import ImageBackground from 'next/image'

const Letter = (props) => {
  const [showModal, setShowModal] = useState(false);

  const imageChoices = [letterBack, courses, campus, learning, coop, lifeStyle, mentalHealth, socialLife];
  const useImage = imageChoices[props.letter.section];


  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="container-modal-title-vcenter" centered size='md'>
        <div className={styles.pink}>
        <Modal.Body>
            <div className={styles.advice}>
              {props.letter.advice}
            </div>
        </Modal.Body>
        </div>
      </Modal>
      <ImageBackground src={useImage} onClick={handleShowModal}/>
    </>
  );
};

export default Letter;
