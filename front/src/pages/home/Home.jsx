import Button from "../../component/Button/Button";
import {Link} from "react-router-dom";
import cerImg from "../../img/BMW.jpeg";
import carImgBmw from "../../img/bmw-01.jpeg"
function Home() {
    return (
        <>
            <section>
                <h2>Home page</h2>
                <img src={carImgBmw} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur dicta eligendi esse eveniet
                    pariatur repudiandae saepe sequi, unde vel veritatis voluptates. At dolore ipsum obcaecati repellat voluptates?
                    Aliquam aut consequuntur culpa cum dicta doloremque et fuga impedit labore minima, officiis porro ratione rem
                    soluta suscipit tenetur unde voluptas voluptates?
                </p>
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
export default Home