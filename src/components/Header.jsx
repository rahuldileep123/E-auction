import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../assets/logo1.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img style={{width:"50px",height:"50px"}} src={logo} alt="" />
      <Link to={"/"}  style={{textDecoration:"none"}}>  <Navbar.Brand style={{color:"blue",fontWeight:"bolder",fontSize:"25px"}} href="#home">BidZone</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Link to={"/"}  style={{textDecoration:"none"}}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to={"/dashboard"} style={{textDecoration:"none",color:"grey"}}>
              Profile 
            </Link>
            <Link to={"/allproducts"} style={{textDecoration:"none",color:"grey"}}>
             Products
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header