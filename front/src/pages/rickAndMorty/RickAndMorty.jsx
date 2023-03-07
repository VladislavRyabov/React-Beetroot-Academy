import React, {useState, useEffect} from "react";

import useFetch from "react-fetch-hook";
import './rickAndMorty.scss'
import CartRick from "../../component/Cart/Cart";
function RickAndMorty() {
    const {isLoading, data} = useFetch('https://rickandmortyapi.com/api/character?page=2')
    // console.log(data?.results)

    const [out, setOut] = useState();
    const [option, setOption] = useState([]);

    useEffect(() => {
        //species
        let Option = []
        data?.results.forEach(item => Option.push(item.species))

        let newOption = new Set(Option)

        setOption([...newOption])
        console.log(Option)

        setOut(data?.results)
    }, [data?.results])

    let inpValue = React.createRef()
    function changeState(event) {
        let newArr = []
        data?.results.map((item) => {
            let lowItemName = item.name.toLowerCase();
            let lowItemValue = inpValue.current.value.toLowerCase();
            //
            if(lowItemName.indexOf(lowItemValue) >= 0) {
                newArr.push(item)
            }
            setOut(newArr)
        })
        console.log(inpValue.current.value)
    }



    function selectChange(event) {
        let newOpRick = []
        data?.results.map(item => {
            // item.species === event.target.value && newOpRick.push(item)
            if (item.species === event.target.value) {
                newOpRick.push(item)
                setOut(newOpRick)
            } else if (item.species === 'All') {
                setOut(data?.results)
            }
        })
    }

    return isLoading ? <h1>...isLoading</h1> : (
        <>
            <section>
                <h2>RickAndMorty</h2>

                <nav className="rick-nav">
                    <div className="rick-select-row">
                        <select onChange={selectChange}>
                            <option value="All">All</option>
                            {option.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
                    </div>
                    <div className="rick-search-row">
                        <input type="text" ref={inpValue}/><button onClick={changeState}>Search</button>
                    </div>
                </nav>
                <div className="cards-out">
                    {out?.map(item => <CartRick key={item.id} item={item}/>)}
                </div>
            </section>
        </>
    )
}
export default RickAndMorty