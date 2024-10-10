import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaRegClock } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Propósitos", href: "/quemsomos" },
  { label: "Serviços", href: "/serviços" },
  { label: "Ações", href: "/ações" },
  {
    label: "Contatos +",
    href: "/contact",
    children: [
      {
        label: "Telefone",
        href: "tel:+5575991016263",
        icon: FaPhone,
      },
      {
        label: "E-mail",
        href: "mailto:suporte@exemplo.com",
        icon: FaEnvelope,
      },
      {
        label: "Horários",
        href: "/horarios",
        icon: FaRegClock,
      },
    ],
  },
];

export const DesktopNav = () => {
  const navigate = useNavigate();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "black");

  const handleClick = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <Flex justifyContent="flex-end">
      <Stack direction={"row"} spacing={6} align="center">
        {" "}
        {/* Ajustado o spacing */}
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} position="relative">
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  p={2}
                  fontSize={"md"}
                  fontWeight={600}
                  color={linkColor}
                  cursor="pointer"
                  fontFamily="Poppins, sans-serif" // Fonte Poppins
                  whiteSpace="nowrap" // Evita quebra de texto
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  transition={"all 0.3s ease"}
                  onClick={() => handleClick(navItem.href)}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <Box
                        p={2}
                        fontSize={"md"}
                        fontWeight={600}
                        color={linkColor}
                        display={"flex"}
                        alignItems={"center"}
                        cursor="pointer"
                        fontFamily="Poppins, sans-serif"
                        whiteSpace="nowrap" // Evita quebra de texto
                        _hover={{
                          textDecoration: "none",
                          color: linkHoverColor,
                        }}
                        transition={"all 0.2s ease"}
                        onClick={() => handleClick(child.href)}
                        key={child.label}
                      >
                        <Icon as={child.icon} mr={2} /> {child.label}
                      </Box>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};
