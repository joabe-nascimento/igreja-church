import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
} from "@chakra-ui/react";
// import observador from "../../assets/observador.gif";
// import meuHorarioImage from "../../assets/horario.png"; // Substitua pelo caminho da nova imagem
import Footer from "../Home/components/Footer"; // Certifique-se de que o caminho do Footer esteja correto
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import SectionSoluctions from "../../components/imageParallel";

export default function FaleConosco() {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533"; // Substitua pelo número do WhatsApp desejado
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        pt={{ base: "20", md: "24" }}
        spacing={{ base: 4, md: 8 }}
        maxW={"1200px"}
        mx="auto"
        px={{ base: "4", md: "8" }}
        py={{ base: "8", md: "16" }}
      >
        <Flex
          p={{ base: 4, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
          mt={{ base: "55", md: "0" }}
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            paddingTop={{ base: "40px", md: "90px" }}
          >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"gray.700"}
                fontWeight={"800"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Fale Conosco
              </Text>
              <br />
            </Heading>

            <FormControl id="nome" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Seu Nome" variant="filled" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Seu Email" variant="filled" />
            </FormControl>

            <FormControl id="telefone" isRequired>
              <FormLabel>Telefone</FormLabel>
              <Input type="tel" placeholder="Seu Telefone" variant="filled" />
            </FormControl>

            <FormControl id="mensagem">
              <FormLabel>Mensagem</FormLabel>
              <Textarea placeholder="Sua Mensagem" variant="filled" />
            </FormControl>

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                colorScheme="blue"
                size="lg"
                type="submit"
                variant="solid"
              >
                Enviar
              </Button>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                bg={"red.700"}
                rounded={"10px"}
                color={"white"}
                _hover={{ bg: "red.500" }}
                size="lg"
              >
                Fale Conosco no WhatsApp
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <Flex
          flex={1}
          position="relative"
          zIndex={1}
          justify={"center"}
          align={"center"}
          py={{ base: "10", md: "0" }}
          mt={{ base: "10", md: "0" }}
        >
          <Image
            src="https://yt3.googleusercontent.com/_RkCMGevpVvK62kKaa_RR3GM8Y38Q5lbpSklF9yb5qZSoL17NpICFGFGn9XdgQVPM4BXV5P6Yiw=s900-c-k-c0x00ffffff-no-rj"
            alt="Horário de Funcionamento"
            borderRadius="100px 0px 100px 0px"
            boxShadow="0 0 10px blue.400"
            maxWidth="450px"
            width="100%"
          />
        </Flex>
      </Stack>

      <SectionSoluctions />

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
