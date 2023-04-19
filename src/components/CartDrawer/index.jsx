import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

const CartDrawer = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <div>    
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      Open
    </Button>
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
        <Link to={`${"checkout"}`}><>aadsdasd</> <Button colorScheme='blue'>Chekout</Button></Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
  )
}

export default CartDrawer