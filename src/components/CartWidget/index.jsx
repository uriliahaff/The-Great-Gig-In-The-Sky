import styles from "./cartWidget.module.scss"
import {Link } from 'react-router-dom'

import {
   ChakraProvider,
   Button, 
   Drawer, 
   DrawerBody, 
   DrawerCloseButton, 
   DrawerContent, 
   DrawerFooter, 
   DrawerHeader, 
   DrawerOverlay, 
   useDisclosure
  } from "@chakra-ui/react";
  import React from 'react'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from '@chakra-ui/react'

const CartWidget = ({quantity}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  return (
    <ChakraProvider>
    <div className={styles.container}>
      <AiOutlineShoppingCart onClick={onOpen} className={styles.cart}/>
      <Badge className={styles.badge}>{quantity}</Badge>
    </div>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrito</DrawerHeader>

        <DrawerBody>
          <h1>Lista Carrito</h1>
        </DrawerBody>

        <DrawerFooter>
        <Link to={`${"checkout"}`}><Button onClick={onClose} colorScheme='blue'>Chekout</Button></Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </ChakraProvider>
    
  )
}

export default CartWidget