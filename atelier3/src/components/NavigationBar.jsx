import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavigationBar (props) {
   

    return (

     <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          <NavLink to="events"  style={({isActive})=>({textDecoration:isActive? "underline":"none"})}>Event</NavLink>
          <NavLink to="events/Add"  style={({isActive})=>({textDecoration:isActive? "underline":"none"})}>AddNewEvent</NavLink>


            
          

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          
              <NavLink href="events" style={({isActive})=>({textDecoration:isActive?"underline" :"none"})}>events</NavLink>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}