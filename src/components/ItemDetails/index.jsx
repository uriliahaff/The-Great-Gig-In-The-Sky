import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import styles from "./ItemDetails.module.css";

const ItemDetails = () => {

  const[producto, setProducto] = useState({})
  const[loading, setLoading] = useState(true)
  const {id} = useParams();

  console.log(id);

  
  const getProducto = async () => {
    try {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProducto(data);
    setLoading(false)
        } catch (error) {
          setProducto(null)
          console.log(error);
        }
  }

  
  useEffect(() => {
    getProducto();  
  }, [])
  

  if(!producto){
    return <Navigate to="/404" />
  }



  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div className={styles.container}>
    <h1>{producto.title}</h1>
    <img src={producto.image} alt={producto.title} width="200" height="250"/>
    <h2>${producto.price}</h2>
    <p>Descripcion: {producto.description}</p>
    <p>Categoria: {producto.category}</p>
  </div>
  )
}

export default ItemDetails