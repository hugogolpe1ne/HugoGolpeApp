import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({id, name, price, imagen, stock, description}) => {

    const onAdd = (cantidad) => {
        if (cantidad > 1) {
            console.log("la cantidad actual es de :" + cantidad)
        } else {
            console.log("no se hicieron cambion")
        }
    }

    return (
        <div>
            <h1>{name}</h1>
            <img className="detail-image" src={imagen} alt={id}/>
            <h2>{description}</h2>
            <h2><b>${price}</b></h2>
            <ItemCount Stock={stock} Initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail