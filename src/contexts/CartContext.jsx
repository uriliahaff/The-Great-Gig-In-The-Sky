import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {

    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )


}

export default CartProvider;