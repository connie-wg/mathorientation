import NavBar from "../components/NavBar";
import React from 'react';

import styles from "../styles/firstYearHandbook.module.css";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useRef } from 'react';



const firstYearHandbook = () => {
  const introduction = useRef(0);
  const firstYearChecklist = useRef(null);
  const universityServices = useRef(null);
  const WUSA = useRef(null);
  const yourFirstYear = useRef(null);

  return (
    <>
      <NavBar />
      <Container style={{ marginLeft: 0, paddingLeft: 0 }}>
        <Row>
          <Col xs={3}>
            <div className={styles.handbookLinkBar}>
              <div className={styles.searchIcon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                className={styles.handbookSearch}
                type="text"
                placeholder=""
              />
              <Nav>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(introduction)}>Introduction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="First Year CheckList" autoClose={false} onClick={() => scrollDown(firstYearChecklist)}>
                    <NavDropdown.Item>Preparing for Classes</NavDropdown.Item>
                    <NavDropdown.Item>Remote Learning Tips</NavDropdown.Item>
                    <NavDropdown.Item>Off Campus Housing</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(universityServices)}>University Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(WUSA)}>WUSA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => scrollDown(yourFirstYear)}>Your First Year</Nav.Link>
                </Nav.Item>
              </Nav>
              {/* <a className={styles.handbookLink} href="">
                Introduction
              </a>
              <a className={styles.handbookLink} href="">
                University Services
              </a>
              <a className={styles.handbookLink} href="">
                WUSA
              </a>
              <a className={styles.handbookLink} href="">
                Your First Year
              </a>
              <a className={styles.handbookLink} href="">
                Failing a Class
              </a>
              <a className={styles.handbookLink} href="">
                Coop
              </a>
              <a className={styles.handbookLink} href="">
                MathSoc
              </a>
              <a className={styles.handbookLink} href="">
                Additional Information
              </a> */}
            </div>
          </Col>
          <Col>
            <h1>Math Handbook</h1>
            <div className="section" ref={introduction}>
              <p>Introduction</p>
              <p>Message from the math o-team...</p>
            </div>
            <div ref={firstYearChecklist}>
              
            </div>
            <div ref={universityServices}>

            </div>
            <div ref={WUSA}>

            </div>
            <div ref={yourFirstYear}>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const scrollDown = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behaviour: 'smooth',
  });
};



export default firstYearHandbook;
