import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => (
    <main className="home">
        <div className="social">
            <div className="vl-social"></div>

            <div className="vl-social2"></div>
        </div>
        <div className="vl"></div>
        <div className="container">
            <div className="row">
                <div className="col-10 home-block">
                    <div className="gl-top"></div>
                    <div className="gl-top2"></div>
                    <Link to="/contacts"><button type="submit" className="btn-default mb-3 button1">Написать</button></Link>
                    <div className="home-block__image" >
                        <img src="/static/Ellipse-photo.png" alt=""/>
                    </div>
                    <div className="home-block__image2">
                        <img src="/static/Ellipse-green.png" alt=""/>
                    </div>
                    <h1 className="home__title">
                        Кто я?<br/>
                        Frontend-разработчик
                    </h1>
                    <div className="gl-end"></div>
                </div>
            </div>
        </div>
    </main>

)

