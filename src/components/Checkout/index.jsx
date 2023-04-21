import {
  Grid,
  GridItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Icon,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import styles from "./checkout.module.scss";
import { CartContext } from "../../contexts/CartContext";
import ItemCheckout from "../ItemCheckout";

import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, totalItems } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const isFormEmpty = email === "" || confirmEmail === "";

  return (
    <>
      <h1 className={styles.titulo}>Checkout</h1>
      <div className={styles.container}>
        <Grid
          h="800px"
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          mb={6}
        >
          <GridItem
            className={styles.cardGeneral}
            rowSpan={6}
            colSpan={3}
            bg="white"
          >
            <Grid
              templateColumns="repeat(5, 1fr)"
              pb={3}
              pt={3}
              mr={5}
              ml={5}
              gap={6}
              className={styles.border}
            >
              <GridItem h="10">
                {" "}
                <h3 className={styles.titleTable}>Producto</h3>{" "}
              </GridItem>
              <GridItem h="10"> </GridItem>
              <GridItem h="10">
                {" "}
                <h3 className={styles.titleTable}>Precio</h3>{" "}
              </GridItem>
              <GridItem h="10">
                {" "}
                <h3 className={styles.titleTable}>Cantidad</h3>{" "}
              </GridItem>
              <GridItem h="10">
                {" "}
                <h3 className={styles.titleTable}>Subtotal</h3>{" "}
              </GridItem>
            </Grid>

            {cart.map((item) => (
              <ItemCheckout key={item.id} item={item} />
            ))}
          </GridItem>

          <GridItem
            className={styles.cardGeneral}
            rowSpan={4}
            colSpan={2}
            bg="white"
          >
            <h1 className={styles.resumenText}>Datos de compra</h1>

            <div className={styles.form}>
              <FormControl pt={1} isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder="Nombre" />
              </FormControl>

              <FormControl pt={3} isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input placeholder="Apellido" />
              </FormControl>

              <FormControl pt={3} isRequired>
                <FormLabel>Telefono</FormLabel>
                <Input placeholder="Telefono" />
              </FormControl>

              <FormControl pt={3} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormControl>

              <FormControl pt={3} isRequired>
                <FormLabel>Confirmar email</FormLabel>
                <Input
                  placeholder="Confirmar email"
                  value={confirmEmail}
                  onChange={handleConfirmEmailChange}
                />
              </FormControl>
            </div>
          </GridItem>

          <GridItem
            className={styles.cardGeneral}
            rowSpan={2}
            colSpan={2}
            bg="white"
          >
            <div className={styles.resumenContainer}>
              <h1 className={styles.resumenText}>Resumen de la compra</h1>
              <h3 className={styles.subtotalText}>Subtotal: ${cartTotal}</h3>
              <h4></h4>
              <h3 className={styles.totalText}>Total: ${cartTotal}</h3>

              <div className={styles.btnContainer}>
                <Link to={`${"/order"}`}>
                  <Button
                    className={styles.button}
                    isDisabled={
                      totalItems === 0 || email !== confirmEmail || isFormEmpty
                    }
                    variant="solid"
                  >
                    Finalizar compra
                  </Button>
                </Link>

                <Link to={`${"/"}`}>
                  <h4>Seguir comprando</h4>
                </Link>
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default Checkout;
