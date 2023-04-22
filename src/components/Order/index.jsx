import React, { useContext, useEffect, useState } from 'react'
import styles from "./order.module.css"
import { addDoc, collection} from "firebase/firestore";
import db from "../../../db/firebase-config.js";
import { CartContext } from '../../contexts/CartContext';
import { Button, Spinner } from '@chakra-ui/react';
import { NavLink, Navigate } from 'react-router-dom';

const Order = () => {
  const { cart, clearCart, totalItems } = useContext(CartContext);
  const [orderID, setOderID] = useState('');
  const [orderCart, setOrderCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsRef = collection(db, "orders");

  const addOrder = async () => {

    if(totalItems > 0) {
      console.log("addOrder");
      const date = new Date().toLocaleString();
      const docData = {
        products: cart,
        date: date,
        state: "Generada"
      };
      const docRef = await addDoc(itemsRef, docData);
      const docId = docRef.id;
      setOderID(docId)
      setOrderCart(cart);
      clearCart();
      setLoading(false);
    }
    else{
      return <Navigate to="/" />;
    }
  }

  useEffect(() => {
    addOrder()
  }, []);




  if (loading) {
    return (
      <div className={styles.spinnerContain}>
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
        
<div className={styles.card}> 
  <div  className={styles.header}> 
    <div className={styles.image}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000" d="M20 7L9.00004 18L3.99994 13"></path> </g></svg>
      </div> 
      <div  className={styles.content}>
         <span  className={styles.title}>Orden validada</span> 
         <p  className={styles.message}>Muchas gracias por su compra en <strong>The Great Gig In The Sky</strong>. Su compra llegara en 5 dias habiles.</p> 
         </div> 
         <div  className={styles.actions}>
            <h2>Numero de orden: <span>{orderID}</span></h2>
            <u>  <h2>Orden:             </h2> </u>

            {orderCart.map((producto) => (
              <p className={styles.prods}>{producto.quantity} x {producto.name}</p>
        ))}

<NavLink to="/items">    <Button mt={6} w={700} colorScheme="yellow" size="lg" > Seguir comprando     </Button> </NavLink>

        </div> 
        
        </div> 

            </div>




    </div>
  )
}

export default Order