import React from 'react'
import { Box, Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box textAlign="center" maxWidth="700px" mx="auto" py={20}>
    <Heading as="h1" size="xl" mb={6}>
      Contáctanos
    </Heading>
    <Text fontSize="xl" mb={10}>
      ¿Tienes alguna pregunta o comentario? ¡Déjanos un mensaje y nos
      comunicaremos contigo lo antes posible!
    </Text>
    <Box as="form" maxWidth="500px" mx="auto">
      <Input placeholder="Nombre completo" mb={4} />
      <Input placeholder="Correo electrónico" mb={4} />
      <Textarea placeholder="Mensaje" mb={6} />
      <Button colorScheme="blue" size="lg" mb={4}>
        Enviar mensaje
      </Button>
    </Box>
  </Box>
  )
}

export default Contact