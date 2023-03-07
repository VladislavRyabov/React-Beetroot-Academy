import './list.scss'
export default function List(props) {
    return (
        <li className='list__item'>
            <img className="list__img" src={props.img} alt=""/>
            <h2 className="list__title">{props.name}</h2>
            <p className="list__text">{props.description}</p>
            <p className="list__text">{props.location}</p>
            <p className="list__text">{props.price}</p>
        </li>
    )
}