import React, {useEffect, useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/GlobalNav.css';

import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {Row} from 'react-bootstrap/Row';

function GlobalNav() {
    return (
        <Navbar expand="lg" id="navbar" className="bg-body-tertiary" sticky='top' bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex"
                    style={{ maxHeight: '40px' }}
                    navbarScroll
                >
                    <Link to="/" className={"redirecting-style"}>
                        <Navbar.Brand id = "logo-name" className={'logo'}>GAIT Exploration</Navbar.Brand>
                    </Link>

                    {/*<div className='nav-content-links'>*/}
                        <Nav.Link href="/textGeneration" className={"redirecting-style"}>
                            Text Generation
                        </Nav.Link>
                        <Nav.Link href="/imageGeneration" className={"redirecting-style"}>
                            Image generation
                        </Nav.Link>
                        <Nav.Link href="/musicGeneration" className={"redirecting-style"}>
                            Music generation
                        </Nav.Link>
                        <Nav.Link href="/videoGeneration" className={"redirecting-style"}>
                            Video generation
                        </Nav.Link>
                    {/*</div>*/}

                </Nav>
            </Container>
        </Navbar>
    );
}
export default GlobalNav;