import React from "react"



function GroceryItem(props) {
    return (

        <li
            className="list-item"
            key={props.id}
            value={props.title}
            
            // onClick = {
            //     alert ("Click Click BOOM" + " " + props.id)
            // }
            
        >
            <span>{props.title} </span>
        </li>

    )
}

export default GroceryItem