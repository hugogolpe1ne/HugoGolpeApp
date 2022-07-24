import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "./CartContext";

const Cart = () => {
  const resultContext = useContext(cartContext);

  return (
    <>
      {resultContext.carrito.length < 1 ? (
        <div>
          <p>Su carrito se encuentra vacio</p>
          <Link to="/">
            Ver Productos
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <div></div>
              <h5>Producto</h5>
              <h5>Cantidad</h5>
              <h5>Precio</h5>
              <h5>Subtotal</h5>
            </div>

            <div>
              {resultContext.carrito.map((producto) => (
                <div key={producto.id}>
                  <div>
                    <img
                      src={producto.pictureUrl}
                      alt={`${producto.id} - ${producto.title}`}
                    />
                  </div>
                  <div>{producto.name}</div>
                  <div>{producto.cantidad_total}</div>
                  <div>${producto.price}</div>
                  <div>
                    ${parseFloat((producto.price * producto.cantidad_total).toFixed(2))}
                  </div>
                  <button
                    onClick={() => resultContext.eliminarProducto(producto.id)}
                  >
                    <span>
                      delete
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div >
            <h2>Resumen de compra</h2>
            <p>Subtotal: ${resultContext.precio_total}</p>
            <p>Total: ${resultContext.precio_total}</p>
            <hr></hr>
            <Link to="/checkout">
              <button >Iniciar compra</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
/*import { serverTimestamp } from "firebase/firestore"
import React, { useContext, useState } from "react"
import Form from "./Items/Form"
import { cartContext } from "./CartContext";

const Cart = () =>{
    const [data, setData] =useState({name: "", email: "",phone: ""})

    const {carrito, borrarItem, precioTotal, borrarTodo}= useContext(cartContext)

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
                        <h2>Total: $</h2>
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

 export default Cart*/