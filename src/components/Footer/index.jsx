import {
  Flex,
  Link,
  Text,
  Container,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import styles from "./footer.module.css";

const footerData = [
  {
    label: "Categorias",
    href: "#",
    links: [
      { label: "Guitarras", href: "#" },
      { label: "Bajos", href: "#" },
      { label: "Teclados", href: "#" },
      { label: "Otros", href: "#" },
    ],
  },
  {
    label: "Links",
    href: "#",
    links: [
      { label: "Inicio", href: "#" },
      { label: "Productos", href: "#" },
      { label: "Contacto", href: "#" },
      { label: "Acerca", href: "#" },
    ],
  },
  {
    label: "Social",
    href: "#",
    links: [
      { label: "Email", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Github", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "RSS", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <VStack spacing={5} alignItems="initial">
          <Flex
            flexWrap="wrap"
            direction={{ base: "column", md: "row" }}
            alignItems="start"
            justifyContent="space-between"
          >
            {footerData.map((data, index) => (
              <Flex key={index} direction="column" mb="3">
                <Link
                  fontWeight="500"
                  href={data.href}
                  color={useColorModeValue("gray.800", "gray.300")}
                >
                  {data.label}
                </Link>
                <Flex direction={{ base: "row", md: "column" }}>
                  {data.links.map((link, index) => (
                    <Link
                      key={index}
                      padding={1}
                      fontSize={{ base: "sm", sm: "md" }}
                      href="#"
                      mr={{ base: 1, sm: 2, md: 0 }}
                      color="gray.500"
                      _hover={{ color: "blue.600" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex alignItems="center">
            <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
              &copy; 2023 The Great Gig In The Sky, Inc. All rights reserved.
            </Text>
          </Flex>
        </VStack>
      </Container>
    </div>
  );
};

export default Footer;
