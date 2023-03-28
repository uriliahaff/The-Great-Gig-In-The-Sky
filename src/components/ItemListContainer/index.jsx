import styles from "./itemListContainer.module.scss"

import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import ItemCard from "../ItemCard"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const[loading, setLoading] = useState(true);
  const {id} = useParams();
  var URL='';
  console.log(id);

  if(!id){
    URL = "https://fakestoreapi.com/products";
  }else{
    URL = `https://fakestoreapi.com/products/category/${id}`;
  }

  const getProductos = async () => {
    try {
    const response = await fetch(URL);
    const data = await response.json();
    setProductos(data);
    setLoading(false);
        } catch (error) {
          setProductos(null);
          console.log(error);
        }
  }

  useEffect(() => {
    getProductos();  
  }, [id])
  

  if(!productos){
    return <Navigate to="/404" />
  }



  if(loading){
    return <h2>Loading...</h2>
  }



  return (
    <div>
      <Heading className={styles.greetingContainer} >ItemListContainer</Heading>
      {productos.map((producto)=>
          <ItemCard key={producto.id} producto={producto}/>
    )}
      </div>
  )
}

export default ItemListContainer