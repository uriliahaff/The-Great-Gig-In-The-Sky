import {
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
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";

const CartDrawer = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>

          <DrawerBody>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Link to={`${"checkout"}`}>
              <>aadsdasd</> <Button colorScheme="blue">Chekout</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
