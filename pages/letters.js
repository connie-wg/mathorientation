import React from 'react'

import Letter from "../components/Letter";
import NavBar from "../components/NavBar";
import styles from "../styles/homepage.module.css";
import { Container, Row, Col } from "react-bootstrap";


import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Letters = () => {
    return (
        <div className={styles.background}>
        <h1>Letters from past students</h1>
        <Container>
          <Row>
            <Col>
              <Letter
                letterTitle="Hello"
                author="Elysia"
                />
            </Col>
                <Letter
                letterTitle="Hello"
                author="Elysia"
                />
            <Col>

            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      )
}

export default Letters