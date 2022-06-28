import React  from "react";
import { useState } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { contador } from "./ItemCount"


const ItemDetail = ({id, name, price, imagen, stock, description}) => {

    const [cant, setCant] = useState(false)

    console.log(cant)
    
    const onAdd = (cantidadSeleccionada) => {
        setCant(cantidadSeleccionada)
        if (cantidadSeleccionada >0)
            setCant(true)
    }

    return (
        <div>
            <h1>{name}</h1>
            <img className="detail-image" src={imagen} alt={id}/>
            <h2>{description}</h2>
            <h2><b>${price}</b></h2>
            {cant ? <Link to="/carrito">Terminar Compra</Link> : <ItemCount Stock={stock} Initial={0} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail