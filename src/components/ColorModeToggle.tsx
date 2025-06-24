import { ColorModeButton, useColorMode } from "./ui/color-mode";

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();
  return <ColorModeButton onClick={toggleColorMode} />;
};

export default ColorModeToggle;
