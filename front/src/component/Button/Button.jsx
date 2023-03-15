
import './button.css'
import {Link} from "react-router-dom";
function Button(props) {
    return (
        <button className={`button ${props.className || ''}`}>{props.name || "Start"}</button>
    )
}
export default Button