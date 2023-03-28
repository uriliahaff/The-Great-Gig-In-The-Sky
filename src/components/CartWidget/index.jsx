import styles from "./cartWidget.module.scss"

import { ChakraProvider } from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from '@chakra-ui/react'

const CartWidget = ({quantity}) => {
  return (
    <ChakraProvider>
    <div className={styles.container}>
      <AiOutlineShoppingCart className={styles.cart}/>
      <Badge className={styles.badge}>{quantity}</Badge>
    </div>
    </ChakraProvider>
  )
}

export default CartWidget