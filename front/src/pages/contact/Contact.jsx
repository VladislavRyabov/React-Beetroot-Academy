import Button from "../../component/Button/Button";
import cerImg from "../../img/BMW.jpeg";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <>
            <section>
                <h2>Contact page</h2>
                <div className="box">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, optio.</h2>
                    <Button name="Hello"/>
                    <Button/>
                    <img src={cerImg} alt=""/>
                </div>
                <Button className="header__button" name='Open'/>
                <Link to='/blog'>Blog</Link>
            </section>
        </>
    )
}
export default Contact