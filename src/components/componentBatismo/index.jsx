"use client";

import { Flex, Stack, Image } from "@chakra-ui/react";
import FeedbackHeader from "./components/batismo";

export default function Feedback() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "column" }}
      backgroundSize={"cover"}
      spacing={0} // Remove espaçamento entre os elementos
    >
      <Flex
        marginTop="-250px"
        direction={{ base: "column", md: "row" }} // Permite que os itens se organizem em coluna em telas pequenas
        flex={1}
        align={"center"} // Centraliza verticalmente
        justify={"space-evenly"} // Espaço entre os itens
        p={{ base: 6, md: 12 }}
        borderRadius={"0px 0px 15px 15px"}
        textAlign="center" // Centraliza o texto dentro do Flex
      >
        <FeedbackHeader />
        <Image
          src="https://universaljp.org/wp-content/uploads/2022/09/batismo-nas-aguas.jpg" // Substitua pela URL da sua imagem
          alt="Descrição da imagem"
          boxSize={{ base: "100%", md: "400px" }} // Tamanho da imagem
          objectFit="cover" // Ajusta a imagem para cobrir o espaço
          borderRadius="md" // Bordas arredondadas
          mt={{ base: 4, md: 0 }} // Margem superior para telas pequenas
        />
      </Flex>
    </Stack>
  );
}
