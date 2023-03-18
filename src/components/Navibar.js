import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";



export function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Полина Макарова</Navbar.Brand>
                <Navbar.Toggle aria-controls="responcive-navbar-nav"/>
                <Navbar.Collapse id="responcive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/home">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/about">Обо мне</Link></Nav.Link>
                        <Nav.Link><Link to="/portfolio">Проекты</Link></Nav.Link>
                        <Nav.Link><Link to="/contacts">Контакты</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}