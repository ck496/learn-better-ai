import { Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";
import SearchInput from "./SearchInput";
import ColorModeToggle from "./ColorModeToggle";
import NavBarButtons from "./NavBarButtons";

const Navbar = () => {
  return (
    <Flex as="nav" paddingX={4} paddingY={2} gap={0}>
      <HStack gap={1} align="center">
        <Image src={logo} boxSize="50px"></Image>
        <NavBarButtons>Home</NavBarButtons>
        <NavBarButtons>Notes</NavBarButtons>
        <NavBarButtons>Tools</NavBarButtons>
        <NavBarButtons>Leaderboards</NavBarButtons>
        <NavBarButtons>About</NavBarButtons>
      </HStack>
      <Spacer />
      <HStack gap={4}>
        <SearchInput />
        <ColorModeToggle />
      </HStack>
    </Flex>
  );
};

export default Navbar;
