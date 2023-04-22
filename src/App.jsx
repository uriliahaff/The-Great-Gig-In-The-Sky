import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, Link } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails";
import Checkout from "./components/Checkout";
import React from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

import { CartProvider } from "./contexts/CartContext";
import Order from "./components/Order";
import Error from "./components/Error";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <div>
          <Navbar logo="https://www.linkpicture.com/q/logo_744.png" />
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/404" element={<Error/>} />
        </Routes>

        <Footer />
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
