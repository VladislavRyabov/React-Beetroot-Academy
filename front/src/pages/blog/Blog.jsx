import Button from "../../component/Button/Button";
import cerImg from "../../img/bmw-blac.jpeg";
import {Link} from "react-router-dom";
import './blog.scss'

import {Users} from "../../data/Users";
import List from "../../component/List/List";
import "../../component/List/list.scss"

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
            <section>
                <h2>Blog page</h2>
                <div className="box">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, optio.</h2>
                    <Button name="Hello"/>
                    <Button/>
                    <Button className="header__button" name='Open'/>
                    <Link to='/blog'>Blog</Link>
                </div>
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