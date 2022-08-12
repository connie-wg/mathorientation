import React from 'react'

import Letter from "../components/Letter";
import * as styles from "../styles/homepage.module.css";
import { Container, Row, Col } from "react-bootstrap";

import letter1 from "../public/Letters/letter1.js"



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
                letterBody={letter1}
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
                front="2"
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <Letter
                letterTitle="Things to know"
                author="Elysia"
                front="1"
                />
            </Col>
            <Col>
                <Letter
                letterTitle="First Year Me"
                author="Joe"
                front="2"
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