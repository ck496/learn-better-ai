import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroComponent";
import TopPickGird from "./components/TopPickGird";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "bottom"`,
        lg: `"nav nav"  "main side" "bottom bottom"`, //For devices larger than 1020 px show side bar etc
      }}
      templateColumns={{
        base: "1fr",
        lg: "3fr 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <HeroSection />
      </GridItem>

      <GridItem area="side" display={{ base: "none", lg: "block" }}>
        <TopPickGird />
      </GridItem>

      <GridItem
        marginTop={3}
        height="600px"
        area="bottom"
        border="1px"
        borderColor="gray"
        borderStyle="solid"
      ></GridItem>
    </Grid>
  );
}

export default App;
