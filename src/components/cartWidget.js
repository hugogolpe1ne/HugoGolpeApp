import React , {useContext} from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "./CartContext";
import style from "./CartWidget.css"

const CartWidget = () => {
    const resultContext = useContext(cartContext);
  
    return (   
      <NavLink to="/carrito">
        <span className={style.cart + ' material-symbols-outlined'}>
        shopping_cart_checkout
        </span>
        {resultContext.cantidadTotal}
      </NavLink>
    )
  };

export default CartWidget