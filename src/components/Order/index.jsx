import React from 'react'
import styles from "./order.module.css"

const Order = () => {
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
            <h2>Numero de orden:</h2>
            <h2>Orden:</h2>
        </div> 
        </div> 
            </div>




    </div>
  )
}

export default Order