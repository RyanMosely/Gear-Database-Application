import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function TopNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#a-la-carte">Item Selection</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavbar;