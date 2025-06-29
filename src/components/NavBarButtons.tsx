import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavButtonValues } from "../data/navButtonValues";
import { useColorModeValue } from "./ui/color-mode";

interface NavButtonProps extends ButtonProps {
  buttonValue: NavButtonValues;
}
const NavBarButtons = ({ buttonValue, ...props }: NavButtonProps) => {
  return (
    <Link key={buttonValue.path} to={buttonValue.path}>
      <Button
        variant="ghost"
        size="lg"
        paddingX={2}
        minWidth="auto"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("#9171dc", "#45248f"),
          color: "white",
        }}
        {...props}
      >
        {buttonValue.label}
      </Button>
    </Link>
  );
};

export default NavBarButtons;
