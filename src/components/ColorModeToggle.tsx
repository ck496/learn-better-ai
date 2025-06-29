import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from "./ui/color-mode";

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <ColorModeButton
      onClick={toggleColorMode}
      cursor="pointer"
      _hover={{
        bg: useColorModeValue("#9171dc", "#45248f"),
        color: "white",
      }}
    />
  );
};

export default ColorModeToggle;
