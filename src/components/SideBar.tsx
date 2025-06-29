import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  DrawerRoot,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { useColorModeValue } from "./ui/color-mode";
import { Link } from "react-router-dom";
import useSideBar from "../hooks/useSideBar";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}
// Individual Nav items( Icon, String) for the side bar
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link to={"#"}>
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          py={2}
          px={4}
          role="group"
          cursor="pointer"
          _hover={{
            bg: useColorModeValue("#9171dc", "#45248f"),
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="12"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          <Text fontSize={14}>{children}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { sidebarItems, error, isLoading } = useSideBar();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.950")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      //   w={{ base: "full", lg: 20 }}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Options
        </Text>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </Flex>
      {sidebarItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

// Side bar component uses SidebarContent > NavItems
const SideBar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      //   bg={useColorModeValue("gray.100", "gray.800")}
      display={{ base: "none", lg: "block" }}
      height="full"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
      />
      <DrawerRoot
        isOpen={open}
        align="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </DrawerRoot>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: "flex", lg: "none" }} onOpen={onOpen} /> */}
    </Box>
  );
};

export default SideBar;
