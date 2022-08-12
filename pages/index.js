
import Image from 'next/image'

// components
import NavBar from '../components/NavBar'

// styles
import * as styles from '../styles/homepage.module.scss'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useEffect } from 'react'
import ImageFramed from '../components/imageLayer'

// images
// import DcMath from '../assets/dc-math.png'
import profilePic from '../public/dc-math.png'
import CountdownTimer from '../components/Countdown'

export default function Home() {

  useEffect(() => {
    console.log(styles);
  })
  return (
    <div className={"" + styles.pink}>
    <NavBar />
    <HomeComponent />
  </div>
  )
}

function HomeComponent() {
  return(
    <div className={"d-flex container-fluid"} style={{height: '85vh', width: '100%'}}>
      <Row className={"d-flex"} style={{width: '100%'}}>
        <Col style={{paddingLeft: '8%', paddingTop: '3%'}}>
          <Row >
            <h3 className={"welcome-sub"}>WELCOME TO</h3>
            <h1 className={"main-header"}>MATH <br></br>ORIENTATION</h1>
          </Row>
          <Row>
            <CountdownTimer/>
          </Row>
        </Col>
        <Col className='d-flex align-items-center justify-content-center flex-end' style={{paddingBottom: '5rem', marginRight: '0px'}}>
          <div className="d-flex">
            <ImageFramed caption={"2018 Math Orientation in front of DC"} size={'60vh'}>
              <Image className={"framed-image"} src={profilePic}></Image>
            </ImageFramed> 
          </div>
         
        </Col>
      </Row>
      
    </div>
  )
}
