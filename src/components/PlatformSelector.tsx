import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) {
    console.log("Error with loading usePlatforms");
    return null;
  }

  return (
    <>
      Test
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Platforms <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {/* {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.slug}>
              {platform.name}
            </MenuItem>
          ))} */}
          <MenuItem value="test"> Test</MenuItem>
          <MenuItem value="test2"> Test2</MenuItem>
          <MenuItem value="test3"> Test3</MenuItem>
          <MenuItem value="test4"> Test4</MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
