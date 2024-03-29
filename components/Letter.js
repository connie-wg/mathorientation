import styles from "../styles/letters.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "next/image";

import campus from "../public/Letters/Images/Campus.svg";
import mentalHealth from "../public/Letters/Images/MentalHealth.svg"
import coop from "../public/Letters/Images/Coop.svg"
import lifeStyle from "../public/Letters/Images/LifeStyle.svg"
import courses from "../public/Letters/Images/Courses.svg"
import socialLife from "../public/Letters/Images/SocialLife.svg"
import learning from "../public/Letters/Images/Learning.svg"
import letterBack from "../public/Letters/Images/letter_back.png"
import stamp from "../public/Letters/Images/StampTie.svg"

import { useState } from "react";
import ImageBackground from 'next/image'
import Col from "react-bootstrap";

const Letter = (props) => {
  const [showModal, setShowModal] = useState(false);

  const yearChoices = ['fifth', 'first', 'second', 'third', 'fourth'];
  const year = yearChoices[props.letter.year];

  const imageChoices = [letterBack, courses, campus, learning, coop, lifeStyle, mentalHealth, socialLife];
  const useImage = imageChoices[props.letter.section];


  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName={styles.modal}>
        <div className={styles.pink}>
            <div className={styles.advice}>
              <div className={styles.stamp}>
                <Image src={stamp}/>
              </div>
              <div className={styles.text}>
              {props.letter.advice}
              </div>
              <div className={styles.vl}></div>
              <div className={styles.footer}>
                Sincerely a {year} year student.
              </div>
            </div>
        </div>
      </Modal>
      <ImageBackground src={useImage} onClick={handleShowModal}/>
    </>
  );
};

export default Letter;
