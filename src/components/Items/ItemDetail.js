import React, { useContext, useState}  from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext";

const ItemDetail = ({id, name, description, image, price, stock}) => {

    const [cant, setCant] = useState(0)
    const resultContext = useContext(cartContext)
    
    const onAdd = (cantidadSeleccionada) => {
        setCant(cantidadSeleccionada)
        resultContext.agregarProducto({id, name, price, image}, cantidadSeleccionada) 
    }

    return (
        <div>
            <h1>{name}</h1>
            <img className="detail-image" src={image} alt={`${id} - ${name}`}/>
            <h2>{description}</h2>
            <h2><b>${price}</b></h2>
            {cant ? <Link to="/carrito">Al carrito</Link> : <ItemCount Stock={stock} Initial={0} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail