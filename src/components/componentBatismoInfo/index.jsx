"use client";

import { Flex, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BatismoInfo from "./components/batismo";

// Componentes animados usando framer-motion
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function MainBatismoInfo() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "column" }}
      backgroundSize={"cover"}
      spacing={0} // Remove espaçamento entre os elementos
    >
      <MotionFlex
        marginTop={{ base: "50px", md: "100px" }} // Ajuste da margem superior para telas pequenas e grandes
        direction={{ base: "column", md: "row" }} // Organiza os itens em coluna para telas pequenas
        flex={1}
        align={"center"} // Centraliza verticalmente
        justify={"space-evenly"} // Espaço entre os itens
        p={{ base: 6, md: 12 }}
        borderRadius={"0px 0px 15px 15px"}
        textAlign="center" // Centraliza o texto dentro do Flex
        initial={{ opacity: 0, y: 50 }} // Estado inicial (fora da tela)
        whileInView={{ opacity: 1, y: 0 }} // Animação quando o item entra na visualização
        viewport={{ once: true, amount: 0.2 }} // Controla quando a animação ocorre
        transition={{ duration: 0.8 }} // Duração da animação
      >
        <BatismoInfo />

        <MotionImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MRqqzHpd38SJxiNJjLUQPbC6v1xMCv-xyJmrxq0qdno79iHrxfn3T0gN-D-yKjifUxA&usqp=CAU" // Substitua pela URL da sua imagem
          alt="Descrição da imagem"
          boxSize={{ base: "100%", md: "400px" }} // Tamanho da imagem
          objectFit="cover" // Ajusta a imagem para cobrir o espaço
          borderRadius="md" // Bordas arredondadas
          mt={{ base: 4, md: 0 }} // Margem superior para telas pequenas
          initial={{ opacity: 0, scale: 0.8 }} // Estado inicial (fora da tela)
          whileInView={{ opacity: 1, scale: 1 }} // Animação quando a imagem entra na visualização
          viewport={{ once: true, amount: 0.2 }} // A animação ocorre apenas uma vez
          transition={{ duration: 1 }} // Duração da animação
        />
      </MotionFlex>
    </Stack>
  );
}
