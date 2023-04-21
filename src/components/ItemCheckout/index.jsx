import { Grid, GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
 } from '@chakra-ui/react'
import React, { useContext } from 'react'
import styles from "./itemcheckout.module.css"
import { CartContext } from '../../contexts/CartContext';

const ItemCheckout = ({item}) => {

  const { addItem, removeItem} = useContext(CartContext);

  
  return (
    <div>
  <Grid className={styles.container} templateColumns='repeat(5, 1fr)' pb={3} pt={3} mr={5} ml={5} gap={6} >
  <GridItem  h='10' ><img src={item.image} className={styles.img} /> </GridItem>
  <GridItem  h='10' ><p className={styles.bold}>{item.name}</p>  </GridItem>
  <GridItem className={styles.center} h='10' ><p>${item.price}</p></GridItem>
  <GridItem className={styles.center} h='10' >
    
    <NumberInput isReadOnly={true} className={styles.input} size='xs' maxW={16}  value={item.quantity} min={0} >
      <NumberInputField />
        <NumberInputStepper>
        <NumberIncrementStepper onClick={() => addItem(item)}/>
        <NumberDecrementStepper onClick={() => removeItem(item.id)}/>
        </NumberInputStepper>
    </NumberInput>
    
    </GridItem>
  <GridItem className={styles.center} h='10' ><p>${item.price * item.quantity}</p> </GridItem>
</Grid>
    </div>
  )
}

export default ItemCheckout