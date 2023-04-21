import { useState } from "react";
import {
  Flex,
  Box,
  Spacer,
  IconButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "../CartWidget";
import { NavLink, Link } from "react-router-dom";
import styles from "./navbar.module.scss";


function Navbar({logo}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" justify="space-between" wrap="wrap" bg="black" p={4} color="white" >
      <Box flex= "0 0 auto">
      <NavLink to="/">
        <Image src={logo} alt="Logo" w="400px" h="30px"   />
        </NavLink>

      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
        <IconButton icon={<HamburgerIcon />} variant="ghost" aria-label="Open Menu" />
      </Box>
      <Box display={{ base: "none", md: "block" }} flex={1}>
        <Flex align="center" justify="center" >
        <NavLink to="/"> <Button variant="ghost">Inicio</Button> </NavLink>
        <NavLink to="/items"> <Button variant="ghost">Productos</Button> </NavLink>
          <Menu>
            <MenuButton as={Button}  variant="ghost" aria-label="Menu">
              Categorias
            </MenuButton>
            <MenuList className={styles.menu}>
              	<Link to={`${"category/guitarras"}`}> <MenuItem className={styles.menuItem}>Guitarras</MenuItem>  </Link>
                <Link to={`${"category/bajos"}`}> <MenuItem className={styles.menuItem}>Bajos</MenuItem>  </Link>
                <Link to={`${"category/teclados"}`}> <MenuItem className={styles.menuItem}>Teclados</MenuItem>  </Link>
                <Link to={`${"category/otros"}`}> <MenuItem className={styles.menuItem}>Otros</MenuItem>  </Link>
            </MenuList>
          </Menu>
          <NavLink to="/contact"> <Button variant="ghost">Contacto</Button> </NavLink>
          <NavLink to="/about"> <Button variant="ghost">Acerca</Button> </NavLink>
        </Flex>
      </Box>
      <Box>
        <CartWidget />
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <Button w="full">Item 1</Button>
              </ListItem>
              <ListItem>
                <Button w="full">Item 2</Button>
              </ListItem>
              <ListItem>
                <Button w="full">Item 3</Button>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
