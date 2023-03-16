import {Route, Routes} from 'react-router-dom';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Electric from "./pages/electric/Electric";
import Products from "./pages/products/Products";

import './style/main.scss';
function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/City' element={<City/>}/>
                    <Route path='/Electric' element={<Electric/>}/>
                    <Route path='/Products' element={<Products/>}/>
                    <Route path='*' element={<h1>404</h1>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App