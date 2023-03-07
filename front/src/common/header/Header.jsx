import {Route, Routes, Link} from 'react-router-dom';

import './header.scss'
import Servises from "../../pages/service/Service";
function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__wrap">
                            <li className="header__item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/available'>Available</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/service'>Service</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/rickAndMorty'>RickAndMorty</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header