import React from 'react'

import Letter from "../components/Letter";
import * as styles from "../styles/homepage.module.css";
import { Container, Row, Col } from "react-bootstrap";


import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Letters = () => {
    return (
        <div className={styles.background}>
        <h1 className={"main-header"}>Letters from past students</h1>
        <Container>
          <Row>
            <Col>
              <Letter
                letterTitle="Things to know"
                author="Elysia"
                />
            </Col>
            <Col>
                <Letter
                letterTitle="First Year Me"
                author="Joe"
                front="1"
                />
            </Col>  
            <Col>
                <Letter
                letterTitle="Second year things"
                author="BOB"
                />
            </Col>
          </Row>
        </Container>
      </div>
      )
}

export default Letters