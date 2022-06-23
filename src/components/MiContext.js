import { createContext } from "react";

 const contexto = createContext()

 const Provider = contexto.Provider

 export const MiProvider = () => {

    const valorDelContexto ={
        carrito : {},
        cantidad_total : 0,
        precio_total : 0,
    }

    return (
        <Provider value={valorDelContexto}>

        </Provider>
    )
 }