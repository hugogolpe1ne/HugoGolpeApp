import React , {useContext} from "react";
import { NavLink } from "react-router-dom";
import { contexto } from "./CartContext";

const CartWidget = () => {

    const resultado = useContext(contexto)

    console.log(resultado)

    return (
        <NavLink to ="/carrito">carrito {resultado.cantidad_total}</NavLink> 
    )
}

export default CartWidget