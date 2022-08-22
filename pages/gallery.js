import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useEffect } from 'react'

import styles from '../styles/gallery.module.css'

import NavBar from '../components/NavBar'
import Gallery from 'react-photo-gallery'
import {photos} from '../data/photos.js'

const GalleryPage = () => {
  useEffect(() => {
    console.log(styles);
  })
  return (
    <div >
    <NavBar />
    <GalleryComponent />
  </div>
  )
  
}

function GalleryComponent () {
  const BasicRows = () => <Gallery photos={photos}/>
  return (
    <Container className={"d-flex container-fluid"} style={{height: '85vh', width: '100%', flexDirection: 'column', background: 'inherit'}}>
      <Row><h1 className={"main-header"} style={{textAlign: 'center'}}>Photo Gallery</h1></Row>
      <Row className={"d-flex"} style={{width: '100%'}}>
        <BasicRows/>
      </Row>
      <Row>
        <span style={{fontSize: '20px', textAlign: 'center', marginTop: '1rem'}}>Want to see more photos? Check out the <a href="https://www.facebook.com/MathOrientation/photos" style={{color: '#C2006B'}}>facebook page</a></span>
      </Row>
      
    </Container>
  )
}

export default GalleryPage