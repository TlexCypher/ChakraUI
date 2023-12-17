import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <>
      < Navbar />
      <Grid templateColumns={"repeat(6, 1fr)"} bg="gray.50">
        <GridItem colSpan={{ base: 0, lg: 2, xl: 1 }} bg="brand.600" minH={"100vh"}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }}>
          <Outlet />
        </GridItem>
      </Grid >
    </>
  )
}
