import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        // color="gray.900"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorPalette="teal"
        size="lg"
        trackLabel={{
          on: (
            // <Icon color="gray.900">
            // ^^^^^^^^^^^^^^^^^^^does not work. Causes warning in console.
            <FaSun />
            // </Icon>
          ),
          off: (
            // <Icon color="gray.400">
            <FaMoon />
            // </Icon>
          ),
        }}
      />
      <Text> Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
