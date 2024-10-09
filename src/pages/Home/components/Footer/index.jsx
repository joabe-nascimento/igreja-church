import {
  Box,
  Button,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import data71 from "../../../../assets/data71.png";
import { FaWhatsapp } from "react-icons/fa";

const Logo = (props) => {
  return <img src={data71} alt="Logo" width={180} height={45} {...props} />;
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#001F3F", "#001F3F")}
      color="gray.200"
      py={12}
      px={6}
      mt={20}
    >
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
      >
        {/* <Stack align="center" mb={10}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Site Institucional
          </Text>
        </Stack> */}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mb={10}>
          {/* Seção de Contato */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Fale Conosco
            </Text>
            <Text fontSize="md">Telefone:</Text>
            <Text fontSize="md">Email:</Text>
            {/* <Button
              as="a"
              href="https://wa.me/5575999194533"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              size="md"
              width="auto" // Diminuição da largura
              borderRadius="full"
              _hover={{ transform: "scale(1.05)", bg: "green.500" }}
              transition="all 0.3s ease"
            >
              Fale Conosco no WhatsApp
            </Button> */}
          </Stack>

          {/* Seção de Endereço */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Endereço
            </Text>
            <Text
              fontSize="md"
              color="gray.300"
              textAlign={{ base: "center", lg: "left" }}
            >
              Avenida Noide Cerqueira, 4048, Bairro Sim, Feira de Santana, BA,
              44085-052
            </Text>
          </Stack>

          {/* Seção de Horário de Funcionamento */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Horário de Funcionamento
            </Text>
            <Text fontSize="md">Segunda FECHADO</Text>
            <Text fontSize="md">Terça 19:30 às 17:00</Text>
            <Text fontSize="md">Quarta FECHADO</Text>
            <Text fontSize="md">Quinta FECHADO</Text>
            <Text fontSize="md">Sexta: 19:30 às 17:00</Text>
            <Text fontSize="md">
              Sábado: 15:00 às 17:00 <br />
              18:00 às 20:00
            </Text>
            <Text fontSize="md">
              Domingo: 16:00 às 18:00 <br />
              18:00 às 21:00
            </Text>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="gray.600" mb={8} />

        {/* <Stack spacing={4} align="center" mt={8}>
          <Logo />
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Data7. Todos os direitos reservados.
          </Text>
        </Stack> */}
      </Container>
    </Box>
  );
};

export default Footer;
