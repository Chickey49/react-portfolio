import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavbarComponent() {
    return (
        <Navbar className="nav"variant="dark" bg="dark">
            <Navbar.Brand href="/home">Cameron Hickey</Navbar.Brand>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Projects</Nav.Link>
        </Navbar>
    )
}
