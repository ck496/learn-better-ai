import {
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopPickGird from "../components/TopPickGird";
import SideBar from "../components/SideBar";

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: isHome ? `"nav nav"  "main"` : `"nav nav"  "side main"`, //For devices larger than 1020 px show side bar etc
      }}
      templateColumns={{
        base: "1fr",
        lg: isHome ? "1fr" : "1fr 6fr",
      }}
    >
      {/* Always Render Navbar */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      {/* for non homepages, render a side bar */}
      {!isHome && (
        <GridItem area="side">
          <SideBar />
        </GridItem>
      )}

      {/*<Outlet> plugs in appropriate component based on routes */}
      <GridItem area="main">
        <Outlet />
      </GridItem>

      {/* for homepage route, display TopPics component on the right side */}
    </Grid>
  );
};

export default Layout;
