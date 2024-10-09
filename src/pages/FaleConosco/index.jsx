import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
// import observador from "../../assets/observador.gif";
// import meuHorarioImage from "../../assets/horario.png"; // Substitua pelo caminho da nova imagem
import Footer from "../Home/components/Footer"; // Certifique-se de que o caminho do Footer esteja correto
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
// import SectioParallelImage from "./components/aboutbackgroundComponents";

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
        pt={{ base: "20", md: "24" }} // Ajusta o padding-top para adicionar mais espaço nas telas menores
        spacing={{ base: 4, md: 8 }} // Adiciona espaçamento entre as colunas
        maxW={"1200px"} // Define a largura máxima do Stack
        mx="auto" // Centraliza o Stack horizontalmente
        px={{ base: "4", md: "8" }} // Adiciona padding horizontal ao Stack
        py={{ base: "8", md: "16" }} // Adiciona padding vertical ao Stack
      >
        <Flex
          p={{ base: 4, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
          mt={{ base: "55", md: "0" }} // Adiciona margem superior para empurrar o conteúdo para baixo em telas menores
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            paddingTop={{ base: "40px", md: "90px" }} // Ajusta o padding-top do Stack interno para telas menores
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
                Horário de Funcionamento
              </Text>
              <br />
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
              <Stack spacing={2}>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Segunda:</Text>
                  <Text ml={2}>FECHADO</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Terça:</Text>
                  <Text ml={2}>19:30 às 17:00</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Quarta:</Text>
                  <Text ml={2}>FECHADO</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Quinta:</Text>
                  <Text ml={2}>FECHADO</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Sexta:</Text>
                  <Text ml={2}>19:30 às 17:00</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Sábado:</Text>
                  <Text ml={2}>15:00 às 17:00, 18:00 às 20:00</Text>
                </Flex>
                <Flex justify="flex-start" w="full">
                  <Text fontWeight="bold">Domingo:</Text>
                  <Text ml={2}>16:00 às 18:00, 18:00 às 21:00</Text>
                </Flex>
              </Stack>
            </Text>

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank" // Abre o link em uma nova aba
                rel="noopener noreferrer"
                bg={"red.700"}
                rounded={"10px"}
                color={"white"}
                _hover={{ bg: "red.500" }}
              >
                Fale Conosco
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
          py={{ base: "10", md: "0" }} // Adiciona padding vertical para telas menores
          mt={{ base: "10", md: "0" }} // Adiciona margem superior para empurrar a imagem para baixo em telas menores
        >
          <Image
            src="https://yt3.googleusercontent.com/_RkCMGevpVvK62kKaa_RR3GM8Y38Q5lbpSklF9yb5qZSoL17NpICFGFGn9XdgQVPM4BXV5P6Yiw=s900-c-k-c0x00ffffff-no-rj" // Use o caminho da nova imagem
            alt="Horário de Funcionamento" // Adicione uma descrição apropriada
            borderRadius="100px 0px 100px 0px" // Mantém o mesmo estilo da borda
            boxShadow="0 0 10px blue.400" // Mantém a mesma sombra
            maxWidth="450px" // Define a largura máxima da imagem
            width="100%" // Ajusta a largura da imagem
          />
        </Flex>
      </Stack>
      {/* <SectioParallelImage /> */}
      <Footer />
      <ScrollToTopButton /> {/* Adicionar o botão de "subir" */}
    </>
  );
}
