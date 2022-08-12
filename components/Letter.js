import styles from "../styles/letters.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import letterBack from "../public/Letters/letter_back.png";
import letterFront from "../public/Letters/letter_front.png";
import letterOther from "../public/Letters/letter_other.png";


import { useState } from "react";
import ImageBackground from 'next/image'

const Letter = (props) => {
  const [showModal, setShowModal] = useState(false);

  const letterTitle = props.letterTitle;
  const text = props.letterBody;

  var useImage = letterBack;

  if (props.front == 1) {
    useImage = letterFront;
  } else if (props.front == 2) {
    useImage = letterOther;
  }

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Button classname={styles.letterBox} onClick={handleShowModal} >
        <ImageBackground src={useImage}>
        </ImageBackground>
        <div>{letterTitle}</div>
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="container-modal-title-vcenter" centered size="xl">
        <Modal.Header>
          <div>{letterTitle}</div>
        </Modal.Header>
        <Modal.Body>
            <div>
              {text.map(line => {
              return (
                <div>
                  <h2>{line.title}</h2>
                  <p>{line.advice}</p>
                </div>
              );
            })}
            </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Letter;
