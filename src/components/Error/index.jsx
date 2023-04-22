import { Box, Button, Heading, Text } from "@chakra-ui/react";
import ItemListContainer from "../ItemListContainer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
    <Box textAlign="center" mt={10}>
      <Heading as="h1" fontSize="9xl" mb={5}>
        404
      </Heading>
      <Text fontSize="5xl">Oops! Pagina no encontrada.</Text>
    </Box>

    <Box textAlign="center" mt={10}>
    <NavLink to="/items">    <Button margin="auto" mt={6} w={700} colorScheme="yellow" size="lg" > Seguir comprando     </Button> </NavLink>

    </Box>

    <Heading textAlign="center" maxWidth="700px" mx="auto" py={5} mt={50} as="h1" size="lg" >Productos destacados</Heading>

        <ItemListContainer destacado={true}/>   
    </>

  );
};

export default Error;
