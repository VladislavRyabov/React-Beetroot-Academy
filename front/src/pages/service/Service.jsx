import { useQuery } from '@apollo/client';
import { GET_POST } from '../../data/Posts'
import React, {useEffect, useState} from "react";
import Test from "../../component/Test/Test";
import '../../component/Test/Test.scss'
import './service.scss'
import '../../style/main.scss'

import products from '../../img/Homepage-Desktop.webp'
import {Link} from "react-router-dom";

function Service() {
    // const {isLoading, data} = useFetch('http://localhost:1337/graphql')
    const { loading, error, data } = useQuery(GET_POST);
    const Posts = data?.posts.data;

    const [out, setOut] = useState();
    const [option, setOption] = useState([]);
    const [color, setColor] = useState([]);

    useEffect(() => {
        let Option = [];
        data?.posts.data.forEach(item => Option.push(item.attributes.category));
        let newOption = new Set(Option);
        setOption([...newOption]);

        setOut(data?.posts.data);
    }, [data?.posts.data]);

    useEffect(() => {
        let Color = [];
        data?.posts.data.forEach(item => Color.push(item.attributes.color));
        let newColor = new Set(Color);
        setColor([...newColor]);

    }, [data?.posts.data]);

    if (loading) return <h1>...Loading</h1>
    if (error) return <h1>Error: {error.message}</h1>
    console.log(data?.posts.data);

    let inpValue = React.createRef();
    function changeState(event) {
        let newArr = [];
        data?.posts.data.map((item) => {
            let lowItemName = item.attributes.title.toLowerCase();
            let lowItemValue = inpValue.current.value.toLowerCase();
            //
            if(lowItemName.indexOf(lowItemValue) >= 0) {
                newArr.push(item);
            }
            setOut(newArr);
        })
    }

    function selectChange(event) {
        let newOpRick = [];
        data?.posts.data.map(item => {
            if (item.attributes.category === event.target.value) {
                newOpRick.push(item)
                setOut(newOpRick)
            } else if (item.attributes.category === 'All') {
                setOut(data?.posts.data)
            }
        })
    }

    function vladislav(event) {
        let newOpRick = [];
        data?.posts.data.map(item => {
            if (item.attributes.color === event.target.value) {
                newOpRick.push(item)
                setOut(newOpRick)
            }
        })
    }

    return (
        <>
            {/*<section className="products">*/}
            {/*    <img className="products__background" src={products} alt=""/>*/}
            {/*    <h1 className="products__title">Products</h1>*/}
            {/*</section>*/}
            <section className="offer offer-products">
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
            <div className="container">
                <nav className="rick-nav">
                    <div className="rick-select-row">
                        <select onChange={selectChange}>
                            <option value="All">Category</option>
                            {option.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
                        <select onChange={vladislav}>
                            <option value="All">Color</option>
                            {color.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
                    </div>
                    <div className="rick-search-row">
                        <input type="text" ref={inpValue}/><button onClick={changeState}>Search</button>
                    </div>
                </nav>
                <div className="cart-ul">
                    {out?.map(item => <Test key={item.id} item={item}/>)}
                </div>
            </div>
        </>
    )
}
export default Service