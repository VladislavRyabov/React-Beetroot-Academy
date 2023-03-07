import './article.scss'
import {Users} from "../../data/Users";
import List from "../../component/List/List";
import "../../component/List/list.scss"

export default function Article() {
    const newObjIf = Users.map(props => (
        <List key={props.id} name={props.name} price={props.price}/>
    ))
    return (
        <div className="article">
            <ul className="list">
                {newObjIf}
            </ul>
        </div>
    );
}