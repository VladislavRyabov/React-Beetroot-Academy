import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";
import React from "react";
import './contact.scss'
import '../../style/main.scss'
import forever from '../../img/Forever-forward-Desktop.webp'
import frame from '../../img/Frame.webp'
import frame01 from '../../img/Frame01.webp'
import velo from '../../img/veloretti.mp4'
import section from '../../img/sectionQV.jpg'

function Contact() {
    return (
        <>
            <section className="offer offer-electric">
                <div className="offer__wrap container">
                    <Link className="offer-button" to='/blog'>
                        <div className="offer-button__wrap offer-button__wrap-white offer-button__wrapper ">
                            <div className="offer-button__left">
                                <p className="offer-button__text">Electric</p>
                                <p className="offer-button__color offer-button__color-white">Discover Ivy & Ace</p>
                            </div>
                            <div className="offer-button__right offer-button__right-white test"></div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="electric">
                <img className="electric__img" src={forever} alt="forever"/>
                <div className="electric__wrapper">
                    <div className="electric__wrap-left electric__wrap-left-max">
                        <img className="electric__img" src={frame} alt="forever"/>
                    </div>
                    <div className="electric__wrap-right">
                        <div className="electric__wrap-info">
                            <h2 className="electric__title">The next generation of electric biking.</h2>
                            <p className="electric__text">
                                Modern simplicity, impeccable design, all the
                                features you need. Discover more about the Ivy and Ace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="phone">
                <div className="container">
                    <div className="phone__wrap">
                        <div className="phone__info">
                            <p className="phone__text">Everything in</p>
                            <p className="phone__text">One App.</p>
                        </div>
                        <Link className="offer-button" to='/blog'>
                            <div className="offer-button__wrap offer-button__wrap-black offer-button__wrap-phone">
                                <div className="offer-button__left">
                                    <p className="offer-button__text">App</p>
                                    <p className="offer-button__color offer-button__color-black">Discover now</p>
                                </div>
                                <div className="offer-button__right offer-button__right-black"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="electric-ivy-ace">
                <img className="electric-ivy-ace__img" src={section} alt="electric-ivy-ace"/>
            </section>
            <section className="electric">
                <div className="electric__wrapper">
                    <div className="electric__wrap-right">
                        <div className="electric__wrap-info">
                            <h2 className="electric__title">Test ride our Electric Ivy or Ace</h2>
                            <p className="electric__text">
                                We understand choosing a new bike can be difficult. Swing by our
                                brand store and see our Ivy or Ace in real-life. And while you're at it,
                                give them a spin to see how it feels.
                            </p>
                        </div>
                    </div>
                    <div className="electric__wrap-left electric__wrap-left-min">
                        <video muted="muted" autoPlay="autoplay" loop width="100%" className="electric__img">
                            <source src={velo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </section>
            <section className="electric">
                <div className="electric__wrapper">
                    <div className="electric__wrap-left electric__wrap-left-max">
                        <img className="electric__img" src={frame01} alt="forever"/>
                    </div>
                    <div className="electric__wrap-right">
                        <div className="electric__wrap-info">
                            <h2 className="electric__title">Ride carefree.</h2>
                            <p className="electric__text">
                                We've got you covered thanks to our Qover x Veloretti insurance plan.
                                This insurance covers you against theft, helps you in case of any problems,
                                and fixes any damage made on the bike.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact