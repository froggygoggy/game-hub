import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SeachInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Seach games..." variant="subtle" />
    </InputGroup>
  );
};

export default SeachInput;
