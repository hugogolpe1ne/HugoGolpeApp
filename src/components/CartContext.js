import { createContext, useState } from "react";

 export const contexto = createContext()

 const Provider = contexto.Provider

 export const MiProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [precio_total,setPrecioTtotal] = useState(0)

    const agregarProducto = (producto) => {}

    const eliminarProducto = (producto) => {}

    const actualizarCantidad = (producto) => {}

    const vaciarCarrito = (producto) => {}
    

    const valorDelContexto = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
    } 

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    ) 
 }