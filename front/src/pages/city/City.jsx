import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";
import './city.scss'
import '../../style/main.scss'
import '../../style/horizontal.scss'
import '../../style/picture.scss'
import '../../style/offer-button.scss'

import City1 from '../../img/City-Image-1.webp'
import City2 from '../../img/City-Image-2.webp'
import City3 from '../../img/City-Image-3.webp'
import City4 from '../../img/City-Image-4.webp'

import Multiple1 from '../../img/Multiple-1.webp'
import Multiple2 from '../../img/Multiple-2.webp'

import Horizontal from '../../img/Horizontal-Desktop.webp'
import Horizontal1 from '../../img/Horizontal-Mobile.webp'

import Company1 from '../../img/Company-Desktop.webp'
import Company2 from '../../img/Company-Mobile.webp'

import CityBike1 from '../../img/City/City-bike-1.png'
import CityBike2 from '../../img/City/City-bike-2.png'
import CityBike3 from '../../img/City/City-bike-3.png'
import CityBike4 from '../../img/City/City-bike-4.png'
import CityBike5 from '../../img/City/City-bike-5.png'
import CityBike6 from '../../img/City/City-bike-6.png'
import CityBike7 from '../../img/City/City-bike-7.png'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


function City() {
    return (
        <>
            <section className="offer offer-blog">
                <div className="offer__wrap container">
                    <Link className="offer-button" to='/blog'>
                        <div className="offer-button__wrap offer-button__wrap-white offer-button__wrapper offer-button__wrapper-grey">
                            <div className="offer-button__left">
                                <p className="offer-button__text">Electric</p>
                                <p className="offer-button__color offer-button__color-white">Discover Ivy & Ace</p>
                            </div>
                            <div className="offer-button__right offer-button__right-white"></div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="picture container">
                <h1 className="picture__title">Forever Forward.</h1>
                <div className="picture__wrapper">
                    <div className="picture__left">
                        <img className="picture__img-1 img-1" src={City1} alt="forever"/>
                        <picture>
                            <source srcSet={City4} media="(max-width: 850px)"/>
                            <img className="picture__img-3" src={City3} alt="forever"/>
                        </picture>
                    </div>
                    <div className="picture__right">
                        <img className="picture__img-2" src={City2} alt="forever"/>
                    </div>
                    <p className="picture__text">
                        Our women's bicycles are for everyone who likes to combine style with pace (and grace).
                        Available for women are the Caféracer and the Robyn, but who says women can't ride the Berlin? Not us!
                    </p>
                </div>
            </section>
            <section className="section-swiper">

                <div className="blog__swiper">
                    <Swiper
                        centeredSlides={false}
                        spaceBetween={80}
                        grabCursor={false}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2.5,
                            },
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike1} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caferacer Men</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike2} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféracer Women</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike7} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Berlin</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike3} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféracer Women</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike4} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Robyn</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike5} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféracer Women</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={CityBike6} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféchaser Men</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="picture container">
                <div className="picture__wrapper picture__wrapper-reverse">
                    <div className="picture__left">
                        <img className="picture__img-1 img-1" src={Multiple1} alt="forever"/>
                        <picture>
                            <source srcSet={Multiple1} media="(max-width: 850px)"/>
                            <img className="picture__img-3" src={Multiple2} alt="forever"/>
                        </picture>
                    </div>
                    <div className="picture__right">
                        <img className="picture__img-2" src={City4} alt="forever"/>
                    </div>
                    <p className="picture__text">
                        Whether you like it easy or fast, we got both. Our men's range of bicycles combine modern clean design
                        with great quality, so they're perfect for your daily city commute.
                    </p>
                </div>
                <h1 className="picture__title">City bikes for everyone.</h1>
            </section>
            <section className="horizontal">
                <h3 className="horizontal__title">Making your daily commute the best part of your day.</h3>
                <picture>
                    <source srcSet={Horizontal1} media="(max-width: 850px)"/>
                    <img className="horizontal__img" src={Horizontal} alt="forever"/>
                </picture>
            </section>
            <section className="company-bikes">
                <div className="company-bikes__wrap">
                    <h1 className="company-bikes__title">Company bikes</h1>
                    <p className="company-bikes__text">
                        Custom bikes for your team. We help get your business moving.
                    </p>
                    <Button className="header__button button-color-white" name='Learn more'/>
                </div>
                <picture>
                    <source srcSet={Company2} media="(max-width: 850px)"/>
                    <img className="company-bikes__img" src={Company1} alt="forever"/>
                </picture>
            </section>
        </>
    )
}
export default City