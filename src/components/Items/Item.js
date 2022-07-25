import React from "react"
import {Link} from "react-router-dom"

function item ({id, name, price, image, category}) {
    
    return (
        <div key={id}>
            <h1>{name}/{category}</h1>
            <img classname="item-image" src={image} alt={name}/>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
            <footer>Precio : ${price}</footer>
        </div>
    )
}

export default item
