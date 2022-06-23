import { Link } from "react-router-dom"
import Cart from "./cartWidget"

const Carrito = () =>{
    return (
    <div>
        <h1>Carrito</h1>
        <Cart/>
        <Link to="/checkout">procede a la compra</Link>
    </div>
    )
}
 export default Carrito