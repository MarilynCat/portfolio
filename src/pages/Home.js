import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => (
    <main className="home">
        <div className="social">
            <div className="vl-social"></div>
            <div className="social-items">
                <a className="social-item1" href="https://t.me/p_makarova97" > <img src="/static/img/send-01.svg" alt="" /></a>
                <a className="social-item2" href="mailto:polinamakarova97@gmail.com" > <img src="/static/img/mail-03.svg" alt="" /></a>
                <a className="social-item3" href="tel:+79163403090" > <img src="/static/img/phone.svg" alt="" /></a>
            </div>
            <div className="vl-social2"></div>
        </div>
        <div className="vl"></div>
        <div className="container home">
            <div className="row">
                <div className="col-10 home-block">
                    <div className="gl-top"></div>
                    <div className="gl-top2"></div>
                    <Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Написать</button></Link>
                    <div className="home-block__image" >
                        <img src="/static/img/Ellipse-photo.png" alt=""/>
                    </div>
                    <div className="home-block__image2">
                        <img src="/static/img/Ellipse-green.png" alt=""/>
                    </div>
                    <h1 className="home__title">
                        Кто я?<br/>
                        Frontend-разработчик
                    </h1>
                    <div className="gl-end"></div>
                </div>
            </div>
        </div>
        <div className="container skills">
            <div className="row">
                <div className="col-10 skills-block">
                    <h2 className="skills__title">
                        Навыки
                    </h2>
                    <div className="gl-skills-end"></div>
                </div>
            </div>
            <div className="row skills-list">
                <div className="col-3 skills-items skills-col">
                    <h3>HTML5</h3>
                    <img src="/static/img/html-skill.png" alt=""/>
                    <h3>React</h3>
                    <img src="/static/img/react-skill.png" alt=""/>
                </div>
                <div className="col-3 skills-col">
                    <h3>CSS3</h3>
                    <img src="/static/img/css-skill.png" alt=""/>
                    <h3>Bootstrap</h3>
                    <img src="/static/img/bootstrap-skill.png" alt=""/>
                </div>
                <div className="col-3 skills-col">
                    <h3>JavaScript</h3>
                    <img src="/static/img/js-skill.png" alt=""/>
                    <h3>Figma</h3>
                    <img src="/static/img/figma-skill.png" alt=""/>
                </div>
                <div className="col-10 button-skills">
                    <Link to="/about"><button type="submit" className="btn-default mb-3 button2">Подробнее</button></Link>

                </div>
            </div>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-10 skills-block">
                    <div className="gl-projects-top"></div>
                    <h2 className="skills__title">
                        Проекты
                    </h2>
                    <div className="gl-skills-end"></div>
                </div>
            </div>
        </div>
    </main>

)

