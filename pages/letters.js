import React from 'react'
import Letter from "../components/Letter";
import { Container, Row, Col } from "react-bootstrap";

import * as styles from '../styles/letters.module.css';

import allLetters from '../public/Letters/allLetter';
import NavBar from '../components/NavBar';


const Letters = () => {
    return (
        <div>
        <NavBar/>
          
        <Container fluid>
          <Row>
            <h1 className={styles.title}>Letters from Past Students</h1>
          </Row>
          {allLetters.map(
            (item) => {
              return (
                <Letter letter={item}/>
              )
            }
          )}
        </Container>
        </div>
      )
}

export default Letters
