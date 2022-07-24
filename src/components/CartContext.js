import { createContext, useState } from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

const CartContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarProducto = (producto, cantidad) => {
        const productoAgregado ={
            ...producto,
            cantidad: cantidad,
        };

        const copiaCarrito = [...carrito];

        if (inCarrito(producto.id)) {
            copiaCarrito.forEach((element) => {
                if (element.id == producto.id) element.cantidad += cantidad
            });
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidad_total + cantidad);
            setPrecioTotal (
                parseFloat((precio_total + productoAgregado.price * cantidad). toFixed(2))
            );
        } else {
            copiaCarrito.push({...productoAgregado});
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidad_total + cantidad);
            setPrecioTotal (
                parseFloat((precio_total + productoAgregado.price * cantidad). toFixed(2))
            );
        }
    };

    const eliminarProducto = (productoId) => {
        const copiaCarrito = [...carrito];
        const disminuirPrecioTotal = copiaCarrito.find(
            (producto) => producto.id == productoId
        )
        setPrecioTotal(
            parseFloat(
            (precio_total - disminuirPrecioTotal.price * disminuirPrecioTotal.cantidad).toFixed(2)
            )
        )
        setCantidadTotal(cantidad_total - disminuirPrecioTotal.cantidad)
        const nuevaCopiaCarrito = copiaCarrito.filter((producto) => producto.id !== productoId)
        setCarrito(nuevaCopiaCarrito)
    };
    
    const inCarrito = (idSearch) => {
        return carrito.find(({ id }) => id === idSearch) ? true : false;
    };

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    };

    const valorDelContexto = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        inCarrito : inCarrito,
        vaciarCarrito : vaciarCarrito
    }

    return <Provider value={valorDelContexto}>{props.children}</Provider>;
};
    

export default CartContextProvider;