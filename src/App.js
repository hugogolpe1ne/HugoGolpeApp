import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./estilos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Cart from "./components/Cart";
import { MiProvider } from "./components/CartContext";


const App = () => {

    return (
        <BrowserRouter>
            <MiProvider>
            <Header/>
                 <Routes>
                     <Route path="/" element={<ItemListContainer/>}/>
                     <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
                     <Route path="/categoria/:category" element={<ItemListContainer/>}/>
                     <Route path="/carrito" element={<Cart/>}/>
                </Routes>
            <Nav/>
            </MiProvider>
            <Footer/>
        </BrowserRouter>
    )
}
export default App