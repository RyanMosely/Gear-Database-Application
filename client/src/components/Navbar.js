import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function TopNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/">Profile</Link>
                    </Nav.Item>
                    <Nav.Item className="ml-2">
                        <Link to="/alacarte">Item Selection</Link>
                    </Nav.Item>                         
                </Nav>
                <Button variant="light">View Cart</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNavbar;