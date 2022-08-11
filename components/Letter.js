import styles from "../styles/teamName.module.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


import { useState } from "react";

const Letter = (props) => {
  const [showModal, setShowModal] = useState(false);

  const letterTitle = props.letterTitle;
  const author = props.author;
  console.log(props.author);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

//   return (
//     <div>Hello</div>
//   )
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <div>{letterTitle}</div>
        </Modal.Header>
        <Modal.Body>
            <div>{author}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
        <div onClick={handleShowModal}>
          LetterTest
        </div>
    </>
  );
};

export default Letter;
