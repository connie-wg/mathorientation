import styles from "../styles/letters.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import letterBack from "../public/Letters/letter_back.png";
import letterFront from "../public/Letters/letter_front.png";


import { useState } from "react";
import ImageBackground from 'next/image'

const Letter = (props) => {
  const [showModal, setShowModal] = useState(false);

  const letterTitle = props.letterTitle;
  const author = props.author;

  var useImage = letterBack;

  if (props.front == 1) useImage = letterFront;

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Button classname={styles.letterBox} onClick={handleShowModal} >
        <ImageBackground className={"letterBox"} src={useImage}>
        </ImageBackground>
        <div>{letterTitle}</div>
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="container-modal-title-vcenter" centered size="xl">
        <Modal.Header>
          <div>{letterTitle}</div>
        </Modal.Header>
        <Modal.Body>
            <div>{author}</div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Letter;
