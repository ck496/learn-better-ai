import { Container, Grid, GridItem, HStack } from "@chakra-ui/react";
import React from "react";
import HeroSection from "../components/HeroSection";
import BlogsGrid from "../components/BlogsGrid";
import Navbar from "../components/Navbar";
import TopPickGird from "../components/TopPickGird";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "bottom"`,
        lg: `"main main" "bottom bottom"`, //For devices larger than 1020 px show side bar etc
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
      alignItems="stretch"
      minH="100vh" //ensures that container is at least as tall as the browser window
    >
      <GridItem area="main" h="100%">
        <HeroSection />
      </GridItem>

      <GridItem area="bottom">
        <BlogsGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
