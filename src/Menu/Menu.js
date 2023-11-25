import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="me-2">register user</NavLink>
                            <NavLink to="/users">users list</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Menu;