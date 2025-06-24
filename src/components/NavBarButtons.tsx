import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const NavBarButtons = (props: ButtonProps) => {
  return (
    <Button variant="ghost" size="sm" paddingX={2} minWidth="auto" {...props} />
  );
};

export default NavBarButtons;
