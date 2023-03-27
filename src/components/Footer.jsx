import React from 'react';
import {Link} from "react-router-dom";


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col footer__logo">
                    <img className="footer__logo-img" src="/static/img/Ellipse-photo.png" alt=""/>

                </div>
                <div className="col footer__text">
                    Frontend-разработчик и веб-дизайнер
                    <div className="col copyright">
                        © 2023 Полина Макарова
                    </div>
                </div>

                <div className="col footer__contacts">
                    <div className="footer__phone">
                        <a href="tel:+79163403090">+7 (916) 340-30-90</a>  <img className="phone__image" src="/static/img/phone-white.svg" alt=""/>
                    </div>
                    <div className="footer__mail">
                        <a href="mailto:polinamakarova97@gmail.com">polinamakarova97@gmail.com</a> <img className="mail__image" src="/static/img/mail-white.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
