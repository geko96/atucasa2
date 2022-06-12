import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { contexto } from "../Context/context";
import { useEffect } from "react";
import CartWidget from "../Cart/CartWidget";





export default function NavBar () {
  


  return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand><NavLink exact to="/">A Tu Casa</NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><NavLink exact to="/">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink exact to="/orders">Ordenes</NavLink></Nav.Link>
        <Nav.Link ><NavLink exact to="/cart"><CartWidget/></NavLink></Nav.Link>
        <Nav.Link><NavLink exact to="/ayuda">Ayuda</NavLink></Nav.Link>
        <Nav.Link><NavLink exact to="/contacto">Contacto</NavLink></Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}