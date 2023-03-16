import React from "react";
import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";
import home from '../../img/home.mp4'

import Homepage from "../../img/Homepage01.webp";

import './home.scss'
import '../../style/main.scss'
import velo from "../../img/veloretti.mp4";

function Home() {
    return (
        <>
            <section className="offer offer-home">
                {/*<video muted="muted" autoPlay="autoplay" loop width="100%" className="">*/}
                {/*    <source src={home} type="video/mp4"/>*/}
                {/*</video>*/}
                <div className="offer__wrap container">
                    <Link className="offer-button" to='/blog'>
                        <div className="offer-button__wrap offer-button__wrap-white offer-button__wrapper">
                            <div className="offer-button__left">
                                <p className="offer-button__text">Electric</p>
                                <p className="offer-button__color offer-button__color-white">Discover Ivy & Ace</p>
                            </div>
                            <div className="offer-button__right offer-button__right-white">

                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="container">

                <h2>Home page</h2>
                <Button className="header__button" name='Discover Ivy & Ace'/>
                <Link to='/blog'>Blog</Link>
            </section>
        </>
    )
}
export default Home