import CartWidget from "../CartWidget";
import styles from "./navbar.module.scss"
import { NavLink, Link } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

const Navbar = ({logo}) => {
  return (
    <ChakraProvider>
      <div className={styles.container}>
          <div className={styles.logoContainer}>
          <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
          </div>
          <div className={styles.menu}>
          <Menu>
            <MenuButton>Categorias</MenuButton>
              <MenuList className={styles.menuList}>
              <Link to={`${"category/jewelery"}`}><MenuItem>Guitarras</MenuItem></Link>
              <Link to={`${"category/electronics"}`}><MenuItem>Bajos</MenuItem></Link>
              <Link to={`${"category/women's clothing"}`}><MenuItem>Teclados</MenuItem></Link>
              <Link to={`${"category/men's clothing"}`}><MenuItem>Baterias</MenuItem></Link>
              </MenuList>
          </Menu>
            <a href="#"> Ofertas</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
          </div>
          <CartWidget quantity={10} />
      </div>
    </ChakraProvider>
  )
}

export default Navbar;