import React , {useContext} from "react";
import { NavLink } from "react-router-dom";
import { contexto } from "./CartContext";

const CartWidget = () => {

    //const resultado = useContext(contexto)


    return (
        <NavLink to ="/carrito">carrito</NavLink> 
    )
}

export default CartWidget