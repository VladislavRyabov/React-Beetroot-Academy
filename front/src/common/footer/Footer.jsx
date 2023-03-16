import './footer.scss'
import {Link} from "react-router-dom";
import Favicon from "react-favicon";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__logo">
                    <p className="footer__logo-title">VELORETTI</p>
                </div>
                <div className="footer__wrapper">
                    <div className="container">
                        <div className="footer__wrapper-box">
                            <div className="footer__wrap-left">
                                <div className="footer__wrap-left-category">
                                    <p className="footer__left-category-text footer-title">
                                        Explorer
                                    </p>
                                    <ul>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text" to='/'>Home</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text" to='/contact'>Electric</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text" to='/blog'>City</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text" to='/service'>Products</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__wrap-left-category">
                                    <p className="footer__left-category-text footer-title">
                                        About
                                    </p>
                                    <ul>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">About us</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Jobs</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Reviews</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Journal</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__wrap-left-category">
                                    <p className="footer__left-category-text footer-title">
                                        Help
                                    </p>
                                    <ul>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">FAQ</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Shipping</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Returns</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Warranty</Link>
                                        </li>
                                        <li className="footer__left-item">
                                            <Link className="footer__left-item-link footer-text">Assembly</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__wrap-right">
                                <h4 className="footer__right-title footer-title">We're here to help.</h4>
                                <h4 className="footer__right-title footer-title mr-tod">Customer Care</h4>
                                <p className="footer__right-text footer-text">Monday to Friday 10am - 5pm</p>
                                <Link className="footer__right-phone footer-text" to="tel:9876543210">9876543210</Link>
                                <button className="footer__right-button footer-text" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email: support@veloretti.com</button>
                                <p className="footer__right-text footer-text">Social media: Facebook & Instagram</p>
                                <h4 className="footer__right-title footer-title mr-tod">Brandstore Amsterdam</h4>
                                <p className="footer__right-text footer-text">Monday to Friday 9:30am - 6pm</p>
                                <p className="footer__right-text footer-text">Saturday 10am - 5:30pm</p>
                                <p className="footer__right-text footer-text">Sunday 12am - 5pm</p>
                                <p className="footer__right-text footer-text mr-tod">Van Woustraat 72, Amsterdam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer