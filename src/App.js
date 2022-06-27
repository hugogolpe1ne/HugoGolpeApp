import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./estilos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

const App = () => {

    return (
        <BrowserRouter>
            <Header/>
                 <Routes>
                     <Route path="/" element={<ItemListContainer/>}/>
                     <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
                     <Route path="/categoria/:category" element={<ItemListContainer/>}/>
                     <Route path="/carrito" element={<Carrito/>}/>
                     <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            <Nav/>
            <Footer/>
        </BrowserRouter>
    )
}
export default App