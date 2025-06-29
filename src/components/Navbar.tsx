import { Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/mainIcon.webp";
import { navButtonValues } from "../data/navButtonValues";
import SearchInput from "./SearchInput";
import ColorModeToggle from "./ColorModeToggle";
import NavBarButtons from "./NavBarButtons";
import { useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
  const navBarTitles = ["Home", "Notes", "Tools", "Leaderboards", "About"];
  return (
    <Flex as="nav" px={4} py={2} bg={useColorModeValue("gray.200", "gray.900")}>
      <HStack gap={1} align="center">
        <Image src={logo} boxSize="50px" marginRight={2}></Image>
        {navButtonValues.map((value) => (
          <NavBarButtons key={value.path} buttonValue={value} />
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
