import React from "react"

function ShoppingCartItem(props) {
    return (

        <li
            className="list-item"
            key={props.id}
            value={props.title}
        >
            <span>{props.title} </span>
        </li>

    )
}

export default ShoppingCartItem