import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addItem = (item) => {
    const existingItem = cart.find((cart) => cart.id === item.id);

    if (existingItem) {
      setCart((prevCartItems) =>
        prevCartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
      );
    } else {
      setCart((prevCartItems) => [
        ...prevCartItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1,
        },
      ]);
    }
    console.log("Vamos a agregar el item: " + item.name);
    toast({
      title: "Item agregado.",
      description: item.name,
      status: "success",
      duration: 2000,
      position: "top-right",
      isClosable: true,
    });
  };

    const addItemByQuantity = (item) => {
    const existingItem = cart.find((cart) => cart.id === item.id);

    if (existingItem) {
      setCart((prevCartItems) =>
        prevCartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + item.quantity } : cart
        )
      );
    } else {
      setCart((prevCartItems) => [
        ...prevCartItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
        },
      ]);
    }
    console.log("Vamos a agregar el item: " + item.name);
    toast({
      title: "Item agregado.",
      description: item.name,
      status: "success",
      duration: 2000,
      position: "top-right",
      isClosable: true,
    });
  };



  const removeItem = (itemId) => {
    const updatedCartItems = cart
      .map((cart) =>
        cart.id === itemId
          ? {
              ...cart,
              quantity: cart.quantity - 1,
              totalPrice: cart.totalPrice - cart.price,
            }
          : cart
      )
      .filter((cart) => cart.quantity > 0);
    setCart(updatedCartItems);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementItem = (itemId) => {
    setCart((prevCartItems) =>
      prevCartItems.map((cart) =>
        cart.id === itemId ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const decrementItem = (itemId) => {
    setCart((prevCartItems) =>
      prevCartItems
        .map((cart) =>
          cart.id === itemId && cart.quantity > 1
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart.id === itemId && cart.quantity === 1
            ? null
            : cart
        )
        .filter((item) => item !== null)
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const cartTotal = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        incrementItem,
        decrementItem,
        totalItems: getTotalItems(),
        cartTotal,
        addItemByQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
