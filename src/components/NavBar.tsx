import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" alt="Logo" />

      <SeachInput onSearch={onSearch} />
      {/* wird durch chakra zur verfügung gestellt */}
      {/* <ColorModeButton /> */}

      {/* selbst erstellt */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
