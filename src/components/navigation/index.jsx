import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Link,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DesktopNav } from "../../components/navigation/components/DesktopNav";
import { MobileNav } from "../../components/navigation/components/MobileNav";
import data71 from "../../assets/data71.png";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  // Define o background dependendo do breakpoint
  const navbarBackground = useBreakpointValue({
    base: "rgba(255, 255, 255, 1)", // Opaco no mobile
    md: useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(0, 0, 0, 0.5)"), // Transparente no desktop
  });

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      rounded={"15px 0px 15px"}
      zIndex={999}
      margin={4}
      transition={"all 0.3s ease"}
    >
      <Box maxW="1100px" mx="auto">
        <Flex
          maxH={{ base: "50px", md: "60px" }} // Altura máxima
          bg={navbarBackground} // Background definido pelo breakpoint
          color={useColorModeValue("gray.600", "white")}
          minH={{ base: "40px", md: "50px" }} // Altura mínima
          py={{ base: 1, md: 6 }} // Padding vertical
          px={{ base: 3, md: 2 }} // Padding lateral
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justify={"center"}
          rounded={"0px 0px 0px"}
          borderRadius={"10px"}
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "space-between" }}
            align={"center"}
            w={"100%"}
          >
            <Flex
              align={"center"}
              justify={{ base: "center", md: "flex-start" }} // Alinhamento ajustado para "flex-start"
              flex={{ base: "auto", md: 3 }}
              ml={{ base: -100, md: 5 }} // Margem esquerda ajustada no desktop
            >
              <Link to="/">
                <Image
                  src="https://yt3.googleusercontent.com/_RkCMGevpVvK62kKaa_RR3GM8Y38Q5lbpSklF9yb5qZSoL17NpICFGFGn9XdgQVPM4BXV5P6Yiw=s900-c-k-c0x00ffffff-no-rj"
                  alt="Logo"
                  borderRadius="50px"
                  height={{ base: "40px", md: "40px" }} // Altura da logo
                  objectFit={"contain"}
                />
              </Link>
            </Flex>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
              justify={"flex-end"}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={5} h={5} />
                  ) : (
                    <HamburgerIcon w={6} h={6} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                transition={"background 0.3s ease"}
              />
            </Flex>

            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", md: "center" }}
              align={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Flex ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}
