import {Route, Routes, Link} from 'react-router-dom';

import './header.scss'
import Servises from "../../pages/service/Service";
function Header() {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <div className="container">
                        <div className="header__wrapper-box">
                            <nav className="header__nav">
                                <ul className="header__wrap">
                                    <li className="header__item">
                                        <Link className="header__item-logo" to='/'>VELORETTI</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link className="header__item-link" to='/'>Home</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link className="header__item-link" to='/contact'>Electric</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link className="header__item-link" to='/blog'>City</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link className="header__item-link" to='/service'>Products</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__right-wrapper">
                                <ul className="header__right-wrap">
                                    <li className="header__right-item">
                                        <Link className="header__right-link">en</Link>
                                    </li>
                                    <li className="header__right-item">
                                        <Link className="header__right-link">Login</Link>
                                    </li>
                                    <li className="header__right-item">
                                        <Link className="header__right-link">Cart</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header