import "./App.css";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "bottom-list"`,
        lg: `"nav nav"  "main side" "bottom-list bottom-list"`, //For devices larger than 1020 px show side bar etc
      }}
      templateColumns={{
        base: "1fr",
        lg: "2fr 1fr ",
      }}
    >
      <GridItem area="nav" bg="tomato">
        Nav
      </GridItem>
      <GridItem area="main" bg="papayawhip">
        Main
      </GridItem>
      <GridItem area="side" bg="gold">
        Side
      </GridItem>
      <GridItem area="bottom-list" bg="yellow">
        Bottom List
      </GridItem>
    </Grid>
  );
}

export default App;
