"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Card = ({
  heading,
  description,
  iconSrc,
  href,
  borderRadius,
  bgColor,
  textColor,
  showButton,
  minW,
  isCenterAligned, // Novo prop para centralizar
}) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      minW={minW}
      w={"full"}
      borderWidth="1px"
      rounded={borderRadius}
      overflow="hidden"
      p={5}
      bg="rgba(0, 0, 0, 0.7)" // Fundo preto com 70% de transparência
      border="1px solid rgba(255, 255, 255, 0.3)"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
      mb={16}
      position="relative"
      zIndex={2} // Garantindo que o cartão esteja sobre o vídeo
      mx={isCenterAligned ? "auto" : "initial"} // Centralizar horizontalmente se for necessário
      backdropFilter="blur(10px)" // Estilo de vidro
      borderLeft="10px solid rgba(255, 0, 0, 0.5)" // Borda esquerda vermelha com transparência
    >
      <Stack align={"start"} spacing={4} textAlign="left">
        {iconSrc && (
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            rounded={"full"}
            bg="transparent"
            border="none"
            boxShadow="none"
          >
            <Image src={iconSrc} alt="Icon" boxSize="50px" objectFit="cover" />
          </Flex>
        )}
        <Box>
          <Heading size="md" color="white">
            <Text as="span" whiteSpace="pre-wrap">
              {heading}
            </Text>
          </Heading>
          <Box
            textAlign="left" // Justifica o texto
            mt={5}
            fontWeight={400}
            fontSize={"large"}
            color="white" // Alterado para branco
          >
            {description}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  return (
    <Box p={4} position="relative" zIndex={1}>
      <Container maxW={"1xl"} mt={8}>
        <Flex
          position={"relative"} // Ajustado para permitir o zIndex do contêiner
          marginTop={"-150px"}
          flexWrap="wrap"
          gap={6}
          justify="left"
          align="flex-start"
        >
          <Card
            heading={"Propósito"}
            description={<>NOSSO PROPÓSITO É SALVAR ALMAS!</>}
            href={"#"}
            bgColor="black"
            textColor="white"
            showButton={false}
            borderRadius="15px 15px 15px"
          />
        </Flex>
      </Container>
    </Box>
  );
}
