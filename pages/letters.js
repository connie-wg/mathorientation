import React from 'react'

import Letter from "../components/Letter";
import * as styles from "../styles/homepage.module.css";
import { Container, Row, Col } from "react-bootstrap";

import socialLife from "../public/Letters/socialLife.js"
import mentalHealth from '../public/Letters/mentalHealth';
import lifestyle from '../public/Letters/Lifestyle';
import coop from '../public/Letters/Coop';
import courses from '../public/Letters/courses';
import learningTips from '../public/Letters/learningTips';
import campusTips from '../public/Letters/campusTips';
import NavBar from '../components/NavBar';


const Letters = () => {
    return (
        <div className={"" + styles.pink}>
        <NavBar/>
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}} id='header'>
            <h1 className={"main-header"}>Letters from Past Students</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <Letter
                letterTitle="Social Life"
                letterBody={socialLife}
                />
            </Col>
            <Col>
                <Letter
                letterTitle="Mental Health"
                front="1"
                letterBody={mentalHealth}
                />
            </Col>  
            <Col>
                <Letter
                letterTitle="LifeStyle"
                front="2"
                letterBody={lifestyle}
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <Letter
                letterTitle="Co-op and Career"
                front="1"
                letterBody={coop}
                />
            </Col>
            <Col>
                <Letter
                letterTitle="Learning Tips"
                front="2"
                letterBody={learningTips}
                />
            </Col>  
            <Col>
                <Letter
                letterTitle="Courses and Academics"
                letterBody={courses}
                />
            </Col>
          </Row>

        </Container>
      </div>
      )
}

export default Letters