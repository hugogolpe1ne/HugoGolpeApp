import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        productos.map(p =>
        <Item
        id={p.id}
        name={p.name}
        category={p.category}
        imagen={p.imagen}
        description={p.description}
        price={p.price}
        stock={p.stock}
        key={p.id}
        />
        )
    ) }
 
export default ItemList

