import { Heading, Stack, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Hook para detectar se o componente está em exibição

const FeedbackHeader = () => {
  const controls = useAnimation(); // Controla a animação
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Detecta se o elemento está em exibição

  // Aciona a animação quando o componente entra em exibição
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const whatsappNumber = "+5575991016263";
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Animações com Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  return (
    <Stack
      ref={ref} // Ref necessário para detectar visibilidade
      spacing={4}
      w={"full"}
      maxW={"lg"}
      ml={{ base: 0, md: 0 }}
      mb={{ base: 4, md: 0 }}
      align="flex-start"
    >
      {/* Título animado */}
      <MotionHeading
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        initial={{ opacity: 0, x: -100 }} // Estado inicial fora da tela
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 }, // Animação ao entrar em view
          hidden: { opacity: 0, x: -100 }, // Volta ao estado original
        }}
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
            height: "100%",
            width: "5px",
            bg: "red.400",
            left: "-10px",
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

      {/* Texto animado */}
      <MotionText
        fontSize={{ base: "lg", md: "xl" }}
        color={"gray.600"}
        textAlign="left"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
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
