import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "./Firebase"
import Form from './Form';
import { useContext } from 'react';
import { cartContext } from '../CartContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const resultContext = useContext(cartContext);
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });
  const [orderId, setOrderId] = useState('');

  let cartCheckout = [];
  resultContext.carrito.forEach((element) => {
    cartCheckout.push({
      id: element.id,
      title: element.title,
      price: element.price,
      quantity: element.quantity,
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    const target = e.target;
    const label = target.parentElement.children[0];
    if (value === '') {
      label.classList.remove();
    } else if (value !== '') {
      label.classList.add();
    }
  };

  const handleSubmit = (e) => {
    const orderData = {
      buyer: {
        name: userData.name,
        lastName: userData.lastName,
        phone: userData.phone,
        email: userData.email,
      },
      items: cartCheckout,
      total: resultContext.totalPrice,
      date: serverTimestamp(),
    };

    const collectionOrders = collection(db, 'orders');
    addDoc(collectionOrders, orderData)
      .then((response) => {
        setOrderId(response.id);
        resultContext.clear();
      })
      .catch((error) => {;
      });
  };

  return (
    <div>
          <h1>Checkout</h1>
          <div>
            <div>
              <h2>Resumen de compra</h2>
              <div>
                <p>Items: {resultContext.cantidadTotal}</p>
                <p>Envio: ¡Gratis!</p>
                <p>Total: ${resultContext.precioTotal}</p>
              </div>
              <Link to="/cart">
                <span>Volver al carrito</span>
              </Link>
            </div>
            <div>
              <h2>
                Detalles de facturación
              </h2>
              <Form
                handleChange={handleChange}
                userData={userData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
  )
}
export default Checkout