import { Box, Button, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" maxWidth="700px" mx="auto" py={20}>
      <Heading as="h1" size="xl" mb={6}>
        Bienvenidos a "The Great Gig In The Sky"
      </Heading>
      <Text fontSize="xl" mb={10}>
        La mejor tienda de música para todos los fanáticos de la música en línea.
      </Text>
   
     
      <NavLink to="/items">    <Button colorScheme="blue" size="lg" mb={4}> Comenzar a comprar      </Button> </NavLink>

     
      <Box mt={20}>
        <Text fontSize="xl" mb={6}>
          ¿Por qué comprar en "The Great Gig In The Sky"?
        </Text>
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap={10}
        >
          <Box textAlign="left">
            <Heading as="h3" size="lg" mb={4}>
              Amplia selección de música
            </Heading>
            <Text fontSize="lg" mb={4}>
              Ofrecemos una amplia selección de música en diferentes géneros y
              formatos.
            </Text>
          </Box>
          <Box textAlign="left">
            <Heading as="h3" size="lg" mb={4}>
              Compras seguras y confiables
            </Heading>
            <Text fontSize="lg" mb={4}>
              Ofrecemos una plataforma segura para compras en línea y garantizamos
              la confidencialidad de la información personal del cliente.
            </Text>
          </Box>
          <Box textAlign="left">
            <Heading as="h3" size="lg" mb={4}>
              Precios asequibles
            </Heading>
            <Text fontSize="lg" mb={4}>
              Ofrecemos precios competitivos y descuentos regulares en nuestros
              productos para garantizar que nuestros clientes obtengan la mejor
              oferta.
            </Text>
          </Box>
          <Box textAlign="left">
            <Heading as="h3" size="lg" mb={4}>
              Servicio al cliente excepcional
            </Heading>
            <Text fontSize="lg" mb={4}>
              Nuestro equipo de atención al cliente está disponible para ayudar
              en cualquier momento y garantizar una experiencia de compra
              satisfactoria.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
