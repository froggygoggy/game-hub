import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" alt="Logo" />
      <Text>NavBar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
