import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";
import './blog.scss'

import {isMobile} from 'react-device-detect';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import {useQuery} from "@apollo/client";
import {GET_POST} from "../../data/Posts";
import Test from "../../component/Test/Test";

function Blog() {
    const { loading, error, data } = useQuery(GET_POST);

    const Posts = data?.posts.data.map(item => <SwiperSlide><Test key={item.id} item={item}/></SwiperSlide>)

    if (loading) return <h1>...Loading</h1>
    if (error) return <h1>Error: {error.message}</h1>


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <section className="offer offer-blog">
                <div className="offer__wrap container">
                    <Link className="offer-button" to='/blog'>
                        <div className="offer-button__wrap offer-button__wrap-white offer-button__wrapper">
                            <div className="offer-button__left">
                                <p className="offer-button__text">Electric</p>
                                <p className="offer-button__color offer-button__color-white">Discover Ivy & Ace</p>
                            </div>
                            <div className="offer-button__right offer-button__right-white"></div>
                        </div>
                    </Link>
                </div>
            </section>
            <section>
                <h2>City</h2>
                <div className="blog__swiper">
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper">
                        {Posts}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default Blog