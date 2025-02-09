import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SeachInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    // ref Hook, vs StateHook:
    // da es nur ein Formfeld gibt, ist der Ref Hook einfacher.

    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<BsSearch />} width="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seach games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SeachInput;
