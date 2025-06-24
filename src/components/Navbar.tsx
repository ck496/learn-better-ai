import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";
import { HiddenSelect } from "@chakra-ui/react/dist/types/components/select/namespace";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={2}>
      <Image src={logo} boxSize="50px"></Image>
      <HStack>
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Notes</Button>
        <Button variant="ghost">Paths</Button>
        <Button variant="ghost">Tools</Button>
        <Button variant="ghost">Leaderboards</Button>
        <Button variant="ghost">About</Button>
      </HStack>
      <SearchInput />
    </HStack>
  );
};

export default Navbar;
