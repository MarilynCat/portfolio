import React from 'react';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x:0,
        opacity: 1,
        transaction: {delay: custom * 0.2},
    }),
}

export const Home = () => {
    return (
        <main
            className="home">
            <div className="social">
                <div className="vl-social"></div>
                <div className="social-items">
                    <a className="social-item1" href="https://t.me/p_makarova97" > <img src="/static/img/send-01.svg" alt="" /></a>
                    <a className="social-item2" href="mailto:polinamakarova97@gmail.com" > <img src="/static/img/mail-03.svg" alt="" /></a>
                    <a className="social-item3" href="tel:+79163403090" > <img src="/static/img/phone.svg" alt="" /></a>
                    <img className="social-item4" src="/static/img/" alt=""/>
                </div>
                <div className="vl-social2"></div>
            </div>
            <div className="vl"></div>
            <div className="container home">
                <div className="row">
                    <div className="col-10 home-block">
                        <div className="gl-top"></div>
                        <div className="gl-top2"></div>
                        <a href="#contacts"><button type="submit" className="btn-default mb-3 button1">Написать</button></a>
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
                        <h2 className="home__title2">и веб-дизайнер</h2>
                        <div className="gl-end"></div>
                    </div>
                </div>
            </div>

            <div className="container about">
                <div className="row">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        className="col-10 about-block">
                        <motion.h2  variants={textAnimation} id="about" className="about__title">
                            Обо мне
                        </motion.h2>
                        <div className="gl-skills-end"></div>
                    </motion.div>
                    <div className="col-12 about__text">
                        <p>Привет, меня зовут Полина!</p>

                        <p>Я фронтенд-разработчик самоучка. Только начинаю свой путь, открыта ко всему новому и интересному. Придираюсь к каждому пикселю во время верстки и стремлюсь к совершенству.</p>

                        <p>Так же увлекаюсь веб-дизайном для развития чувства прекрасного и насмотренности. Уверена, что это поможет лучше понимать желания клиента и всегда попадать в точку.</p>
                    </div>
                </div>

            </div>

            <div className="container skills">
                <div className="row">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        className="col-10 skills-block">
                        <div className="gl-projects-top"></div>
                        <motion.h2  variants={textAnimation} className="skills__title">
                            Навыки
                        </motion.h2>
                        <div className="gl-skills-end"></div>
                    </motion.div>
                </div>
                <div className="row skills-list">
                    <div className="col-md-3 col-sm-6 skills-items skills-col">
                        <h3>HTML5</h3>
                        <img src="/static/img/html-skill.png" alt=""/>
                        <h3>React</h3>
                        <img src="/static/img/react-skill.png" alt=""/>
                    </div>
                    <div className="col-md-3 col-sm-6  skills-col">
                        <h3>CSS3</h3>
                        <img src="/static/img/css-skill.png" alt=""/>
                        <h3>Bootstrap</h3>
                        <img src="/static/img/bootstrap-skill.png" alt=""/>
                    </div>
                    <div className="col-md-3 col-sm-6  skills-col">
                        <h3>JavaScript</h3>
                        <img src="/static/img/js-skill.png" alt=""/>
                        <h3>Figma</h3>
                        <img src="/static/img/figma-skill.png" alt=""/>
                    </div>
                    {/*<div className="col-10 button-skills">*/}
                    {/*    <Link to="/about"><button type="submit" className="btn-default mb-3 button2">Подробнее</button></Link>*/}

                    {/*</div>*/}
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        className="col-10 projects-block">
                        <div className="gl-projects-top"></div>
                        <motion.h2 variants={textAnimation} id="portfolio" className="projects__title">
                            Проекты
                        </motion.h2>
                        <div className="gl-skills-end"></div>
                    </motion.div>
                    <div className="col-3 project-block project1">
                        <img src="/static/img/btickets.jpg" alt=""/>
                        <div className="project-tech">
                            <p>HTML CSS JavaScript Bootstrap</p>
                        </div>
                        <h2>Btickets</h2>
                        <p className="project-description">Верстка лендинга по готовому макету, адаптив.</p>
                        <a href="https://btickets.ru/"><button type="submit" className="btn-default mb-3 button3">Посмотреть</button></a>
                    </div>
                    <div className="col-3 project-block">
                        <img src="/static/img/kskpeople.jpg" alt=""/>
                        <div className="project-tech">
                            <p>Figma React JavaScript Bootstrap</p>
                        </div>
                        <h2>KSKPeople</h2>
                        <p className="project-description">Разработка прототипа и дизайна, верстка сайта, адаптив.</p>
                        <a href="http://kskpeople.com/"><button type="submit" className="btn-default mb-3 button3">Посмотреть</button></a>
                    </div>
                    <div className="col-3 project-block">
                        <img src="/static/img/chat.jpg" alt=""/>
                        <div className="project-tech">
                            <p>Figma</p>
                        </div>
                        <h2>Мессенджер</h2>
                        <p className="project-description">Редизайн мессенджера для учебного проекта.</p>
                        <a href="https://www.figma.com/file/zDm8EjBv9SuuDB3RkoDu3Z/Chat-(Copy)?node-id=0-1&t=uFvnEU1h1tCeMvMC-0"><button type="submit" className="btn-default mb-3 button3">Посмотреть</button></a>
                    </div>
                    <div className="col-3 project-block project1">
                        <img src="/static/img/euro-avto.jpg" alt=""/>
                        <div className="project-tech">
                            <p>HTML CSS JavaScript Bootstrap</p>
                        </div>
                        <h2>EURO-AVTO</h2>
                        <p className="project-description">Верстка сайта без макета, адаптив.</p>
                        <a href="https://euro-avto.pro/"><button type="submit" className="btn-default mb-3 button3">Посмотреть</button></a>
                    </div>
                    <div className="col-3 project-block">
                        <img src="/static/img/2048.jpg" alt=""/>
                        <div className="project-tech">
                            <p>Figma</p>
                        </div>
                        <h2>Игра 2048</h2>
                        <p className="project-description">Разработка дизайна игры для учебного проекта.</p>
                        <a href="https://www.figma.com/file/Ksm0Tz1HyZ6eDLALzIcqb6/2048?node-id=4-113&t=kFM9gAQOI184y0Z3-0"><button type="submit" className="btn-default mb-3 button3">Посмотреть</button></a>
                    </div>
                </div>
            </div>

            <div className="container contacts">
                <div className="row">
                    <div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.2}}
                        className="col-10 contacts-block">
                        <div className="gl-projects-top"></div>
                        <motion.h2 id="contacts" className="contacts__title">
                            Контакты
                        </motion.h2>
                        <div className="gl-skills-end"></div>
                    </div>
                    <div className="col-md-8 col-sm-12 contacts__text">
                        <p> В данный момент ориентирована на фриланс и берусь практически за любую работу ради профессионального роста и саморазвития. Но так же открыта к другим формам трудовой деятельности.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 contacts-items">
                        <a className="contacts-item1" href="https://t.me/p_makarova97" >Telegram<img src="/static/img/send-01.svg" alt="" /></a>
                        <a className="contacts-item2" href="https://wa.me/+79163403090" >WhatsApp<img src="/static/img/wa.svg" alt="" /></a>
                        <a className="contacts-item3" href="https://vk.com/p_makarova97" >ВКонтакте<img src="/static/img/vk.svg" alt="" /></a>
                        <a className="contacts-item4" href="https://github.com/MarilynCat" >GitHub<img src="/static/img/GitHub.svg" alt="" /></a>
                    </div>
                </div>

            </div>
        </main>
    )


}

