import {Route, Routes, Link} from 'react-router-dom';

import './header.scss'
import Servises from "../../pages/products/Products";
function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper-box">
                        <label className="navbar-toggler" htmlFor="toggle">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </label>
                        <div className="header__item">
                            <Link className="header__item-logo" to='/'>VELORETTI</Link>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__wrap">
                                <li className="header__item">
                                    <Link className="header__item-link" to='/'>Home</Link>
                                </li>
                                <li className="header__item">
                                    <Link className="header__item-link" to='/electric'>Electric</Link>
                                </li>
                                <li className="header__item">
                                    <Link className="header__item-link" to='/city'>City</Link>
                                </li>
                                <li className="header__item">
                                    <Link className="header__item-link" to='/products'>Products</Link>
                                </li>
                            </ul>
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
                        </nav>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header