import { createContext, useState } from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    console.log(precioTotal)
    console.log(cantidadTotal)

    const agregarProducto = (item, cantidad) => {
        const productoAgregado ={
            ...item,
            cantidad: cantidad,
        };

        const copiaCarrito = [...carrito];

        if (inCarrito(item.id)) {
            copiaCarrito.forEach((element) => {
                if (element.id == item.id) element.cantidad += cantidad
            });
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal + cantidad);
            setPrecioTotal (
                parseFloat((precioTotal + productoAgregado.price * cantidad).toFixed(2))
            );
        } else {
            copiaCarrito.push({...productoAgregado});
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal + cantidad);
            setPrecioTotal (
                parseFloat((precioTotal + productoAgregado.price * cantidad).toFixed(2))
            );
        }
    };

    const eliminarProducto = (itemId) => {
        const copiaCarrito = [...carrito];
        const disminuirPrecioYCantidad = copiaCarrito.find(
            (item) => item.id == itemId
        )
        setPrecioTotal(
            parseFloat(
            (precioTotal - disminuirPrecioYCantidad.price * disminuirPrecioYCantidad.cantidad).toFixed(2)
            )
        )
        setCantidadTotal(cantidadTotal - disminuirPrecioYCantidad.cantidad)
        const nuevaCopiaCarrito = copiaCarrito.filter((item) => item.id !== itemId)
        setCarrito(nuevaCopiaCarrito)
    };
    
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    };
    
    const inCarrito = (idSearch) => {
        return carrito.find(({ id }) => id === idSearch) ? true : false;
    };

    const valorDelContexto = {
        carrito : carrito,
        cantidadTotal : cantidadTotal,
        precioTotal : precioTotal,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        vaciarCarrito : vaciarCarrito
    }

    return <Provider value={valorDelContexto}>{props.children}</Provider>;
};
    

export default CartContextProvider;