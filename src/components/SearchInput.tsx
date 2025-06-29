import { Input, InputGroup } from "@chakra-ui/react";
import { LucideSearch } from "lucide-react";
import { useRef } from "react";
import { useColorModeValue } from "./ui/color-mode";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log("User Searched: " + ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<LucideSearch size={16} />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search content..."
          variant="subtle"
          bg={useColorModeValue("gray.210", "gray.950")}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
