import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavButtonValues } from "../data/navButtonValues";

interface NavButtonProps extends ButtonProps {
  buttonValue: NavButtonValues;
}
const NavBarButtons = ({ buttonValue, ...props }: NavButtonProps) => {
  return (
    <Link key={buttonValue.path} to={buttonValue.path}>
      <Button variant="ghost" size="sm" paddingX={2} minWidth="auto" {...props}>
        {buttonValue.label}
      </Button>
    </Link>
  );
};

export default NavBarButtons;
