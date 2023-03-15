import {Route, Routes} from 'react-router-dom';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";

import './style/main.scss';
function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Blog' element={<Blog/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Service' element={<Service/>}/>
                    <Route path='*' element={<h1>404</h1>}/>
                </Routes>
                {/*<Article/>*/}
            </main>
            <Footer/>
        </>
    )
}

export default App