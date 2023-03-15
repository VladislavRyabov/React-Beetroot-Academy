import React from "react";
export default function Test({item}) {
    function singlePost(item) {
        console.log(item)
    }
    return (
        <div onClick={() => {singlePost(item)}} className="cart">
            <img src={`http://localhost:1337${item.attributes.img.data.attributes.url}`} alt="" className="cart__img"/>
            <h2 className="cart__title">{item.attributes.title}</h2>
            {/*<h4 className="cart__title">{item.attributes.description}</h4>*/}
            <h4 className="cart__title">{item.attributes.price}</h4>
            <h6 className="cart__title">{item.attributes.color}</h6>
            {/*<p>category: {item.attributes.category}</p>*/}
        </div>
    )
}