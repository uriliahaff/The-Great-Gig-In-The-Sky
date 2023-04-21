import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <Box textAlign="center" maxWidth="700px" mx="auto" py={20}>
      <Heading as="h1" size="xl" mb={6}>
        "The Great Gig In The Sky"
      </Heading>
      <Text fontSize="xl" mb={10}>
        Somos una tienda de instrumentos musicales en línea basada en Buenos
        Aires, Argentina, fundada en 2023 por Uriel Liahaff. Nos especializamos
        en instrumentos de música y nos enorgullece
        ofrecer la selección más amplia de instrumentos en línea.
      </Text>

      <Text fontSize="xl" mb={10}>
        En "The Great Gig In The Sky", nos apasiona la música tanto como tú, y
        estamos comprometidos a proporcionar la mejor experiencia de compra en
        línea para los fanáticos de la música de todo el mundo. Desde nuestro
        enfoque en la calidad y la autenticidad de los productos hasta nuestro
        excepcional servicio al cliente, nos esforzamos por ser la mejor tienda
        de instrumentos musicales en línea.
      </Text>
      <Box mb={10}>
        <Flex justifyContent="center">
          <Box>

            <Text fontSize="lg">
              Uriel Liahaff es un músico aficionado y estudiante apasionado que ha dedicado
              su carrera a ofrecer a los fanáticos de la música una experiencia
              de compra en línea excepcional. Como líder en el mercado de
              instrumentos musicales en línea, Uriel ha trabajado para expandir
              la selección de productos y mejorar la calidad de la experiencia
              del cliente en "The Great Gig In The Sky".
            </Text>
          </Box>
        </Flex>
      </Box>
      <Text fontSize="xl">
        Gracias por confiar en "The Great Gig In The Sky" para satisfacer todas
        tus necesidades musicales. Si tienes alguna pregunta o comentario,
        contáctanos en la página de{" "}
       <strong><NavLink to="/contact">Contacto</NavLink></strong>

      </Text>
    </Box>
  );
}

export default About;
