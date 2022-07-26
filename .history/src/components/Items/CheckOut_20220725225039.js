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

  const handleBuy = () => {

    const collectionOrdenes = collection(db,"ordenes")
    const orderData = {
      buyer : {
        name : userData.name,
        lastname : userData.lastName,
        phone : userData.phone,
        email : userData.email
      },
      items : cartCheckout,
      date : serverTimestamp(),
      total :resultContext.precioTotal,
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setUserData(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })
  }

  return (
    <div>
          <h1>Checkout</h1>
          <div>
            <div>
              <h2>Resumen de compra</h2>
              <div>
                <p>Items: {resultContext.cantidadTotal}</p>
                <p>Total: ${resultContext.precioTotal}</p>
              </div>
              <Link to="/carrito">
                <span>Volver al carrito</span>
              </Link>
              <Link to="/">
                <span>Volver a la tienda</span>
              </Link>
            </div>
            <div>
              <h3>Informacion del Usuario</h3>
              <Form
                handleChange={handleChange}
                userData={userData}
              />
              <button onClick={handleBuy}>terminar compra</button>
            </div>
          </div>
        </div>
  )
}

export default Checkout
