import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Importa o motion

const MotionBox = motion(Box); // Cria um MotionBox

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
  isCenterAligned,
  hasRedBars,
}) => {
  return (
    <MotionBox
      maxW={{ base: "full", md: "275px" }}
      minW={minW}
      w={"full"}
      borderWidth="1px"
      rounded={borderRadius}
      overflow="hidden"
      p={5}
      bg="rgba(0, 0, 0, 0.7)"
      border="1px solid rgba(255, 255, 255, 0.3)"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
      mb={16}
      position="relative"
      zIndex={2}
      mx={isCenterAligned ? "auto" : "initial"}
      backdropFilter="blur(10px)"
      borderLeft="10px solid rgba(255, 0, 0, 0.5)"
      _after={
        hasRedBars
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "5px",
              background: "red",
              display: "block",
              zIndex: 3,
              boxShadow: "5px 0 0 red, 10px 0 0 red, 15px 0 0 red",
            }
          : {}
      }
      initial={{ opacity: 0, y: 20 }} // Define a animação inicial
      animate={{ opacity: 1, y: 0 }} // Animação de entrada
      exit={{ opacity: 0, y: 20 }} // Animação de saída
      transition={{ duration: 0.3 }} // Duração da animação
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
            textAlign="left"
            mt={5}
            fontWeight={400}
            fontSize={"large"}
            color="white"
          >
            {description}
          </Box>
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default function GridListWith() {
  return (
    <Box p={4} position="relative" zIndex={1}>
      <Container maxW={"1xl"} mt={8}>
        <Flex
          position={"relative"}
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

          <Card
            heading={"Fé em Deus"}
            description={
              <>
                “Pois vivemos por fé, e não pelo que vemos.” (2 Coríntios 5:7)
              </>
            }
            href={"#"}
            bgColor="black"
            textColor="white"
            showButton={false}
            borderRadius="15px 15px 15px"
          />

          <Card
            heading={"Seja Luz"}
            description={<>“Vocês são a luz do mundo!” (Mateus 5:14)</>}
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
