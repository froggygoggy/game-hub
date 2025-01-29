import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorPalette="teal"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="gray.900">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
      />
      <Text> Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
