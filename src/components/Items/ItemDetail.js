import React  from "react";
import { useState } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const [cant, setCant] = useState(false)
    
    const onAdd = (cantidadSeleccionada) => {
        setCant(cantidadSeleccionada)
        if (cantidadSeleccionada >0)
            setCant(true)
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img className="detail-image" src={item.imagen} alt={item.id}/>
            <h2>{item.description}</h2>
            <h2><b>${item.price}</b></h2>
            {cant ? <Link to="/carrito">Al carrito</Link> : <ItemCount Stock={item.stock} Initial={0} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail