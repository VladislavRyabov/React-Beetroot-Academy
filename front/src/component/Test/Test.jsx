import "../../component/List/list.scss"
import React from "react";
import { Link } from 'react-router-dom';
export default function Test({item}) {
    function singlePost(item) {
        console.log(item)
        // return <Redirect to='/RickAndMorty'/>
        // return <Redirect to={RickAndMorty}/>
    }
    return (
        // <Link className="link" to="/TestInfo">
        //     <div className="cart">
        //         <h2 className="cart__title">{item.attributes.Title}</h2>
        //         <img src={`http://localhost:1337${item.attributes.img.data.attributes.url}`} alt=""/>
        //         <h4 className="cart__title">{item.attributes.description}</h4>
        //         <p>category: {item.attributes.category}</p>
        //     </div>
        // </Link>
        <div onClick={() => {singlePost(item)}} className="cart">
            <h2 className="cart__title">{item.attributes.Title}</h2>
            <img src={`http://localhost:1337${item.attributes.img.data.attributes.url}`} alt=""/>
            <h4 className="cart__title">{item.attributes.description}</h4>
            <p>category: {item.attributes.category}</p>
        </div>
    )
}