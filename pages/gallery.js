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
      <Row className={"d-flex"} style={{width: '100%'}}>
        <BasicRows/>
      </Row>
      
    </Container>
  )
}

export default GalleryPage