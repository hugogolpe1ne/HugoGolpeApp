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
                      src={producto.image}
                      alt={`${producto.id} - ${producto.name}`}
                    />
                  </div>
                  <div>{producto.name}</div>
                  <div>{producto.cantidad}</div>
                  <div>${producto.price}</div>
                  <div>
                    ${parseFloat((producto.price * producto.cantidad).toFixed(2))}
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
            <p>Subtotal: ${resultContext.precioTotal}</p>
            <p>Total: ${resultContext.precioTotal}</p>
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