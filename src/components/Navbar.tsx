import { Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";
import SearchInput from "./SearchInput";
import ColorModeToggle from "./ColorModeToggle";
import NavBarButtons from "./NavBarButtons";

const Navbar = () => {
  const navBarTitles = ["Home", "Notes", "Tools", "Leaderboards", "About"];
  return (
    <Flex as="nav" paddingX={1} marginBottom={4}>
      <HStack gap={1} align="center">
        <Image src={logo} boxSize="50px" marginRight={2}></Image>
        {navBarTitles.map((title) => (
          <NavBarButtons key={title}>{title}</NavBarButtons>
        ))}
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
