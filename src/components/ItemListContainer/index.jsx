import styles from "./itemListContainer.module.scss";
import { getDocs, collection, where, query } from "firebase/firestore";
import {
  Spinner,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../../db/firebase-config.js";
import { CartContext } from "../../contexts/CartContext";

const ItemListContainer = ({destacado}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const itemsRef = collection(db, "items");

  const getDestacados = async () => {
    const filteredItemsRef = query(itemsRef, where("destacado", "==", true));

    const itemsCollection = await getDocs(filteredItemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(items);
    setLoading(false);
  };


  const getProductos = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(items);
    setLoading(false);
  };

  const getProductosByCategory = async () => {
    const filteredItemsRef = query(itemsRef, where("category", "==", id));

    const itemsCollection = await getDocs(filteredItemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(items);
    setLoading(false);
  };

  useEffect(() => {

    if(destacado){
      getDestacados();
    }else{
      setLoading(true);
      if (!id) {
        console.log("No hay id");
        getProductos();
      } else {
        console.log("Hay id "+id);
        getProductosByCategory();
      }
    }
  }, [id]);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addItem(item);
    console.log("Agregar producto: " + item.name);
  };

  if (!productos) {
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
    <div className={styles.container}>
      <SimpleGrid columns={[3, null, 4]} spacing={4}>
        {productos.map((producto) => (
          <Card key={producto.id}>
            <CardBody>
              <Image
                className={styles.imgContainer}
                src={producto.image}
                alt={producto.description}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Link to={`${"/items/" + producto.id}`}>
                  <Heading size="md">{producto.title}</Heading>
                </Link>
                <Text color="blue.600" fontSize="2xl">
                  {formatCurrency(producto.price)}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                leftIcon={<MdAddShoppingCart />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  handleAddToCart({
                    id: producto.id,
                    name: producto.title,
                    price: producto.price,
                    image: producto.image,
                  })
                }
              >
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ItemListContainer;
