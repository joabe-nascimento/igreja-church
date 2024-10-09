import { Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Importando framer-motion para animação

const FeedbackHeader = () => {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533"; // Substitua pelo número do WhatsApp desejado
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Componente de animação usando Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  return (
    <Stack
      spacing={4}
      w={"full"}
      maxW={"lg"}
      ml={{ base: 0, md: 0 }}
      mb={{ base: 4, md: 0 }}
      align="flex-start"
    >
      {/* Título animado com borda à esquerda */}
      <MotionHeading
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text
          color={"gray.700"}
          fontWeight={"800"}
          as={"span"}
          position={"relative"}
          _before={{
            content: "''",
            position: "absolute",
            height: "100%", // Borda esquerda do tamanho do título
            width: "5px",
            bg: "red.400", // Cor da borda
            left: "-10px", // Colocar a borda fora do texto
            top: 0,
            borderRadius: "full",
          }}
          _after={{
            width: "full",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "blue.400",
            height: "4px",
            zIndex: -1,
          }}
        >
          Batismo
        </Text>
      </MotionHeading>

      {/* Texto com animação */}
      <MotionText
        fontSize={{ base: "lg", md: "xl" }}
        color={"gray.600"}
        textAlign="left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        O batismo representa um novo nascimento, uma transformação profunda e
        espiritual na vida de uma pessoa. É um momento em que decidimos
        renunciar nossas vontades e desejos egoístas para seguir a vontade de
        Jesus. Esse ato de fé nos traz uma vida renovada, onde a luz de Cristo
        brilha em nós, e nos tornamos capazes de ver o mundo com novos olhos. É
        uma jornada de entrega, amor e devoção, onde encontramos um propósito
        maior.
      </MotionText>
    </Stack>
  );
};

export default FeedbackHeader;
