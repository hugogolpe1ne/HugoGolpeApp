import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./estilos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import Checkout from "./components/Items/Checkout"

const App = () => {

    return (
        <BrowserRouter>
            <CartContextProvider>
            <Header/>
                 <Routes>
                     <Route path="/" element={<ItemListContainer/>}/>
                     <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
                     <Route path="/categoria/:category" element={<ItemListContainer/>}/>
                     <Route path="/carrito" element={<Cart/>}/>
                     <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            <Nav/>
            </CartContextProvider>
            <Footer/>
        </BrowserRouter>
    )
}
export default App