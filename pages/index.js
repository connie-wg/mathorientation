
import Image from 'next/image'

// components
import NavBar from '../components/NavBar'

// styles
import styles from '../styles/homepage.module.css'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useEffect } from 'react'
import ImageFramed from '../components/imageLayer'
import Link from 'next/link'

// images
// import DcMath from '../assets/dc-math.png'
import profilePic from '../public/dc-math.png'
import CountdownTimer from '../components/Countdown'
import Leaderboard from '../components/Leaderboard'

export default function Home() {

  useEffect(() => {
    console.log(styles);
  })
  return (
    <>
      <div>
        <NavBar />
        <HomeComponent />
      </div>
    </>
    
  )
}

function HomeComponent() {
  return(
    <div className={"d-flex container-fluid"} style={{height: '85vh', width: '100%', flexDirection: 'column'}}>
      <Row className={"d-flex"} style={{width: '100%'}}>
        <Col style={{paddingLeft: '8%', paddingTop: '8%'}}>
          <Row >
            <h3 className={"welcome-sub"}>WELCOME TO</h3>
            <h1 className={"main-header"}>MATH <br></br>ORIENTATION</h1>
          </Row>
          <Row>
            <CountdownTimer/>
          </Row>
          <Row>
          <HandbookSuggestion/>
          </Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center flex-end' style={{paddingBottom: '5rem', marginRight: '0px'}}>
          <div className="d-flex">
            <ImageFramed caption={"2018 Math Orientation in front of DC"} size={'52vh'}>
              <Image className={"framed-image"} src={profilePic}></Image>
            </ImageFramed> 
          </div>
         
        </Col>
      </Row>
      <Row style={{paddingInline: '8%'}}>
        <Leaderboard/>
      </Row>
      
    </div>
  )
}

function HandbookSuggestion() {
  return(
    <div className={styles.suggestionHandbookContainer}>
      <Row>
        <Col>
        <Row>
          <span className={styles.incomingTitle}>
            Incoming first year?
          </span>
          <span className={styles.checkoutText}>
            Check out the <Link href="/firstYearHandbook">handbook</Link>!
          </span>
        </Row>
        </Col>
        {/* <Col>
        <img src="./handbook-icon-homepage.svg"></img>
        </Col> */}
      </Row>

    </div>
  )
}
