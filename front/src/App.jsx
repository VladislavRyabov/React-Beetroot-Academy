import {Route, Routes} from 'react-router-dom';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Article from "./common/article/Article";
import Service from "./pages/service/Service";
import Available from "./pages/available/Available"

import './style/main.scss';
import RickAndMorty from "./pages/rickAndMorty/RickAndMorty";
function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <main>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Blog' element={<Blog/>}/>
                        <Route path='/Contact' element={<Contact/>}/>
                        <Route path='/Available' element={<Available/>}/>
                        <Route path='/Service' element={<Service/>}/>
                        <Route path='/RickAndMorty' element={<RickAndMorty/>}/>
                        <Route path='*' element={<h1>404</h1>}/>
                    </Routes>
                    {/*<Article/>*/}
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App