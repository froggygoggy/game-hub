import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" alt="Logo" />

      {/* wird durch chakra zur verfügung gestellt */}
      {/* <ColorModeButton /> */}

      {/* selbst erstellt */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
