import React, { useContext } from 'react'
import styles from "./cartdraweritem.module.css"
import { CartContext } from '../../contexts/CartContext';
import { IconButton } from '@chakra-ui/react'
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';

const CartDrawerItem = ({item}) => {

  const {incrementItem, decrementItem } = useContext(CartContext);


  return (
    <div className={styles.card}>
  <div className={styles.img}><img src={item.image}></img></div>
  <div className={styles.textBox}>
    <div className={styles.textContent}>
      <span className={styles.span}>{item.name}</span>
    </div>
    <p className={styles.p}>{item.quantity}</p>
    <IconButton mr={2} className={styles.button}  onClick={() => incrementItem(item.id)}  size='sm' icon={<SmallAddIcon />} />
    <IconButton className={styles.button}  onClick={() => decrementItem(item.id)}  size='sm' icon={<MinusIcon />} />

  <div>
</div></div></div>
  )
}

export default CartDrawerItem