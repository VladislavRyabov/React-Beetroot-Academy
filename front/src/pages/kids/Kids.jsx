import React from "react";
import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";

import './kids.scss'
import '../../style/main.scss'
import '../../style/horizontal.scss'
import '../../style/picture.scss'
import '../../style/offer-button.scss'

import City4 from "../../img/City-Image-4.webp";

import Kids1 from "../../img/Kids-1.webp";
import Kids2 from "../../img/Kids-2.webp";
import Kids3 from "../../img/Kids-3.webp";

import KidsBg from "../../img/Kids-BG.webp";
import KidsBgM from "../../img/Kids-BG-Mobile.webp";

import KidsGre1 from "../../img/Kids-Grey-1.webp";
import KidsGre2 from "../../img/Kids-Grey-2.webp";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Multiple1 from "../../img/Multiple-1.webp";
import Multiple2 from "../../img/Multiple-2.webp";
import Horizontal1 from "../../img/Horizontal-Mobile.webp";
import Horizontal from "../../img/Horizontal-Desktop.webp";
import CityBike1 from "../../img/City/City-bike-1.png";
import CityBike2 from "../../img/City/City-bike-2.png";
import CityBike7 from "../../img/City/City-bike-7.png";
import CityBike3 from "../../img/City/City-bike-3.png";
import CityBike4 from "../../img/City/City-bike-4.png";
import CityBike5 from "../../img/City/City-bike-5.png";
import CityBike6 from "../../img/City/City-bike-6.png";

import kids1 from "../../img/Kids/kids-1.png";
import kids2 from "../../img/Kids/kids-2.png";
import kids3 from "../../img/Kids/kids-3.png";
import kids4 from "../../img/Kids/kids-4.png";
function Kids() {
    return (
        <>
            <section className="offer offer-kids">
                <div className="offer__wrap container">
                    <Link className="offer-button" to='/blog'>
                        <div className="offer-button__wrap offer-button__wrap-white offer-button__wrapper offer-button__wrapper-dark-grey">
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
                <h1 className="picture__title">Ready to rumble?</h1>
                <div className="picture__wrapper picture__wrapper-reverse">
                    <div className="picture__left">
                        <img className="picture__img-1 img-1" src={Kids1} alt="forever"/>
                        <picture>
                            <source srcSet={Kids3} media="(max-width: 850px)"/>
                            <img className="picture__img-3" src={Kids3} alt="forever"/>
                        </picture>
                    </div>
                    <div className="picture__right">
                        <img className="picture__img-2" src={Kids2} alt="forever"/>
                    </div>
                    <p className="picture__text">
                        Specially crafted for the next generation of explorers, our kids bikes are the perfect start to a
                        balanced life. With bikes ranging from the age of 1.5 - 8 years, we've got everything to grow with your little ones.
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
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 2.5,
                            },
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link className="cart-bike-kids" to='/products'>
                                <img className="cart-bike__img" src={kids4} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caferacer Men</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={kids3} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféracer Women</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={kids2} alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Berlin</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className="cart-bike" to='/products'>
                                <img className="cart-bike__img" src={kids1  } alt="forever"/>
                                <div className="cart-bike__info">
                                    <h2 className="cart-bike__title">Caféracer Women</h2>
                                    <h4 className="cart-bike__title">399$</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="horizontal">
                <h3 className="horizontal__title horizontal__title-width">
                    A life filled with adventures starts here.
                </h3>
                <picture>
                    <source srcSet={KidsBgM} media="(max-width: 850px)"/>
                    <img className="horizontal__img" src={KidsBg} alt="forever"/>
                </picture>
            </section>
            <section className="horizontal horizontal-kids">
                <h3 className="horizontal__title horizontal-title-color">
                    From the tiny toddlers and sidewheel heroes - to independent explorers.
                </h3>
            </section>
            <section className="picture picture-padding">
                <div className="container">
                    <div className="picture__wrapper">
                        <div className="picture__left">
                            <img className="picture__img-1" src={KidsGre1} alt="forever"/>
                        </div>
                        <div className="picture__right">
                            <img className="picture__img-2" src={City4} alt="forever"/>
                        </div>
                        <div className="picture__text">
                            See all accessories
                            <p className="picture__text-paragraph">
                                From protective helmets for little heroes
                                to premium saddles for commuting city
                                dwellers, we've got whatever it takes to
                                give your ride a little extra.
                            </p>
                            <Button className="header__button button-color-black" name='Learn more'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Kids