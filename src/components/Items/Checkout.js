import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Form from "./Form";
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { userContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Checkout = () => {
  const userContextResult = useContext(userContext);
  const resultContext = useContext(cartContext);
  const userLoggedIn = userContextResult.userLogin;

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: userLoggedIn ? userContextResult.userInfo.email : '',
    confirmEmail: '',
  });
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      toast.info(`Vas a comprar como: ${userContextResult.userInfo.email}`);
    }
  }, []);

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
      label.classList.remove(`${style.activateLabel}`);
    } else if (value !== '') {
      label.classList.add(`${style.activateLabel}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartCheckout.length < 1) {
      toast.error(
        'No hay nada agregado al carrito. Por favor seleccione el producto que desea'
      );
      return;
    }
    setLoading(true);
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
        setLoading(false);
        toast.success('Compra exitosa');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div>
       :orderId !== '' ? (
        <div>
          <h1>¡Muchas Gracias por tu compra!</h1>
          <p>
            Te enviamos un email a <em>{userData.email}</em> con el detalle de
            tu orden de compra. Tu número de orden es:{' '}
            <strong>{orderId}</strong>.
            <br />
            Esperamos que tu experiencia dentro de Electro App haya sido de lo
            mejor.
          </p>

          <Link to="/">
            Ir al home
          </Link>
        </div>
      ) : (
        <div>
          <h1>Checkout</h1>
          <div>
            <div>
              <h2>Resumen de compra</h2>
              <div>
                <p>Items: {resultContext.totalQuantity}</p>
                <p>Envio: ¡Gratis!</p>
                <p>Total: ${resultContext.totalPrice}</p>
              </div>
              <Link to="/cart" className={style.backToCart}>
                <span>arrow_back</span>
                Volver al carrito
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
                logged={userLoggedIn}
              />
            </div>
          </div>
        </div>
      )
    </div>
  );
};

/*import { db } from "./Firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState } from "react"


const Checkout = () => {

  const [idCompra,setIdCompra] = useState("")

  const handleBuy = () => {
    
    const collectionOrdenes = collection(db,"ordenes")

    const orderData = {
      buyer : {
        name : "Horacio",
        phone : "555555555",
        email : "test@tes.com"
      },
      items : [{id:1,titulo:"test producto"}],
      date : serverTimestamp(),
      total : 100
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })


  }

  return (
    <>
    <div>Checkout</div>
    {idCompra&&<p>Su compra es : {idCompra}</p>}
    <button onClick={handleBuy}>guardar</button>
    </>
  )
}
export default Checkout*/