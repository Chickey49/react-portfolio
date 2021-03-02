import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function NavbarComponent() {
   const styles={
        btn:{
            color: 'black',
            fontWeight: 'bold'
        }
    }
    return (
        <Navbar className="nav" style={{background: 'linear-gradient(270deg, rgba(103,116,118,1) 0%, rgba(70,141,156,1) 95%, rgba(158,182,187,0.01) 100%)'}}>
            <Navbar.Brand href="/home">Cameron Hickey</Navbar.Brand>
            <Nav.Link style={styles.btn} href="/home">Home</Nav.Link>
            <Nav.Link style={styles.btn} href="/about">About Me</Nav.Link>
            <Nav.Link style={styles.btn} href="/portfolio">Projects</Nav.Link>
        </Navbar>
    )
}
