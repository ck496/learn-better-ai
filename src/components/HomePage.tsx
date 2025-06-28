import { Container, Grid, GridItem, HStack } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./HeroSection";
import BottomBlogsGrid from "./BottomBlogsGrid";
import Navbar from "./Navbar";
import TopPickGird from "./TopPickGird";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "bottom"`,
        lg: `"main side" "bottom bottom"`, //For devices larger than 1020 px show side bar etc
      }}
      templateColumns={{
        base: "1fr",
        lg: "3fr 1fr",
      }}
      alignItems="stretch"
      minH="100vh" //ensures that container is at least as tall as the browser window
      padding={2}
    >
      <GridItem area="main" h="100%" marginTop={1} marginBottom={2}>
        <HeroSection />
      </GridItem>

      <GridItem
        area="side"
        display={{ base: "none", lg: "block" }}
        h="100%"
        marginTop={1}
        marginBottom={2}
      >
        <TopPickGird />
      </GridItem>

      <GridItem marginTop={3} height="600px" area="bottom">
        <BottomBlogsGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
