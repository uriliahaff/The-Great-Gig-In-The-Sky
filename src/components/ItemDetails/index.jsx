import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./ItemDetails.module.css";
import {
  Button,
  Grid,
  GridItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
} from "@chakra-ui/react";
import { CartContext } from "../../contexts/CartContext";
import { MdAddShoppingCart } from "react-icons/md";

import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config.js";

const ItemDetails = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItemByQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);


  const getProducto = async () => {
    const itemDoc = doc(db, "items", id);
    const item = await getDoc(itemDoc);
    if (item.data()) {
      setProducto(item.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setProducto({id:-1});
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducto();
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {

      addItemByQuantity({
        id: producto.id,
        name: producto.title,
        price: producto.price,
        image: producto.image,
        quantity: quantity
      });
    
    // Agregar el item al carrito con la cantidad seleccionada
    setQuantity(1);
  };

  if(producto.id===-1){
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
      <div className={styles.spinnerContain}>
        <Spinner size="xl" />
      </div>
    );
  }

  const formatCurrency = (value) => {
    return `$${value.toLocaleString("es-AR")}`;
  };

  return (
    <>
      <Grid
        h="800px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        mb={6}
        mt={6}
        mr={6}
        ml={6}
      >
        <GridItem
          className={styles.container}
          rowSpan={6}
          colSpan={4}
          bg="white"
        >
          <img src={producto.image} />
        </GridItem>

        <GridItem
          className={styles.container}
          rowSpan={6}
          colSpan={1}
          pt={2}
          bg="white"
        >
          <h2>{producto.title}</h2>
          <h3>{producto.category}</h3>
          <h2>                  {formatCurrency(producto.price)}</h2>

          <NumberInput
            isReadOnly={true}
            className={styles.input}
            size="md"
            maxW={32}
            value={quantity}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={handleIncrement} />
              <NumberDecrementStepper onClick={handleDecrement} />
            </NumberInputStepper>
          </NumberInput>

          <Button
            mt={5}
            mb={3}
            className={styles.btn}
            onClick={handleAddToCart}
            leftIcon={<MdAddShoppingCart />}
            colorScheme="teal"
            variant="solid"
          >
            Agregar al carrito
          </Button>

          <p className={styles.p}>{producto.description}</p>
        </GridItem>
      </Grid>
    </>
  );
};

export default ItemDetails;
