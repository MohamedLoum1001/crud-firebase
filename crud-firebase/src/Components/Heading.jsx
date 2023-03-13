import React from 'react'
import {Navbar,Nav,Container, NavItem} from 'react-bootstrap/'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <Navbar bg="light" variant="dark">
    <Container>
      <Navbar.Brand href="/" style={{fontWeight:"700" ,fontSize:"28px",color:"black"} }>Customer Details</Navbar.Brand>
      <Nav className="ml-5">
        <NavItem className='justify-content-end'>
        <Link to="/AddUser" className='btn btn-primary px-5 py-2'>Ajouter</Link>
        </NavItem>
   
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Heading
