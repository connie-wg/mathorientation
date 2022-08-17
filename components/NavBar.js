import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <Navbar className={"navbar-container"} expand="lg">
      <Container className="container-fluid">

        <Container classname="container-sm" >
          <Navbar.Brand href="/">
            <img src='/home-icon.inline.svg' style={{verticalAlign: 'baseline', marginRight: '0.25rem'}}></img>
            home
          </Navbar.Brand>
          <Navbar.Brand href="/firstYearHandbook">
            handbook
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/letters">
              letters
            </Navbar.Brand>
            <Navbar.Brand href="/teams">
              teams
            </Navbar.Brand>
            <Navbar.Brand href="/gallery">
              gallery
            </Navbar.Brand>
            <NavDropdown title="contact us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <div className='row'>
                  <div className={'col'}>
                    hi
                  </div>
                  <div className={'col'}>
                    sup
                  </div>
                  <div className={'col'}>
                    yo
                  </div>
                </div>
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar