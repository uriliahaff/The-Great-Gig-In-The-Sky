import styles from "./itemListContainer.module.scss"

import {Spinner, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { MdAddShoppingCart, MdBuildCircle } from "react-icons/md"
import ItemCard from "../ItemCard"
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

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
    return  <div className={styles.spinnerContain}><Spinner size='xl' /></div> 
  }



  return (
   
   <div className={styles.container}>
      
      <SimpleGrid columns={[3, null, 4]} spacing={4} >


      {productos.map((producto)=>
          <Card key={producto.id}>
          <CardBody>
            <Image
            className={styles.imgContainer}
              src={producto.image}
              alt={producto.description}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Link to={`${"/items/"+producto.id}`}>
            <Heading size='md'>{producto.title}</Heading>
    </Link>
              <Text color='blue.600' fontSize='2xl'>
                ${producto.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          <Button leftIcon={<MdAddShoppingCart />} colorScheme='blue' variant='solid'>
              Add To Cart
          </Button>
          </CardFooter>
        </Card>
    )}

</SimpleGrid>
      </div>
  )
}

export default ItemListContainer