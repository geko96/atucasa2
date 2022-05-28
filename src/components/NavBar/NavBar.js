import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { contexto } from "../../App";




export default function NavBar () {
  const [count, setCount] = React.useState(useContext(contexto).cart.length)
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
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Carrito: {count}</Nav.Link>
        <Nav.Link href="#action2">Ayuda</Nav.Link>
        <Nav.Link href="#action2">Contacto</Nav.Link>
        
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