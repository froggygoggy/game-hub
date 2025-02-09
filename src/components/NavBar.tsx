import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" alt="Logo" />

      <SeachInput />
      {/* wird durch chakra zur verfügung gestellt */}
      {/* <ColorModeButton /> */}

      {/* selbst erstellt */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
