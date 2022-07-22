import { serverTimestamp } from "firebase/firestore"
import React, { useContext, useState } from "react"
import Form from "./Items/Form"
//import CartContext from "./CartContext"

const Cart = () =>{
    const [data, setData] =useState({name: "", email: "",phone: ""})

    const {carrito, borrarItem, precioTotal, borrarTodo}= useContext()

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data, 
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const objOrden ={
            buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email
            },
            carrito,
            total: precioTotal(),
            date: serverTimestamp()
        }
    }

    return (
        <>
            {carrito.lenght === 0 ? (
                <div>Tu carrito esta vacio.</div>
            ) : (
                <>
                    <div>
                        {carrito.map((producto) => (
                            <div key={producto.id}>
                                <img
                                    src={producto.img}
                                    alt={producto.name}
                                    width="70px"
                                />
                                <h2>{producto.name}</h2>
                                <h2>${producto.price}</h2>
                                <h2>Cantidad: {producto.cantidad}</h2>
                                <button onClick={() => borrarItem(producto.id)}>
                                    Eliminar
                                </button>
                            </div>
                    ))}
                    <div>
                        <h2>Total: ${precioTotal()}</h2>
                        <button onClick={borrarTodo}>Vaciar Carrito</button>
                    </div>
                </div>
                <Form
                    handleChange={handleChange}
                    data={data}
                    handleSubmit={handleSubmit}
                />
            </>
        )}
    </>
)}

 export default Cart