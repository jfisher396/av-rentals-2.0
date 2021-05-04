import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

function Card(props) {
    return (
        <div className="Card card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.model} />
            <div className="card-body">
                <h5 className="card-title">{props.model}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul> */}
            <div className="card-body">
                <Link to="/" href="#" className="card-link">Card link</Link>
                <Link to="/" href="#" className="card-link">Another link</Link>
            </div>
        </div>
    )
}

export default Card