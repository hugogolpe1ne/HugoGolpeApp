import { db } from "./Firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../CartContext"
import { Form } from "react-bootstrap"

const Checkout = () => {
  const resultContext = useContext(cartContext)

  const [userData,setUserData] = useState({
      name : "",
      lastname: "",
      phone : "",
      email : "",
  })

  const [orderId, setOrderId] = useState("")
  

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartCheckout.length < 1) {
      return;
    }
    const orderData = {
      buyer: {
        name: userData.name,
        lastName: userData.lastname,
        phone: userData.phone,
        email: userData.email,
      },
      items: resultContext.cantidadTotal,
      total: resultContext.precioTotal,
      date: serverTimestamp(),
    };

    const collectionOrders = collection(db, 'orders');
    addDoc(collectionOrders, orderData)
      .then((response) => {
        setOrderId(response.id);
        resultContext.clear();
      })
      .catch((error) => {
      });
  };
  console.log(orderId)

  return (
    <>
    <div>Checkout</div>
      <Link to="/carrito">
        <span>Volver al carrito</span>
      </Link>
      <Link to="/">
         <span>Volver a la tienda</span>
      </Link>
      <Form
        handleChange={handleChange}
        userData={userData}
        handleSubmit={handleSubmit}
      />
    {userData&&<p>Su compra es : {userData}</p>}
    <button onClick={handleChange}>Comprar</button>
    </>
  )
}

export default Checkout

  /*return (
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
              <button onClick={handleBuy}>guardar</button>
            </div>
          </div>
        </div>
  )*/

