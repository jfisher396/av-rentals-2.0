import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

function Card(props) {
    return (
        <div className="Card card" style={{width: "18rem"}}>
            <img src={props.image1} className="item-image card-img-top" alt={props.model} />
            <div className="card-description card-body">
                <h5 className="card-title">{props.model}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="bold">{props.label1}</span>{props.indicator}{props.label2}</li>
                <li className="list-group-item"><span className="bold">{"Daily rate: "}</span>{"$"}{props.price}</li>
            </ul>
            <div className="card-links card-body">
                <Link to="/" href="#" className="card-link">Card link</Link>
                <Link to="/" href="#" className="card-link">Another link</Link>
            </div>
        </div>
    )
}

export default Card