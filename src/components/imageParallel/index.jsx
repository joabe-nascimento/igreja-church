"use client";

import {
  Flex,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  useBreakpointValue,
  keyframes,
  extendTheme,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";

// Define a animação pulsante para a logo
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Define a animação de sangue para os traços
const bloodFlow = keyframes`
  0% { background-color: red; }
  50% { background-color: darkred; }
  100% { background-color: red; }
`;

export default function SectionSoluctions() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        justifyContent="center" // Centraliza horizontalmente
        alignItems="center" // Centraliza verticalmente
        mb={4} // Margem inferior para espaçamento
      >
        <Box
          flex="0 0 30%"
          height="3px"
          mx={2}
          animation={`${bloodFlow} 1s infinite`} // Efeito de sangue pulsando
        />{" "}
        {/* Traço à esquerda */}
        <Image
          src="https://yt3.googleusercontent.com/_RkCMGevpVvK62kKaa_RR3GM8Y38Q5lbpSklF9yb5qZSoL17NpICFGFGn9XdgQVPM4BXV5P6Yiw=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
          borderRadius="50px"
          height={{ base: "40px", md: "40px" }} // Altura da logo
          objectFit={"contain"}
          animation={`${pulse} 2s infinite`} // Efeito de pulsação na logo
        />
        <Box
          flex="0 0 30%"
          height="3px"
          mx={2}
          animation={`${bloodFlow} 1s infinite`} // Efeito de sangue pulsando
        />{" "}
        {/* Traço à direita */}
      </Flex>

      <Parallax
        blur={0}
        bgImage="https://media.istockphoto.com/id/484308927/pt/foto/elogio-evento-em-uma-igreja-local.jpg?s=612x612&w=0&k=20&c=pcRX9yIDCWTs3UNjV3PHA8yoLKQ8znQB-PsU_d6p20A="
        bgImageAlt="Imagem de fundo"
        strength={500} // Ajuste o valor para controlar a intensidade do efeito de paralaxe
      >
        <Flex
          w={"full"}
          h={isMobile ? "40vh" : "50vh"} // Ajusta a altura para dispositivos móveis
          backgroundSize={"cover"} // Garante que a imagem cubra a área sem esticar
          backgroundPosition={"center center"} // Centraliza a imagem
          backgroundRepeat={"no-repeat"} // Evita a repetição da imagem
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            h={"full"} // Garante que o gradiente cubra a altura total
            align={"center"} // Centraliza o conteúdo
          >
            <Stack maxW={"2xl"} align={"center"} spacing={6}>
              <Text
                align={"center"}
                color={"white"}
                fontWeight={800}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              >
                O Que é o Evangelismo?
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Parallax>
    </>
  );
}
