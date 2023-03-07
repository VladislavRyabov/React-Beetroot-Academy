import {Users} from "../../data/Users";
import List from "../../component/List/List";
import "../../component/List/list.scss"

export default function App() {
    const newObjIf = Users.map(props => (
        <List key={props.id} img={props.img} name={props.name} description={props.description} location={props.location} price={props.price}/>
    ))
    return (
        <div className="container">
            <ul className="list">
                {newObjIf}
            </ul>
        </div>
    );
}