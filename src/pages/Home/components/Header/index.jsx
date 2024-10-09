"use client";
import { useState } from "react";
import {
  Button,
  Flex,
  VStack,
  useBreakpointValue,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

// Importe suas imagens
import carroselimg1 from "../../../../assets/carroselimg1.jpg";

const images = [carroselimg1]; // Array com uma imagem

const HeroSection = () => {
  const [currentSlide] = useState(0); // Removido o estado de controle de slides

  const whatsappNumber = "+5575999194533";
  const whatsappMessage =
    "Olá, gostaria de mais informações sobre seus serviços.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Flex w={"full"} h={"100vh"} position={"relative"} overflow={"hidden"}>
      {/* Carrossel de imagens */}
      <Box
        w="full"
        h="100vh"
        bgImage={`url(${images[currentSlide]})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        transition="background-image 0.8s ease-in-out"
        position="absolute"
        top={0}
        left={0}
      ></Box>

      {/* Navegação do carrossel - opcional, já que há apenas uma imagem */}
      {/* <IconButton
        aria-label="Previous Slide"
        icon={<ArrowBackIcon boxSize={6} />}
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(255, 255, 255, 0.2)"
        _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
        _active={{ bg: "rgba(255, 255, 255, 0.4)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        backdropFilter="blur(5px)"
        transition="all 0.3s"
        isDisabled // Desabilitando o botão, pois não há slides para navegar
      /> */}
      {/* <IconButton
        aria-label="Next Slide"
        icon={<ArrowForwardIcon boxSize={6} />}
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(255, 255, 255, 0.2)"
        _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
        _active={{ bg: "rgba(255, 255, 255, 0.4)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        backdropFilter="blur(5px)"
        transition="all 0.3s"
        isDisabled // Desabilitando o botão, pois não há slides para navegar
      /> */}

      {/* Conteúdo principal */}
      <VStack
        w={"full"}
        alignItems={"left"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        position={"relative"}
        zIndex={1}
      >
        {/* <Container maxW={"1200px"} px={12} py={8}>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              as="h1"
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              Bem-vindos <br /> à DATA7
            </Text>

            <Stack direction={"row"}>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                bg={"blue.400"}
                rounded={"15px 0px 15px"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Fale Conosco
              </Button>
            </Stack>
          </Stack>
        </Container> */}
      </VStack>
    </Flex>
  );
};

export default HeroSection;
