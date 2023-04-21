import styles from "./cartWidget.module.scss";
import { Link } from "react-router-dom";

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
  useDisclosure,
} from "@chakra-ui/react";

import React, { useContext } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@chakra-ui/react";
import { CartContext } from "../../contexts/CartContext";
import CartDrawerItem from "../CartDrawerItem";

const CartWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { cart, removeItem, clearCart, totalItems } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <ChakraProvider>
      <div className={styles.container}>
        <AiOutlineShoppingCart onClick={onOpen} className={styles.cart} />
        <Badge onClick={onOpen} className={styles.badge}>
          {totalItems}
        </Badge>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className={styles.drawer}>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>

          <DrawerBody>
            {cart.map((item) => (
              <CartDrawerItem item={item} key={item.id} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={5}
              mb={1}
              colorScheme="red"
              onClick={handleClearCart}
            >
              Vaciar carrito
            </Button>
            <Link to={`${"checkout"}`}>
              <Button mb={1} onClick={onClose} colorScheme="blue">
                Chekout
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
};

export default CartWidget;
