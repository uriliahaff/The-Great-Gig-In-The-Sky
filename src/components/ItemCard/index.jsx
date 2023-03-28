import styles from "./ItemCard.module.css";
import {Link } from 'react-router-dom'

const ItemCard = ({producto}) => {
  return (
    <div className={styles.container}>
<img src={producto.image} alt={producto.title} width="100%"/>
      <div className={styles.container}>
      <Link to={`${"/items/"+producto.id}`}>
          <h1>{producto.title}</h1>
          <h2>${producto.price}</h2>
    </Link>
      </div>
  </div>
  )
}

export default ItemCard


