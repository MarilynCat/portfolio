import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";



export function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand>Полина Макарова</Navbar.Brand>
                <Navbar.Toggle aria-controls="responcive-navbar-nav"/>
                <Navbar.Collapse id="responcive-navbar-nav">
                    <Nav className="mr-auto">
                        <a href="#about">Обо мне</a>
                        <a href="#portfolio">Проекты</a>
                        <a href="#contacts">Контакты</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}